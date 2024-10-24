// components/CoursesGrid.jsx
import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const CoursesGrid = ({ 
  courses, 
  sidebarOpen, 
  onEditClick, 
  onDeleteClick,
  onCourseClick 
}) => {
  return (
    <div className={`courses-grid ${!sidebarOpen ? 'full-width' : ''}`}>
      {courses.map(course => (
        <div 
          key={course.id}
          className="course-card"
          onClick={() => onCourseClick(course.id, course.name)}
        >
          <div className="course-header" style={{ backgroundColor: course.color }}>
            <h2>{course.name}</h2>
          </div>
          <div className="course-footer">
            <button 
              className="footer-action-button"
              onClick={(e) => {
                e.stopPropagation();
                onEditClick(course);
              }}
            >
              <Edit2 size={20} />
            </button>
            <button 
              className="footer-action-button"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteClick(course);
              }}
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesGrid;