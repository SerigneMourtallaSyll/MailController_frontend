import React from 'react'

function ReportClick() {
  return (
    <div className=''>
        <div className="mailContent col-12 py-5 d-flex justify-content-center align-items-center flex-column">
            <h4 className="text-center pb-3">Click report is only available for Pro or Advanced users</h4>
            <button className='btn'>Upgrade plan</button>
        </div>
        <div className='video-description d-flex justify-content-center'>
            <iframe src="https://www.youtube-nocookie.com/embed/TbnplNoUio8" title='link tracking'/>
        </div>
    </div>
  )
}

export default ReportClick