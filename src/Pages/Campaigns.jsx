import React, { useState } from 'react'
import CampaignsComp from '../components/Campaigns/CampaignsComp'
import Modals from '../Layout/Modals';

function Campaigns() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='container campaigns'>
      <div className='row px-2 pt-3'>
        <div className='d-flex justify-content-between'>
          <h3 className='fw-bold m-0'>Campagne</h3>
          <button className="btn d-flex justify-content-between align-items-center" onClick={() => setModalShow(true)}>
            <span className="fs-3 mx-2">
              <i className="bi bi-plus"></i>
            </span>
            <span>Nouveau campagne</span>
          </button>
        </div>
        <CampaignsComp />
        <Modals show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  )
}

export default Campaigns