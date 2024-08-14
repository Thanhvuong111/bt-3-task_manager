import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AllTask from './components/AllTask';
import TaskDetail from './pages/TaskDetail';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import NewTask from './components/NewTask';
import DoingTask from './components/DoingTask';
import DoneTask from './components/DoneTask';
import CreateTask from './pages/CreateTask';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/createNewTask" element={<CreateTask />} />
          <Route path="/" element={<AllTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/doing" element={<DoingTask />} />
          <Route path="/done" element={<DoneTask />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;