import React from 'react';
import { Card, Typography, Divider, Tag, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined, ClockCircleOutlined, SyncOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const TaskItem = ({ task }) => {
    const getStatusIcon = () => {
        if (task.status === 'Done') return <CheckCircleOutlined style={{ color: '#f5222d' }} />;
        if (task.status === 'Doing') return <SyncOutlined spin style={{ color: '#faad14' }} />;
        return <ClockCircleOutlined style={{ color: '#52c41a' }} />;
    };

    const getStatusTagColor = () => {
        if (task.status === 'Done') return 'red';
        if (task.status === 'Doing') return 'orange';
        return 'green';
    };

    return (
        <Badge.Ribbon text={task.status} color={getStatusTagColor()}>
            <Card
                hoverable
                bordered={false}
                style={{ marginBottom: 16, borderRadius: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                styles={{ body: { padding: 24, width: 250, height: 300 } }}
            >
                <Link className='list-item-allTask' to={`/task/${task.id}`}>
                    <Title level={4}>
                        {getStatusIcon()} {'Task ' + task.id}
                    </Title>
                </Link>
                <Divider />
                <Paragraph>
                    <Text strong>Creator: </Text>
                    {task.creator}
                </Paragraph>
                <Paragraph>
                    <Text strong>Status: </Text>
                    <Tag color={getStatusTagColor()}>{task.status}</Tag>
                </Paragraph>
                <Divider />
                <Paragraph><Text strong>Description: </Text>{task.description}</Paragraph>
            </Card>
        </Badge.Ribbon>
    );
};

export default TaskItem;