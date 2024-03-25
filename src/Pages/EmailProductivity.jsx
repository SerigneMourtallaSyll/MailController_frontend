import React from 'react'

function EmailProductivity() {
  return (
    <div className='container emailProd'>
      <div className='row px-2 pt-4'>
        <div className='d-flex justify-content-between'>
          <h4>Email Productivity</h4>
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Last month(01/31/2024 - 02/29/2024)</option>
              <option value="1">Yesterday
              (03/03/2024 - 03/04/2024)</option>
              <option value="2">Last 7 days
              (02/26/2024 - 03/05/2024)</option>
              <option value="2">Last week
              (02/25/2024 - 03/03/2024)</option>
              <option value="2">Last 30 days
              (02/03/2024 - 03/05/2024)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailProductivity