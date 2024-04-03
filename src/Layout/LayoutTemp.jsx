import React from 'react'

function LayoutTemp(props) {
    return (
        <div className="container-fluid template p-0 d-flex flex-column">
          <div className='m-0 p-0 contentNavbar fixed-top'>
            {props.navbar}
          </div>
          <div className="d-flex content">
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