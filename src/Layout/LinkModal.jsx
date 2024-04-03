import React from 'react'

function LinkModal({ show, onClose, onConfirm, value, func }) {
  return (
    <div className="modal insertLink" tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <h6>Insérer un lien à suivre</h6>
            <input type='text' className='form-control' placeholder='lien' value={value} onChange={func}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Annuler</button>
            <button type="button" className="btn" onClick={onConfirm}>Insérer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkModal