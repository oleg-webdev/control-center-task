// @flow
import React, { Component } from 'react';
import Header from '../../Components/Header';
import Body from '../../Components/Body';
import driverData from '../../../mocks/driverData.json';
import { makeId } from '../../helpers';
import UserCard from './UserCard';
import Cr from '../../fac/Preloader';
import styles from './index.scss';

const { data } = driverData;

type Props = {
  dataProvider: Object,
}

class ManagementComponent extends Component<Props> {
  state = {
    fetching: true,
  }

  componentDidMount() {
    this.makeAFakeAjaxCall()
      .then((usrData) => {
        this.props.dataProvider.setUserData(usrData);
        this.setState({ fetching: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    const { dataProvider: { state } } = nextProps;
    // Maybe do smth with incoming data
    // in lifecycle methods
    console.log(state.userData);
  }

  /**
   * @param  {Promise} => new Promise
   * @param  {Promise.resolve} resolve
   * @param  {Promise.reject} reject
   *
   * Ofc, we could use just setTimeout,
   * but Promise is more suitable for a such action
   */
  makeAFakeAjaxCall = () => new Promise(((resolve, reject) => {
    setTimeout(() => {
      const dataReceived = true;
      if (!dataReceived) {
        reject(new Error('Smth is wrong'));
      }
      resolve(data);
    }, 500);
  }))

  addADriver = () => {
    const { dataProvider } = this.props;
    dataProvider.addUser({
      id: makeId(),
      firstName: 'George',
      lastName: 'Andersson',
      phone: '0523-770-985',
      addr: '542 Washington st. NY, NY',
    });
  }

  render() {
    const { addAUserButton } = styles;
    const { fetching } = this.state;
    const { dataProvider, dataProvider: { state } } = this.props;
    return (
      <div className={styles.managementContainer}>
        <Header>
          <h3>Mangement section without styles</h3>
        </Header>
        <Body classes={styles.managementBody} >
          <button
            className={addAUserButton}
            onClick={this.addADriver}
          >+ Add driver
          </button>
          <div style={{ overflowY: 'auto', height: '100%' }}>
            <Cr canIrender={!fetching}>
              {() => {
              if (state.userData.length === 0) {
                return <p>User data is empty</p>;
              }

              return state.userData.map(theUser => (
                <UserCard
                  key={theUser.id}
                  userdata={theUser}
                  onDelete={() => dataProvider.removeUser(theUser)}
                />
                ));
              }}
            </Cr>
          </div>

        </Body>
      </div>
    );
  }
}

export default ManagementComponent;
