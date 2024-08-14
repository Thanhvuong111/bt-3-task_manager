import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../pages/TaskItem';
import { Pagination } from 'antd';


const pageSize = 9;

const DoingTask = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const doingTasks = tasks.filter(task => task.status === 'Doing');
    const [currentPage, setCurrentPage] = useState(1);


    const startIndex = (currentPage - 1) * pageSize;
    const currentTasks = doingTasks.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="Doing-Task">
            <div className="Doing-Task_items">
                {currentTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
            <div className="Doing-Task_Pagination">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={doingTasks.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default DoingTask;