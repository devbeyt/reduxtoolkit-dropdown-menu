import React from 'react'
import { useSelector } from 'react-redux'
import './navigation.css'
import { navigationSelector } from './navigationSlice'

function Navigation() {
   const allLinks = useSelector(navigationSelector.selectAll)

   const content = allLinks.map(item=>{
    return <li key={item.id}>{item.name}
      {/* sub menu */}
      <div className='subMenu'>
          {item.isHower && (
            item.subMenus.map(subItem=>{
              return <a key={subItem.id}>{subItem.subName}</a>
            })
          )}
      </div>
       
    </li>
   })

  return (
    <nav className='nav'>
        <ul>
            {content}
        </ul>
    </nav>
  )
}

export default Navigation