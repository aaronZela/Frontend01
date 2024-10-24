import React from 'react';
import { Home, Book, Plus, Settings } from 'lucide-react';

const Sidebar = ({ isOpen, courses, onCreateCourse, onCourseClick }) => {
  const handleCreateClick = (e) => {
    e.preventDefault();
    console.log('Creando curso...'); // Para debugging
    onCreateCourse();
  };

  return (
    <nav className={`sidebar ${!isOpen ? 'sidebar-hidden' : ''}`}>
      <div className="sidebar-menu">
        <a href="/" className="menu-item active">
          <Home size={20} />
          <span>Inicio</span>
        </a>

        <div className="section-divider" />
        
        <div className="section-label">MIS CURSOS</div>
        
        <div className="courses-section">
          <button 
            className="menu-item"
            onClick={handleCreateClick}
            style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <Plus size={20} />
            <span>Crear Curso</span>
          </button>
          
          {courses.map(course => (
            <a
              key={course.id}
              href="#"
              className="menu-item"
              onClick={(e) => {
                e.preventDefault();
                onCourseClick(course.id, course.name);
              }}
            >
              <Book size={20} />
              <span>{course.name}</span>
            </a>
          ))}
        </div>

        <div className="section-divider" />
        
        <a href="#" className="menu-item">
          <Settings size={20} />
          <span>Ajustes</span>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;