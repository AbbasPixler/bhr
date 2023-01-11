import React, { useState} from 'react'
import './header.css'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import '../../assets/css/custom.css';

// Images
import LOGO from "../../assets/logo.png";
import MobileMenu from "../../assets/mobile-menu-icon.png";

export default function Header() {

  const [open , setOpen] = useState(false)

  const handleShow = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <header>
        <div className='wrapper'>
          <div className='menus'>
            <ul>
              <li><Link to={'/'}>HOME</Link></li>
              <li><Link to={'/features'}>Features</Link></li>
              <li><Link to={'/premium-shop'}>Premium Shop</Link></li>
              <li><Link to={'/'}><img src={LOGO}/></Link></li>
              <li><Link to={'/firearms'}>Firearms</Link></li>
              <li><Link to={'/community'}>Community</Link></li>
              <li><Link to={'/buy-credits'}>Buy Credits</Link></li>
            </ul>
            <div className='loginInfo'>
              <div className='language'>
                <a href="#">En</a>
              </div>
              <div className='loginbtn'>
                <a href="#" >Log In</a>
              </div>
              <div className='walletbtn'>
                <a href="#" >Wallet</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className={ open==true ? 'headerMobile show' : 'headerMobile'}>
        <div className='wrapper'>
          <div className='menus'>
            <ul>
              <li><a href='#'><img src={LOGO}/></a></li>
              <li><button onClick={handleShow}><img src={MobileMenu} alt="" /></button></li>
            </ul>
            <div className='mobileMenu'>
              <button onClick={handleClose} className="closeBtn">X</button>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">features</a></li>
                <li><a href="#">premium shop</a></li>
                <li><a href="#">Firearms</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Buy Credits</a></li>
              </ul>
              <div className='loginInfo'>
                <div className='language'>
                  <a href="#">En</a>
                </div>
                <div className='loginbtn'>
                  <a href="#" >Log In</a>
                </div>
                <div className='walletbtn'>
                  <a href="#" >Wallet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
