import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EditCourseModal = ({ isOpen, course, onClose, onSubmit }) => {
  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    if (course) {
      setCourseName(course.name);
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseName.trim()) {
      onSubmit(course.id, courseName.trim());
      setCourseName('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Editar curso</h2>
          <button className="close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="editCourseName">Nombre del curso</label>
            <input
              id="editCourseName"
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              maxLength={50}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseModal;