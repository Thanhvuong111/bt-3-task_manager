import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTasks, updateTask, deleteTask } from '../redux/actions/taskActions';
import { Modal, message, Form, Input, Select, Button, Layout } from 'antd';

const { Option } = Select;
const { Content } = Layout;

const initialTask = {
    title: '',
    description: '',
    creator: '',
    status: 'New'
};

const TaskDetail = () => {
    const [form] = Form.useForm(); // Initialize form
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const [task, setTask] = useState(initialTask);

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(fetchTasks());
        }
    }, [dispatch, tasks]);

    useEffect(() => {
        if (tasks.length > 0) {
            const foundTask = tasks.find(t => t.id === parseInt(id, 10));
            if (foundTask) {
                setTask(foundTask);
                form.setFieldsValue(foundTask); // Set form values
            }
        }
    }, [id, tasks, form]);

    const handleUpdate = async (values) => {
        try {
            await dispatch(updateTask({ id, task: values }));
            message.success('Update Success!!!');
            navigate('/');
        } catch (error) {
            message.error('Update Error');
            console.error('Error updating task:', error);
        }
    };

    const handleDelete = (id) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this task?',
            content: 'This action cannot be undone.',
            okText: 'Delete',
            cancelText: 'Cancel',
            onOk: () => {
                dispatch(deleteTask(id)).then(() => {
                    message.success('Delete Success!!!');
                    navigate('/');
                });
            },
        });
    };

    if (!task && tasks.length > 0) {
        return <div>Task not found</div>;
    }

    return (
        <Layout style={{ height: '100vh', paddingTop: '65px', background: 'aqua' }}>
            <Content style={{ maxWidth: 550, margin: '0 auto', padding: 20 }}>
                <Form
                    form={form} // Link the form to the form instance
                    initialValues={task}
                    onFinish={handleUpdate}
                    style={{ maxWidth: 500 }}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input the title!' }]}
                    >
                        <Input style={{ width: 300 }} placeholder="Title" />
                    </Form.Item>

                    <Form.Item
                        label="Creator"
                        name="creator"
                        rules={[{ required: true, message: 'Please input the creator!' }]}
                    >
                        <Input style={{ width: 300 }} placeholder="Creator" />
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[{ required: true, message: 'Please select the status!' }]}
                    >
                        <Select style={{ width: 300 }} placeholder="Select status">
                            <Option value="New">New</Option>
                            <Option value="Doing">Doing</Option>
                            <Option value="Done">Done</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input.TextArea style={{ width: 300 }} placeholder="Description" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Button type="primary" htmlType="submit" >
                            Update
                        </Button>
                        <Button
                            type="default"
                            style={{ marginLeft: 8 }}
                            onClick={() => form.resetFields()}
                        >
                            Reset
                        </Button>
                        <Button
                            type="danger"
                            style={{ marginLeft: 8 }}
                            onClick={() => handleDelete(task.id)}
                        >
                            Delete
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default TaskDetail;