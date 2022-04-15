import React from 'react';
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';

export const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical' className={styles['side-menu']}>
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}-${Math.random()}`}
          title={
            <span>
              <GifOutlined />
              <span className={styles['side-menu-title']}>
                {m.title}
              </span>
            </span>
          }
        >
          {m.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}-${Math.random()}`}
              title={
                <span>
                  <GifOutlined />
                  <span className={styles['side-menu-title']}>
                    {sm.title}
                  </span>
                </span>}
            >
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item
                  key={`sub-sub-menu-${smsindex}-${Math.random()}`}
                >
                  <span>
                    <GifOutlined />
                    <span className={styles['side-menu-title']}>
                      {sms}
                    </span>
                  </span>
                </Menu.Item>
              )
              )}
            </Menu.SubMenu>
          )
          )}
        </Menu.SubMenu>
      )
      )}
    </Menu>
  )
}