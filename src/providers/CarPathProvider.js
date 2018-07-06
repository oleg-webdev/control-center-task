// @flow
import { Container } from 'unstated';
import differenceBy from 'lodash/differenceBy';

type State = {
  carPath: boolean
};

export default class CarPathProvider extends Container<State> {
  state = {
    activePath: { lat: 38.916072, lng: -77.048940 },
    carPath: [
      { lat: 38.915233, lng: -77.048559 },
      { lat: 38.916072, lng: -77.048940 },
      { lat: 38.916477, lng: -77.047706 },
      { lat: 38.916752, lng: -77.046778 },
      { lat: 38.915992, lng: -77.046290 },
      { lat: 38.916026, lng: -77.045706 },
    ],
    carPathPoints: [
      { lat: 38.915233, lng: -77.048559 },
      { lat: 38.916072, lng: -77.048940 },
    ],
  };

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
