import React from 'react'
import SidebarMain from './shared_components/layout_elements/sidebar/Index'


interface IProps {
  children:any
}
export default function Layout({children}:IProps) {
  return (
   <main>
    <SidebarMain/>
    {children}
   </main>
  )
}
