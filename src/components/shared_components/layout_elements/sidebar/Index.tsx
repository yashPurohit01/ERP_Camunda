import { IconChecklist, IconHelp, IconLayoutDashboard, IconListDetails, IconLogout2, IconRoute2, IconSettings } from '@tabler/icons-react'
import React from 'react'
import LOGO from '../icons/LOGO'

const options = [
    {
        id:1,
        title:'Main',
        type:'main'
        
    },
    {
        id:1,
        title:'Dashobard',
        icon:<IconLayoutDashboard size={18} opacity={60} color='green' />,
        link:'/'
    },
   
    {
        id:3,
        title:'Management',
        type:'main'
        
    },
    {
        id:33,
        title:'WorkFlow',
        icon:<IconRoute2 size={18}/>,
        link:'/bpmn-process'
    },
    {
        id:31,
        title:'Tasks List',
        icon:<IconChecklist size={18}/>,
        link:'/bpmn-process'
    },
    {
        id:31,
        title:'Form Builder',
        icon:<IconListDetails size={18}/>,
        link:'/bpmn-process'
    },
    {
        id:4,
        title:'General',
        type:'main'
        
    },
    {
        id:6,
        title:'Support',
        icon:<IconHelp size={18}/>,
        link:'/settings'
    },
    {
        id:6,
        title:'Settings',
        icon:<IconSettings size={18}/>,
        link:'/settings'
    },
    {
        id:7,
        title:'Logout',
        icon:<IconLogout2 size={18}/>,
        link:'/login'
    },

]

function SidebarMain() {
  return (
    <div className='flex flex-col p-6 gap-1 bg-white w-60 h-screen border-r'>
        <div className='flex mb-8 gap-4'>
            <LOGO/>
            <p className='font-medium text-2xl'>ERP</p>
        </div>
        {
            options?.map((option) => {
                return(
                    <>
                    {
                        option.type != "main"?
                        <div className={`flex gap-4 items-center opacity-70  ${ option?.link ==="/" && 'bg-green-100'} p-3 rounded-md` }key={option?.id}>
                        <span className='font-sm'>{option?.icon}</span>
                        <p className='text-sm'>{option?.title}</p>
                      </div>  
                      :
                      <p className='text-xs opacity-50 my-4 '>{option?.title?.toUpperCase()}</p>
                    }
                    </>
                       
                )
            })
        }

    </div>
  )
}

export default SidebarMain