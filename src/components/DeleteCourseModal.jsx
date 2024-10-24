import React from 'react';
import { X } from 'lucide-react';

const DeleteCourseModal = ({ isOpen, course, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Eliminar curso</h2>
          <button className="close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <p>¿Estás seguro de que deseas eliminar este curso?</p>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button 
            className="btn-primary"
            onClick={() => onConfirm(course.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCourseModal;