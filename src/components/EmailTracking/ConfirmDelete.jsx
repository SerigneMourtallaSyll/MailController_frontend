import React from "react";

const ConfirmDelete = ({ show, onClose, onConfirm }) => {
  return (
    <div className="modal confirmDelete" tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            Êtes-vous sûr de vouloir supprimer cet email ?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Annuler</button>
            <button type="button" className="btn btn-danger" onClick={onConfirm}>Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
