import React from 'react'
import SingleNewsImg from "../../../assets/single-news-img.png";
import ReadMoreImg from "../../../assets/readmore-img.png"
import PrevIcon from "../../../assets/prev-icon.png"
import "./SingleNews.css"
import { Link } from "react-router-dom"

export default function SingleNews() {
  return (
    <>
      <div className='wrapper'>
        <div className='pageTitle'>
          <h3>News</h3>
        </div>
        <div className='newsInnerWrapper'>
          <div className='backBtn'>
            <Link to="/">
              <img src={PrevIcon} alt="" />
              Back
            </Link>
          </div>
          <div className='singlePagebanner'>
            <img src={SingleNewsImg}/>
          </div>
          <div className='newsheading'>
            <h4>Patch Overview 0.24353</h4><span>12.09.22</span>
          </div>
          <div className='newsContent'>
            <ul>
              <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
              <li>In mauris dictum. Et. Amet, quam, odio.</li>
              <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
              <li>Hac eleifend adipiscing faucibus. In eget molestie mollis velit venenatis molestie mattis ipsum elit. Leo, mauris pellentesque dictumst.</li>
              <li>Nec adipiscing elit. Sed odio. Sit ex. Mollis elit. Tempus in mattis velit risus risus venenatis dapibus eget amet, adipiscin.</li>
            </ul>
            <p>Habitasse pellentesque risus efficitur sed amet, dictum. Ex. Sit in sit morbi nisi arcu mollis id leo, dictumst. Ipsum non in amet, molestie et pellentesque et platea est. Mattis vestibulum leo, augue morbi non molestie efficitur et velit ipsum lorem habitasse non et est. Amet, urna sed integer molestie ornare nulla in vulputate consectetur cursus nec dui non luctus in vel eget vitae in mollis aenean morbi orci, mollis in molestie odio. Nunc in faucibus. Non cras dui sed faucibus. Dictumst. Integer amet, nulla consectetur leo, vitae eget nisi in sapien est. Id sit efficitur accumsan odio.</p>
            <p>Amet, non et tortor, ex. Cursus in dapibus velit augue sit integer pellentesque molestie integer amet, orci, nunc dictum. Dapibus vel accumsan dictum. Mattis ex. Lectus et augue augue amet, orci, aenean elit. Hac arcu urna aenean libero, urna molestie velit platea malesuada lectus libero, sed dictum. Urna augue elit. Eget ornare ultricies. Id ornare dictum mattis arcu dui mauris augue ultricies. In dictum mattis efficitur in non quam, sed accumsan libero, molestie justo et dolor platea urna habitasse et. Dictum. Nunc arcu efficitur efficitur mollis urna vestibulum odio. Orci, imperdiet morbi lacinia habitasse nec imperdiet tempus dolor habitasse quam, et. Amet, lectu.</p>
          </div>

          <div className='readMoreSection'>
            <div className='newsheading readMoreHeading'>
              <h4>Read more:</h4>
            </div>
            <div className='readMoreOuter'>
              <a href='#' className='readMoreCol'>
                <img src={ReadMoreImg} />
                <div className='readMoreContent'>
                  <span>06/02/2022</span>
                  <h3>Patch Overview 0.24353</h3>
                </div>
              </a>
              <a href='#' className='readMoreCol'>
                <img src={ReadMoreImg} />
                <div className='readMoreContent'>
                  <span>06/02/2022</span>
                  <h3>New visual effects in the Drone Age update</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
