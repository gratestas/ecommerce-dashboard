import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiEnvelope,BiShoppingBag} from 'react-icons/bi'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.'

import {useStateContext} from '../context/ContextProvider'

const SCREEN_SIZE_900 = 900;

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
<TooltipComponent content={title} position="BottomCenter">
  <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
    <span style={{background:dotColor}}  className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
    {icon}
  </button>
</TooltipComponent>
)
const Navbar = () => {
  const { 
    activeMenu, 
    setActiveMenu, 
    isClicked, 
    setIsClicked, 
    handleClick, 
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();

  useEffect(() =>{
    const handleScreenResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenResize);

    handleScreenResize();
    return () => window.removeEventListener("resize", handleScreenResize);
  },[])

  useEffect(() => {
    screenSize <= SCREEN_SIZE_900 
      ? setActiveMenu(false) 
      : setActiveMenu(true);
  }, [screenSize])
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevState)=> !prevState)}
        color={currentColor}
        icon={<AiOutlineMenu/>}
      />
      <div className='flex'>
      <NavButton 
        title="Cart" 
        customFunc={() => handleClick('cart')}
        color={currentColor}
        icon={<BiShoppingBag/>}
      />
       <NavButton 
        title="Chat" 
        dotColor="#03C9D7"
        customFunc={() => handleClick('chat')}
        color={currentColor}
        icon={<BiEnvelope/>}
      />
      <NavButton 
        title="Notifications" 
        dotColor="#03C9D7"
        customFunc={() => handleClick('notification')}
        color={currentColor}
        icon={<RiNotification3Line/>}
      />
      <TooltipComponent content="Profile" position="BottomCenter">
        <div className='flex items-center gap-2 cursor-pointer ml-7 p-1 hover:bg-light-gray rounded-lg' onClick={() =>handleClick('userProfile')}>
          <img src={avatar} alt="user" className='rounded-full w-8 h-8' />
          <p>
            <span className='text-gray-400 text-14'>Hi, </span> {" "}
            <span className='text-gray-400 font-bold ml-1 text-14'>John</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14' />
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar