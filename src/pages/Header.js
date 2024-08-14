import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';
import { Button, Input, Form } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(fetchTasks(searchTerm));
    };


    return (
        <header className="header">
            <div className="btn-create">
                <Button
                    className="create-task-btn"
                    onClick={() => window.location.href = '/createNewTask'}
                    type="primary"
                    size="large"
                    icon={<AntDesignOutlined />}>
                    Create New Task
                </Button>
            </div>
            <div className="btn-search">
                <Form.Item>
                    <Input
                        style={{ width: 500 }}
                        type="text"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Type something to search" />
                    <Button
                        className="search-btn"
                        onClick={handleSearch}
                        type="primary"
                        size="large"
                        icon={<AntDesignOutlined />}>
                        Search
                    </Button>
                </Form.Item>
            </div>

        </header>
    );
};

export default Header;