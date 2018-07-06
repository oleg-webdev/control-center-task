// @flow
import { Container } from 'unstated';

type SidebarState = {
  isOpen: boolean
};

export default class SidebarProvider extends Container<SidebarState> {
  state = {
    isOpen: false,
    carData: {},
  };

  setCar = (data) => {
    this.setState({ carData: { ...data } });
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  open = () => {
    this.setState({ isOpen: true });
  }

  close = () => {
    this.setState({ isOpen: false });
  }
}
