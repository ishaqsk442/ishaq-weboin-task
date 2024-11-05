import React, { useState } from 'react';
import  {useStudents}  from '../StudentContext'; // Import the useStudents hook
// import Navbar from '../components/Navbar';

const FormPage = () => {
  const { students,addStudent,removeStudent } = useStudents(); // Get students and stats from context
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
    <div>
        {/* <Navbar/> */}
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="react">React</option>
          <option value="ui/ux">UI/UX</option>
          <option value="javascript">JavaScript</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="placed">Placed</option>
          <option value="unplaced">Unplaced</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <h2>Students List</h2>
      {students.map((student) => (
        <div key={student.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ background: 'yellow', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {student.name.charAt(0)}
            </div>
            <h2>{student.name}</h2>
          </div>
          <p>Role: {student.role}</p>
          <p>Email: {student.email}</p>
          <p>Phone Number: {student.phoneNumber}</p>
          <p>Status: {student.status}</p>
          <button onClick={() => removeStudent(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FormPage;
