import React from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

export default function Menu() {
    
  return (
    <div className='sidebarmenu'>
        <ul className='slidebarul'>
          <img src={Logo} className='slidebarlogo' ></img>
            <Link to='/'><li className='slidebarli'>Trang chủ</li></Link>
            <Link to='/manageticket'><li className='slidebarli'>Quản lý vé</li></Link> 
            <Link to='/checkticket'><li className='slidebarli'>Đối soát vé</li></Link> 
            <Link to='/setting'><li className='slidebarli'>Cài Đặt</li></Link> 
        </ul>

    </div>
  )
}
