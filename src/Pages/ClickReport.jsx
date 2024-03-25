import React from 'react'
import ReportClick from '../components/ClickReport/ReportClick';

function ClickReport() {
  return (
    <div className='container clickReport'>
      <div className='row px-2'>
        <h4 className='fw-bold py-3'>Click report</h4>
        <ReportClick />
      </div>
    </div>
  )
}

export default ClickReport