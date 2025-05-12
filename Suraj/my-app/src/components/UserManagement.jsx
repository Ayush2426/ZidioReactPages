import React, { useState } from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    type: 'Student',
    status: 'Active',
    joined: 'Jan 15, 2023',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    type: 'Recruiter',
    status: 'Active',
    joined: 'Feb 24, 2023',
  },
  {
    name: 'Robert Johnson',
    email: 'robert.j@example.com',
    type: 'Student',
    status: 'Pending',
    joined: 'Apr 5, 2023',
  },
  {
    name: 'Mike Brown',
    email: 'mike.brown@example.com',
    type: 'Admin',
    status: 'Active',
    joined: 'Jan 2, 2023',
  },
  {
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    type: 'Recruiter',
    status: 'Suspended',
    joined: 'Mar 18, 2023',
  },
];

const statusBadge = (status) => {
  switch (status) {
    case 'Active':
      return <Badge bg="success">Active</Badge>;
    case 'Pending':
      return <Badge bg="warning" text="dark">Pending</Badge>;
    case 'Suspended':
      return <Badge bg="danger">Suspended</Badge>;
    default:
      return <Badge bg="secondary">{status}</Badge>;
  }
};

const UserManagement = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4">User Management</h4>

      {/* Filter Section */}
      <div className="card p-3 mb-4">
        <Form className="row g-3">
          <Form.Group className="col-md-3">
            <Form.Label>User Type</Form.Label>
            <Form.Select>
              <option>All Users</option>
              <option>Student</option>
              <option>Recruiter</option>
              <option>Admin</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-md-3">
            <Form.Label>Status</Form.Label>
            <Form.Select>
              <option>All Statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-md-3">
            <Form.Label>Date Joined</Form.Label>
            <Form.Select>
              <option>Any Time</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-md-3">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
          <div className="col-md-12 d-flex justify-content-end gap-2">
            <Button variant="secondary">Reset</Button>
            <Button variant="success">Apply Filters</Button>
          </div>
        </Form>
      </div>

      {/* User Table */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6>User List</h6>
        <Button variant="success">+ Add New User</Button>
      </div>

      <Table hover responsive>
        <thead>
          <tr>
            <th>User</th>
            <th>Type</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-light text-dark text-center me-2" style={{ width: '35px', height: '35px', lineHeight: '35px' }}>
                    {user.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div>{user.name}</div>
                    <small className="text-muted">{user.email}</small>
                  </div>
                </div>
              </td>
              <td>{user.type}</td>
              <td>{statusBadge(user.status)}</td>
              <td>{user.joined}</td>
              <td>
                <Button variant="link" className="p-1 text-primary">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="link" className="p-1 text-danger">
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between">
        <div>Showing 1 to 5 of 1,245 results</div>
        <nav>
          <ul className="pagination">
            <li className="page-item disabled"><a className="#pagelink">‹</a></li>
            <li className="page-item active"><a className="#pagelink">1</a></li>
            <li className="page-item"><a className="#pagelink">2</a></li>
            <li className="page-item"><a className="#pagelink">3</a></li>
            <li className="page-item"><a className="#pagelink">…</a></li>
            <li className="page-item"><a className="#pagelink">249</a></li>
            <li className="page-item"><a className="#pagelink">›</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserManagement;
