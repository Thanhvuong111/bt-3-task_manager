import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { ContainerOutlined, DesktopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';


const items = [
    { key: '1', icon: <PieChartOutlined />, label: <NavLink to="/">All Task</NavLink> },
    { key: '2', icon: <DesktopOutlined />, label: <NavLink to="/new">New Task</NavLink> },
    { key: '3', icon: <ContainerOutlined />, label: <NavLink to="/doing">Doing Task</NavLink> },
    { key: '4', icon: <ContainerOutlined />, label: <NavLink to="/done">Done Task</NavLink> },
    { key: '5', icon: <ContainerOutlined />, label: <NavLink to="/createNewTask">Create Task</NavLink> }
];


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='sidebar-container'>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                className='Menu-sidebar'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default Sidebar;