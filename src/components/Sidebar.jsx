import React from 'react'

import {Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {useStateContext} from '../context/ContextProvider';

import {links} from '../data/dummy';

const DEFAULT_LINK = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2`
const ACTIVE_LINK = `${DEFAULT_LINK} text-white`;
const NORMAL_LINK = `${DEFAULT_LINK} text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray`;
const SCREEN_SIZE_900 = 900;

const Sidebar = () => {
  const {activeMenu,setActiveMenu, screenSize, setScreenSize} = useStateContext();

  const handleCloseSideBar =() => {
    if(activeMenu && screenSize<= SCREEN_SIZE_900)
      setActiveMenu(false); 
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link 
          to='/' 
          className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tigh dark:text-white text-slate-900'
          onClick={handleCloseSideBar}>
            <SiShopware/> <span>BrandName</span>
          </Link>
          <TooltipComponent content='menu' position='BottomCenter'>
            <button type='button' onClick={() =>setActiveMenu((prevState)=> !prevState) } className=' text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'>
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>
          <div className='mt-10'>
            {links.map(item =>(
              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase text-sm '>
                  {item.title}
                </p>
                {item.links.map(link =>(
                  <NavLink 
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  className={({isActive})=> isActive ? ACTIVE_LINK : NORMAL_LINK}>
                    {link.icon} 
                    <span className='capitalize text-sm'>
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
      </>)}
    </div>
  )
}

export default Sidebar