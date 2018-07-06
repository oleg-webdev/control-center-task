import React from 'react';
import { usercard2 } from '../../assets/images/placeholders';
import styles from './index.scss';

type Props = {
  carpath: {
    state: {},
    setActivePath: () => void,
    removeFromPath: () => void
  },
  itemData: {},
}

const UserCardItem = (props:Props) => {
  const { activePath } = props.carpath.state;
  const { itemData } = props;
  const isActive = activePath.lat === itemData.lat;
  const resolveClass = isActive
    ? styles.isActive : styles.notActive;

  return (
    <div className={resolveClass}>
      <button
        onClick={() => props.carpath.setActivePath(itemData)}
      >
        <b>Drop-Off</b>
      </button>
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <img src={usercard2} alt="" />

        <button
          onClick={() => props.carpath.removeFromPath(itemData)}
        >Remove
        </button>
      </div>

    </div>
  );
};

export default UserCardItem;
