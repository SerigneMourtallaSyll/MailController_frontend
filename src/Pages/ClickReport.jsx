import React from 'react'
import ReportClick from '../components/ClickReport/ReportClick';
import ClickReportTable from '../components/ClickReport/ClickReportTable';

function ClickReport() {
  return (
    <div className='container clickReport'>
      <div className='row'>
        <h4 className='fw-bold py-3'>Click report</h4>
        <ClickReportTable />
      </div>
    </div>
  )
}

export default ClickReport