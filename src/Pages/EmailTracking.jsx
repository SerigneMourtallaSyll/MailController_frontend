import React, { useState } from 'react'
import TrackMail from '../components/EmailTracking/TrackMail'
import Modals from '../Layout/Modals';
// import Modals from '../'

function EmailTracking() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='container trackingMail'>
      <div className='row'>
        <div className='d-flex justify-content-between pt-3'>
          <h4 className='fw-bold'>Email tracking</h4>
          <button className="btn py-1 d-flex justify-content-between align-items-center" onClick={() => setModalShow(true)}>
            <span className="fs-5 mx-2">
              <i className="bi bi-pencil"></i>
            </span>
            <span>Nouveau message</span>
          </button>
        </div>
        <TrackMail />
        <Modals show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  )
}

export default EmailTracking