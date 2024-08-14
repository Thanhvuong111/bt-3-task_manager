import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../pages/TaskItem';
import { Pagination } from 'antd';


const pageSize = 5;

const DoneTask = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const doneTasks = tasks.filter(task => task.status === 'Done');
    const [currentPage, setCurrentPage] = useState(1);


    const startIndex = (currentPage - 1) * pageSize;
    const currentTasks = doneTasks.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="Done-Task">
            <div className="Done-Task_items">
                {currentTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
            <div className="Done-Task_Pagination">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={doneTasks.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default DoneTask;