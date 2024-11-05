import React, { useState } from 'react';
import { useStudents } from '../StudentContext'; // Import the useStudents hook
import './FormPage.css'; // Import the CSS file

const FormPage = () => {
  const { students, addStudent, removeStudent } = useStudents(); // Get students and stats from context
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState('react');
  const [status, setStatus] = useState('unplaced');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      name,
      role,
      email,
      phoneNumber,
      course,
      status,
    };
    addStudent(newStudent);

    // Reset form fields
    setName('');
    setRole('');
    setEmail('');
    setPhoneNumber('');
    setCourse('react');
    setStatus('unplaced');
  };

  return (
    <div className="form-page">
      <h2 className="form-title">Fill This Form</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter your role"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="react">React Basics</option>
            <option value="ui/ux">UI/UX Design</option>
            <option value="javascript">JavaScript Fundamentals</option>
            <option value="fullstack">Advance CSS</option>
            <option value="fullstack">Backend development</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="placed">Placed</option>
            <option value="unplaced">Unplaced</option>
          </select>
        </div>
        
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {/* Student Cards */}
      
      <div className="students-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <div className="student-card-header">
              <div className="student-avatar">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <h4 className="student-name">{student.name}</h4>
            </div>
            <p><strong>Role:</strong> {student.role}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Status:</strong> {student.status.charAt(0).toUpperCase() + student.status.slice(1)}</p>
            <button 
              onClick={() => removeStudent(student.id)} 
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPage;
