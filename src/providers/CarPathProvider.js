// @flow
import { Container } from 'unstated';
import differenceBy from 'lodash/differenceBy';
import carPathMock from '../../mocks/carPathMock.json';

type State = {
  carPath: boolean
};

export default class CarPathProvider extends Container<State> {
  state = {
    activePath: carPathMock.data[2],
    carPath: carPathMock.data,
    carPathPoints: [
      carPathMock.data[2],
      carPathMock.data[3],
    ],
  };

  /**
   * @param  {Object} data
   */
  setActivePath = (data) => {
    this.setState({ activePath: data });
  }

  /**
   * Don't know what exactly logic should be.
   * So this method will add a random and not existing item from carPath
   */
  addToPath = () => {
    const { carPath, carPathPoints } = this.state;
    const notAddedItems = differenceBy(carPath, carPathPoints, 'lat');

    if (notAddedItems.length) {
      const newBundle = [
        ...carPathPoints,
        notAddedItems[
          Math.floor(Math.random() * notAddedItems.length)
        ],
      ];
      this.setState({ carPathPoints: newBundle });
    }
  }

  /**
   * @param  {Object} item
   * Actually this part should be compared with both lat and lng param,
   * but I skipped it, since our path is pretty simple
   */
  removeFromPath = (item) => {
    const { carPathPoints } = this.state;
    this.setState({
      carPathPoints: carPathPoints.filter(thePath => thePath.lat !== item.lat),
    });
  }
}
