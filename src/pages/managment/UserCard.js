// @flow
import React from 'react';
import styles from './index.scss';
import { singleUser } from '../../assets/images/placeholders';

type Props = {
  userdata: Object,
  onDelete: () => void
}

const UserCard = (props:Props) => {
  const { userdata, onDelete } = props;

  return (
    <div className={styles.userCard} key={userdata.key}>
      <span>
        <img src={singleUser} alt="" />
      </span>
      <span>{userdata.firstName}</span>
      <span>{userdata.lastName}</span>
      <span>{userdata.phone}</span>
      <span>*****</span>
      <span>{userdata.addr}</span>
      <span>shifts data</span>
      <span>
        <button onClick={onDelete}>Del action</button>
      </span>
    </div>
  );
};

export default UserCard;
