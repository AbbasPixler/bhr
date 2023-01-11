import React from 'react'
import FooterLogo from '../../assets/footer-logo.png';
import Instagram from '../../assets/instagram-icon.png';
import Facebook from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter-icon.png';
import Game from '../../assets/game-icon.png';
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div className='wrapper'>
          <div className='footerInnerOuter'>
            <div className='footerCol'>
              <img src={FooterLogo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consectetur augue diam ultrices nam nibh rhoncus</p>
              <div className='footer-btnGrup'>
                <a href='#' className='footerBtn'>English</a>
                <div className='socialIcon'>
                  <a href="#"><img src={Instagram}/></a>
                  <a href="#"><img src={Facebook} /></a>
                  <a href="#"><img src={Twitter}/></a>
                  <a href="#"><img src={Game} /></a>
                </div>
              </div>
            </div>
            <div className='footerCol footerColSec'>
              <h3>Site</h3>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Premium shop</a></li>
                <li><a href="#">Firearms</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Buy Credits</a></li>
              </ul>
            </div>
            <div className='footerCol footerColSec'>
              <h3>Community</h3>
              <ul>
                <li><a href="#">Community board</a></li>
                <li><a href="#">Find Party</a></li>
                <li><a href="#">Classes</a></li>
                <li><a href="#">Tips & Strategies</a></li>
                <li><a href="#">Promotion Streams</a></li>
              </ul>
            </div>
            <div className='footerCol footerColSec'>
              <h3>policies</h3>
              <ul>
                <li><a href="#">Terms & conditions</a></li>
                <li><a href="#">Cookies & policy</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
