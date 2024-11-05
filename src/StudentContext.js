// src/StudentContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const StudentContext = createContext();

export const useStudents = () => useContext(StudentContext);

const StudentProvider = ({ children }) => {
  // Initialize students with localStorage data or empty array if not found
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  // Initialize stats based on saved students
  const [stats, setStats] = useState({ total: students.length, placed: 0, unplaced: 0 });

  // Update stats whenever students list changes
  useEffect(() => {
    const placedCount = students.filter((student) => student.status === 'placed').length;
    const unplacedCount = students.length - placedCount;
    setStats({
      total: students.length,
      placed: placedCount,
      unplaced: unplacedCount,
    });

    // Save students to localStorage on each update
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const removeStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, stats, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;

