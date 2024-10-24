import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CreateCourseModal = ({ isOpen, onClose, onSubmit }) => {
  const [courseName, setCourseName] = useState('');

  // Limpiar el input cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setCourseName('');
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseName.trim()) {
      onSubmit(courseName.trim());
      setCourseName('');
    }
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Crear nuevo curso</h2>
          <button className="close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseName">Nombre del curso</label>
            <input
              id="courseName"
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              maxLength={50}
              required
              autoFocus // Añadido para mejor UX
              placeholder="Ingrese el nombre del curso"
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={!courseName.trim()} // Deshabilitar si está vacío
            >
              Crear curso
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseModal;