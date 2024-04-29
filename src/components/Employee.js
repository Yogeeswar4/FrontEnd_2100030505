import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Employee.css'; // Import CSS file

function Employee() {
  // Dummy employee data (updated with more employees and 5-digit IDs)
  const [employees, setEmployees] = useState([
    { id: 10001, firstName: 'Sam', lastName: 'Adam', age: 45, gender: 'Male', department: 'IT', salary: '$100000.00' },
    { id: 10002, firstName: 'John', lastName: 'Jacob', age: 35, gender: 'Male', department: 'Sales', salary: '$90000.00' },
    { id: 10003, firstName: 'Emily', lastName: 'Smith', age: 42, gender: 'Female', department: 'HR', salary: '$85000.00' },
    { id: 10004, firstName: 'Sarah', lastName: 'Wilson', age: 38, gender: 'Female', department: 'Marketing', salary: '$95000.00' },
    { id: 10005, firstName: 'Michael', lastName: 'Brown', age: 50, gender: 'Male', department: 'Finance', salary: '$110000.00' },
    { id: 10006, firstName: 'Linda', lastName: 'Davis', age: 37, gender: 'Female', department: 'Operations', salary: '$92000.00' },
    { id: 10007, firstName: 'Robert', lastName: 'Taylor', age: 48, gender: 'Male', department: 'HR', salary: '$105000.00' },
    { id: 10008, firstName: 'Karen', lastName: 'Martinez', age: 33, gender: 'Female', department: 'Sales', salary: '$87000.00' }
  ]);

  // State variable for selected employee details
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Function to handle employee deletion
  const handleDelete = (id) => {
    // Filter out the employee with the specified id
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
    // If the deleted employee was selected, clear the selectedEmployee state
    if (selectedEmployee && selectedEmployee.id === id) {
      setSelectedEmployee(null);
    }
  };

  // Function to handle click on employee id
  const handleEmployeeClick = (id) => {
    // Find the selected employee from the employee list
    const employee = employees.find(employee => employee.id === id);
    setSelectedEmployee(employee);
  };

  // Function to calculate position and salary based on age
  const calculatePositionAndSalary = (age, gender) => {
    const position = age > 40 ? 'Sr. Employee' : 'Jr. Employee';
    const salary = age > 40 ? age * 10 + 50000 : age * 5 + 50000;
    return { position, salary: `$${salary.toFixed(2)}` };
  };

  // Function to handle editing an employee
  const handleEdit = (id) => {
    // Redirect to the edit employee page with the employee ID
    // You can implement this based on your routing setup
    console.log(`Editing employee with ID: ${id}`);
  };

  return (
    <div className="employee-container">
      <h2>Employee List:</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            const { position, salary } = calculatePositionAndSalary(employee.age, employee.gender);
            const rowClass = index % 2 === 0 ? 'even-row' : 'odd-row'; // Apply different colors for odd and even rows
            return (
              <tr key={employee.id} className={rowClass}>
                <td>
                  {/* Clickable button to show employee details */}
                  <button onClick={() => handleEmployeeClick(employee.id)} className="view-button">{employee.id}</button>
                </td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.age}</td>
                <td>{employee.gender}</td>
                <td>{employee.department}</td>
                <td>{position}</td>
                <td>{salary}</td>
                <td className="action-buttons">
                  <Link to={`/edit-employee/${employee.id}`} className="edit-button" onClick={() => handleEdit(employee.id)}>Edit</Link>
                  <button onClick={() => handleDelete(employee.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedEmployee && (
        <div className="employee-details">
          <h2>Employee Detail:</h2>
          <p><strong>Employee ID:</strong> {selectedEmployee.id}</p>
          <p><strong>Name:</strong> {selectedEmployee.firstName} {selectedEmployee.lastName}</p>
          <p><strong>Age:</strong> {selectedEmployee.age}</p>
          <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
          <p><strong>Salary:</strong> {calculatePositionAndSalary(selectedEmployee.age, selectedEmployee.gender).salary}</p>
        </div>
      )}
      <Link to="/AddEmployee.js" className="add-employee-link">Add Employee</Link>
    </div>
  );
}

export default Employee;
