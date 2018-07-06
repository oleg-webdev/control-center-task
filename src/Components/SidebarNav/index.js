// @flow
import React from 'react';
import { Subscribe } from 'unstated';
import { Link } from 'react-router-dom';

import SidebarProvider from '../../providers/SidebarProvider';
import styles from './index.scss';

const imgPath = '../../../src/assets/images/sidebar/';

type SidebarProps = {
  location: { pathname: string },
}

const SidebarNav = ({ location }: SidebarProps) => (
  <Subscribe to={[SidebarProvider]}>
    {sidebar => (
      <ul className={styles.sidebarNav}>

        {location.pathname === '/' && (
          <li style={{ marginBottom: 20 }} className={styles.item}>
            <button
              className={styles.theTaskButton}
              onClick={sidebar.toggleSidebar}
              type="button"
              title="Task button, it should open sidebar drawer"
            >Button
            </button>
          </li>
        )}

        <li className={styles.item}>
          <Link href="@" to="/" className="nav-link">
            <img
              className={styles.logo}
              src={`${imgPath}icon-logo.png`}
              alt=""
            />
          </Link>

        </li>
        <li className={styles.item}>
          <Link href="@" to="/management" className="nav-link">
            <img
              className={styles.managment}
              src={`${imgPath}icon-managment.png`}
              alt=""
            />
          </Link>


        </li>
        <li className={styles.item}>
          <img
            className={styles.reports}
            src={`${imgPath}icon-reports.png`}
            alt=""
          />
        </li>
        <li className={styles.item}>
          <img
            className={styles.notification}
            src={`${imgPath}icon-notification.png`}
            alt=""
          />
        </li>
        <li className={styles.item}>
          <img
            className={styles.user}
            src={`${imgPath}icon-user.png`}
            alt=""
          />
        </li>
      </ul>
      )}
  </Subscribe>
);

export default SidebarNav;
