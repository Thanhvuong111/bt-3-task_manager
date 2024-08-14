import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';
import TaskItem from '../pages/TaskItem';
import { Pagination } from 'antd';


const pageSize = 12;

const NewTask = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const taskStatus = useSelector(state => state.tasks.status);
    const error = useSelector(state => state.tasks.error);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (taskStatus === 'idle') {
            dispatch(fetchTasks());
        }
    }, [taskStatus, dispatch]);


    const newTasks = tasks.filter(task => task.status === 'New');


    const startIndex = (currentPage - 1) * pageSize;
    const currentTasks = newTasks.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="New-Task">
            {taskStatus === 'loading' && <div>Loading...</div>}
            {taskStatus === 'succeeded' && (
                <div className="New-Task_items">
                    {currentTasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </div>
            )}
            {taskStatus === 'failed' && <div>{error}</div>}
            <div className="New-Task_Pagination">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={newTasks.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default NewTask;

