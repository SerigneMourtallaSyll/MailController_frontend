import React from 'react'
import CampaignsComp from '../components/Campaigns/CampaignsComp'

function Campaigns() {
  return (
    <div className='container campaigns'>
      <div className='row px-2'>
        <h3 className='fw-bold py-3'>Campaigns</h3>
        <CampaignsComp />
      </div>
    </div>
  )
}

export default Campaigns