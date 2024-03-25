import React from 'react'

function LayoutTemp(props) {
    return (
        <div className="container-fluid nin-vh-100 template p-0">
          <div className='position-fixed-top m-0 p-0 w-100'>
            {props.navbar}
          </div>
          <div className="d-flex">
            <div className="col-md-2 m-0 p-0" id="sidebarDiv">
              {props.sidebar}
            </div>
            <div className="col-md-10 p-0 m-0 children">
                {props.children}
            </div>
          </div>
        </div>
    );
}

export default LayoutTemp