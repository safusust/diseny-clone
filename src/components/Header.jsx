import React from 'react'
import logo from '../assets/images/logo.png'
import { 
    HiMagnifyingGlass, 
    HiStar, 
    HiPlayCircle, 
    HiTv, 
    HiHome 
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import Headerritem from './Headerritem';
function Header() {
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },{
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },{
           name:'WATCHLIST',
           icon:HiPlus 
        },{
            name:'ORIGINALS',
            icon:HiStar
        },{
            name:'MOVIES',
            icon:HiPlayCircle
        },{
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between'>
       <div className='flex items-center gap-10 '>
        <img src={logo} className='w-[80px] h-[48px] md:w-[115px] object-cover'/>
      
      <div className='hidden md:flex items-center gap-10'>
      {menu.map((item)=>(
        <Headerritem name={item.name} Icon={item.icon}/>
    ))}
    </div>
    
    <div className='flex md:hidden items-center gap-10'>
      {menu.map((item)=>(
        <Headerritem name={item.name} Icon={item.icon}/>
    ))}
    </div>
    </div>
    <img src='https://cdn-icons-png.flaticon.com/512/6858/6858504.png' className='h-8 m-8'/>
    </div>
  )
}

export default Header
