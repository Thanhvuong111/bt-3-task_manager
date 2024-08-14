import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form as FormikForm } from 'formik';
import { Form, Input, Select, Button, Layout, message } from 'antd';
import { createTask } from '../redux/actions/taskActions';

const { Option } = Select;
const { Content } = Layout;

const CreateTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Layout style={{ height: '100vh', paddingTop: '65px', background: 'aqua' }}>
            <Content style={{ maxWidth: 550, margin: '0 auto', padding: 20 }}>
                <Formik
                    initialValues={{ title: '', creator: '', status: 'New', description: '' }}
                    onSubmit={(values) => {
                        dispatch(createTask(values));
                        message.success('Create successfully!');
                        navigate('/');
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                        <FormikForm onSubmit={handleSubmit} style={{ width: 500, marginRight: -250 }}>
                            <Form.Item
                                label="Title"
                                required
                            >
                                <Input
                                    style={{ width: 300 }}
                                    required
                                    name="title"
                                    placeholder="Title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Creator"
                                required
                            >
                                <Input
                                    style={{ width: 300 }}
                                    required
                                    name="creator"
                                    placeholder="Creator"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.creator}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Status"
                                required
                            >
                                <Select
                                    style={{ width: 300 }}
                                    name="status"
                                    placeholder="Select status"
                                    onChange={(value) => setFieldValue('status', value)}
                                    value={values.status}
                                >

                                    <Option value="New">New</Option>
                                    <Option value="Doing">Doing</Option>
                                    <Option value="Done">Done</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Description"
                            >
                                <Input.TextArea
                                    style={{ width: 300 }}
                                    name="description"
                                    placeholder="Description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">Create</Button>
                            </Form.Item>
                        </FormikForm>
                    )}
                </Formik>
            </Content>
        </Layout>
    );
};

export default CreateTask;