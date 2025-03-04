import React from 'react'
import NavLink from './NavLink'

const MenuOverLays = ({links}) => {
  return (<ul className='flex flex-col items-center py-4 flex-xol '>
    {
        links.map((link,index) =>(
            <li key={index}>
                  <NavLink href={link.path} title={link.title}/>
            </li>
          
        ))
    }
  </ul>
  )
}

export default MenuOverLays