// @flow
import { Container } from 'unstated';

type SidebarState = {
  isOpen: boolean
};

export default class UserDataProvider extends Container<SidebarState> {
  state = {
    userData: [],
  };

  /**
   * @param {Array} uData
   */
  setUserData = uData => this.setState({ userData: uData });

  /**
   * @param  {Object} user
   */
  addUser = user => this.setState({ userData: [...this.state.userData, user] });

  /**
   * @param  {Object} user
   */
  removeUser = (user) => {
    const prepare = this.state.userData
      .filter(item => item.id !== user.id);
    this.setState({ userData: prepare });
  }
}
