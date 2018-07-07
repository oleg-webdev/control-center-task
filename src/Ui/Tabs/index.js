import React, { Component, Children } from 'react';
import styles from './styles.scss';

type TabProps = {
  children: React.ChildrenArray<React.Node> | React.Node,
  handleSelectTabCallback: () => void,
  defaultActiveKey: String,
  activateSpecificKey: String | Boolean,
}

class TabsWrapper extends Component<TabProps> {
  state = {
    activeTabName: this.props.defaultActiveKey,
    activeIndex: null,
    activeChildren: null,
  };

  componentDidMount() {
    if (!this.state.activeChildren) {
      this.resolveActiveChildren(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.resolveActiveChildren(nextProps);

    const { activateSpecificKey } = nextProps;
    if (activateSpecificKey !== this.props.activateSpecificKey && activateSpecificKey) {
      const children = Children.toArray(nextProps.children);
      this.activateByTabkey(children, activateSpecificKey);
    }
  }

  activateByTabkey = (childs, tabkey) => {
    const children = Children.toArray(childs);
    const active = children.find(item => item.props.tabkey === tabkey);

    this.setState({
      activeTabName: tabkey,
      activeChildren: active,
      activeIndex: children.indexOf(active),
    });
  }

  resolveActiveChildren = (props) => {
    const children = Children.toArray(props.children);
    const { activeTabName } = this.state;

    const active = children.find(item => item.props.tabkey === activeTabName);

    this.setState({
      activeChildren: active,
      activeIndex: children.indexOf(active),
    });
  }

  hadndleSelectTab = (activeTabName, index) => {
    const data = {
      activeTabName,
      activeIndex: index,
      activeChildren: this.props.children[index],
    };
    this.setState(data);

    if (this.props.handleSelectTabCallback) {
      this.props.handleSelectTabCallback(data);
    }
  }

  renderTabsHeading() {
    if (!this.props.children.length) return null;

    return (
      <ul>
        {Children.map(this.props.children, (child, index) => {
            if (child) {
              return React.cloneElement(child, {
                onSelectTab: this.hadndleSelectTab,
                tabKey: child.props.tabkey,
                childIndex: index,
                isActive: child.props.tabkey === this.state.activeTabName,
              });
            }

            return null;
          })}
      </ul>
    );
  }

  // Filter thru children and find matched values
  renderActiveTabContent = () => {
    if (!this.state.activeChildren) {
      return null;
    }

    return (
      <div className="tabviewClass">
        {this.state.activeChildren && this.state.activeChildren.props.children}
      </div>
    );
  }

  render() {
    const wrapperClasses = [
      // maybe add some classes
      styles.tabContainerClass,
      this.state.activeIndex,
    ].join(' ');
    return (
      <div className={wrapperClasses}>
        {this.renderTabsHeading()}
        {this.renderActiveTabContent()}
      </div>
    );
  }
}

//
// Single tab
//
type TabPanelProps = {
  childIndex: Number,
  title: React.ElementType | string,
  isActive: boolean,
  tabKey: string,
  onSelectTab: () => void,
}

const TabPanel = (props:TabPanelProps) => {
  const tabClasses = [
    `index-${props.childIndex}`,
    `tabKey-${props.tabKey}`,
    props.isActive ? 'active-tabclass' : '',
  ].join(' ');

  return (
    <li className={tabClasses}>
      <button onClick={() => props.onSelectTab(props.tabKey, props.childIndex)}>
        {props.title}
      </button>
    </li>
  );
};

export { TabsWrapper, TabPanel };
