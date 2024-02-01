import React from 'react';
import AddService from './AddService';
import ServiceList from './ServiceList';

const Dashboard = () => {
  return (
    <div>
      <AddService />
      <ServiceList/>
    </div>
  );
};

export default Dashboard;