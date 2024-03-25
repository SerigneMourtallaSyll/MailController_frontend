import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarComponent({title, icon, path, id}) {
  return (
    <NavLink
        style={{textDecoration: 'none'}}
        className="py-2 ps-3 items d-flex align-items-center"
        to={path}
        id={id}
    >
        <span className='icon_sidebar fs-5'>{icon}</span>
        <span className='mx-2 textSidebar pt-1'>{title}</span>
    </NavLink>
  )
}

export default SidebarComponent