import React, { useState } from 'react';
import { useStudents } from '../StudentContext'; // Import the useStudents hook

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
    addStudent(newStudent);  // Add student using context

    // Reset form fields
    setName('');
    setRole('');
    setEmail('');
    setPhoneNumber('');
    setCourse('react');
    setStatus('unplaced');
  };

  return (
    <div style={{ padding: '2rem', color: '#fff', backgroundColor: '#1a1a1a' }}>
      <h2 style={{ textAlign: 'center', color: '#d4ff00', marginBottom: '2rem' }}>Fill This Form</h2>
      
      {/* Form */}
      <form onSubmit={handleSubmit} style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem', 
        maxWidth: '800px', 
        margin: '0 auto' 
      }}>
        <div>
          <label style={{ color: '#d4ff00', fontWeight: 'bold' }}>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
            required 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: 'none' }}
          />
        </div>
        <div>
          <label style={{ color: '#d4ff00', fontWeight: 'bold' }}>Role:</label>
          <input 
            type="text" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            placeholder="Enter your role" 
            required 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: 'none' }}
          />
        </div>
        <div>
          <label style={{ color: '#d4ff00', fontWeight: 'bold' }}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: 'none' }}
          />
        </div>
        <div>
          <label style={{ color: '#d4ff00', fontWeight: 'bold' }}>Phone Number:</label>
          <input 
            type="tel" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            placeholder="Enter your phone number" 
            required 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: 'none' }}
          />
        </div>
        <div>
          <label style={{ color: '#d4ff00', fontWeight: 'bold' }}>Course:</label>
          <select 
            value={course} 
            onChange={(e) => setCourse(e.target.value)} 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: 'none' }}
          >
            <option value="react">React Basics</option>
            <option value="ui/ux">UI/UX Design</option>
            <option value="javascript">JavaScript</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>
        <div>
          <label style={{ color: '#d4ff00', fontWeight: 'bold' }}>Status:</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)} 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: 'none' }}
          >
            <option value="placed">Placed</option>
            <option value="unplaced">Unplaced</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          style={{ 
            gridColumn: 'span 2', 
            padding: '0.7rem', 
            backgroundColor: '#1a1a1a', 
            color: '#d4ff00', 
            border: '2px solid #d4ff00', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Submit
        </button>
      </form>

      {/* Student Cards */}
      <h2 style={{ textAlign: 'center', color: '#d4ff00', marginTop: '2rem' }}>Students List</h2>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
  {students.map((student) => (
    <div key={student.id} style={{ 
      backgroundColor: '#fff', 
      borderRadius: '10px', 
      padding: '1rem', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ 
          backgroundColor: '#d4ff00', 
          color: '#1a1a1a', 
          borderRadius: '50%', 
          width: '40px', 
          height: '40px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontWeight: 'bold', 
          fontSize: '1.2rem' 
        }}>
          {student.name.charAt(0).toUpperCase()}
        </div>
        <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'black' }}>{student.name}</h4>
      </div>
      <p style={{ color: 'black' }}><strong style={{ color: 'black', fontWeight: 'bold' }}>Role:</strong> {student.role}</p>
      <p style={{ color: 'black' }}><strong style={{ color: 'black', fontWeight: 'bold' }}>Email:</strong> {student.email}</p>
      <p style={{ color: 'black' }}><strong style={{ color: 'black', fontWeight: 'bold' }}>Phone Number:</strong> {student.phoneNumber}</p>
      <p style={{ color: 'black' }}><strong style={{ color: 'black', fontWeight: 'bold' }}>Course:</strong> {student.course}</p>
      <p style={{ color: 'black' }}><strong style={{ color: 'black', fontWeight: 'bold' }}>Status:</strong> {student.status.charAt(0).toUpperCase() + student.status.slice(1)}</p>
      <button 
        onClick={() => removeStudent(student.id)} 
        style={{ 
          width: '100%', 
          padding: '0.5rem', 
          backgroundColor: '#f44336', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          marginTop: '1rem' 
        }}
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

