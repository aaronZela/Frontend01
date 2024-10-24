import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CoursesGrid from './components/CoursesGrid';
import CreateCourseModal from './components/CreateCourseModal';
import EditCourseModal from './components/EditCourseModal';
import DeleteCourseModal from './components/DeleteCourseModal';
import { getRandomColor } from './utils/colors';
import './styles.css'; 

const App = () => {
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);


const handleCreateCourse = (courseName) => {
  console.log('Creating course:', courseName);
  const newCourse = {
    id: Date.now(),
    name: courseName,
    color: getRandomColor()
  };
  setCourses(prevCourses => [...prevCourses, newCourse]);
  setIsCreateModalOpen(false);
};

  const handleEditCourse = (courseId, newName) => {
    setCourses(prevCourses => 
      prevCourses.map(course => 
        course.id === courseId ? { ...course, name: newName } : course
      )
    );
    setIsEditModalOpen(false);
    setSelectedCourse(null);
  };

  const handleDeleteCourse = (courseId) => {
    setCourses(prevCourses => 
      prevCourses.filter(course => course.id !== courseId)
    );
    setIsDeleteModalOpen(false);
    setSelectedCourse(null);
  };

  const navigateToCourse = (courseId, courseName) => {
    try {
      localStorage.setItem('currentCourse', courseName);
      localStorage.setItem('currentCourseId', courseId.toString());
      window.location.href = `/activities?id=${courseId}`;
    } catch (error) {
      console.error('Error navigating to course:', error);
    }
  };

  return (
    <div className="app">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar 
        isOpen={isSidebarOpen}
        courses={courses}
        onCreateCourse={() => setIsCreateModalOpen(true)}
        onCourseClick={navigateToCourse}
      />
      <CoursesGrid 
        courses={courses}
        sidebarOpen={isSidebarOpen}
        onEditClick={(course) => {
          setSelectedCourse(course);
          setIsEditModalOpen(true);
        }}
        onDeleteClick={(course) => {
          setSelectedCourse(course);
          setIsDeleteModalOpen(true);
        }}
        onCourseClick={navigateToCourse}
      />
      
      <CreateCourseModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateCourse}
      />
      
      {selectedCourse && (
        <>
          <EditCourseModal 
            isOpen={isEditModalOpen}
            course={selectedCourse}
            onClose={() => {
              setIsEditModalOpen(false);
              setSelectedCourse(null);
            }}
            onSubmit={handleEditCourse}
          />
          
          <DeleteCourseModal 
            isOpen={isDeleteModalOpen}
            course={selectedCourse}
            onClose={() => {
              setIsDeleteModalOpen(false);
              setSelectedCourse(null);
            }}
            onConfirm={() => handleDeleteCourse(selectedCourse.id)}
          />
        </>
      )}
    </div>
  );
};

export default App;