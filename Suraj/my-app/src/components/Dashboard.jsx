import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const AdminDashboard = () => {
  const studentData = [65, 78, 90, 120, 135, 150];
  const recruiterData = [25, 30, 42, 53, 60, 72];
  const activityData = {
    labels: ['Job Posts', 'Applications', 'Interviews', 'Hires'],
    datasets: [
      {
        label: 'Last Month',
        backgroundColor: 'green',
        data: [120, 350, 80, 40],
      },
      {
        label: 'This Month',
        backgroundColor: 'blue',
        data: [150, 420, 95, 38],
      },
    ],
  };

  return (
    <div className="d-flex">
      

      {/* Main Content */}
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Admin Dashboard</h3>
          <div className="d-flex align-items-center">
            <span className="me-2">Admin</span>
            <div className="rounded-circle bg-success text-white text-center" style={{ width: '35px', height: '35px' }}>AD</div>
          </div>
        </div>

        {/* Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Users</h6>
                <h4>1,245</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Students</h6>
                <h4>892</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Recruiters</h6>
                <h4>248</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Pending Approvals</h6>
                <h4>12</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>User Registration Chart</h6>
                <Line
                  data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                      {
                        label: 'Students',
                        data: studentData,
                        borderColor: 'blue',
                        backgroundColor: 'transparent',
                      },
                      {
                        label: 'Recruiters',
                        data: recruiterData,
                        borderColor: 'green',
                        backgroundColor: 'transparent',
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h6>Activity Metrics</h6>
                <Bar data={activityData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
