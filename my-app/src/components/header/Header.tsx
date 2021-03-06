import React, { useState } from 'react';
import logo from '../../logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import store from '../../redux/store';
import { LanguageState } from '../../redux/languageReducer';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  interface State extends LanguageState { }

  const storeState = store.getState();
  const [state, setState] = useState<State>({
    language: storeState.language,
    languageList: storeState.languageList
  });

  const handleStoreChange = () => {
    const storeState = store.getState()
    setState({
      language: storeState.language,
      languageList: storeState.languageList
    })
  }

  store.subscribe(handleStoreChange);

  const menuClickHandler = (e) => {
    const action = {
      type: 'change_language',
      payload: e.key
    }

    store.dispatch(action);
  }

  return (
    <div className={styles['app-header']}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {state.languageList.map(l => {
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                })}
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {state.language === 'zh' ? '中文' : 'English'}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate('register')}>注册</Button>
            <Button onClick={() => navigate('signIn')}>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigate('/')}>
          <img className={styles['App-logo']} src={logo} alt="logo" />
          <Typography.Title
            level={3}
            className={styles.title}
          >
            React 旅游网
          </Typography.Title>
        </span>
        <Input.Search
          className={styles['search-input']}
          placeholder={'请输入旅游目的地、主题、或关键词'}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  )
}

