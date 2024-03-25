import React from 'react'
import { menu } from '../Utils/Utils'
import SidebarComponent from './SidebarComponent'

function Sidebar() {
  return (
    <div className='sidebar'>
        {menu.map((elem, index) => (
            <SidebarComponent
                {...elem}
                key={index}
            />
        ))}
    </div>
  )
}

export default Sidebar