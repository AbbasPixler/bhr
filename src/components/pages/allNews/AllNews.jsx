import React from 'react'
import { Link } from "react-router-dom"
import SingleNewsImg from "../../../assets/single-news-img.png";
import NewsImg01 from "../../../assets/news-img01.png"
import SearchIcon from "../../../assets/search-icon.png"
import PrevIcon from "../../../assets/prev-icon.png"
import NextIcon from "../../../assets/next-icon.png"
import NumberBtnIcon from "../../../assets/number-btn-bg.png"
import NumberActiveBtnIcon from "../../../assets/active-number-btn.png"
import SelectDown from "../../../assets/select-down-icon.png"
import './AllNews.css'
export default function AllNews() {
  return (
    <>
      <div className='wrapper'>
        <div className='pageTitle'>
          <h3>News</h3>
        </div>
        <div className='searchColOuter'>
          <div className='selectOption'>
            <select name="" id="">
              <option value="All News">All News</option>
              <option value="All News">News 01</option>
              <option value="All News">News 02</option>
            </select>
            <img src={SelectDown} alt="" />
          </div>
          <div className='searchInput'>
            <img src={SearchIcon} alt="" />
            <input type="text" />
          </div>
        </div>
        <div className='readMoreOuter allNewsouter'>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>12/02/2022</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>11/02/2022</span>
              <div className='textContent'>
                <h3>New visual effects in the Drone Age update</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>Rankings Challenge</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>Rankings Challenge</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>Rankings Challenge</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>Rankings Challenge</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>Rankings Challenge</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>Rankings Challenge</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/SingleNews" className='readMoreCol'>
            <img src={NewsImg01} />
            <div className='readMoreContent'>
              <span>Rankings Challenge</span>
              <div className='textContent'>
                <h3>Patch Overview 0.24353</h3>
                <ul>
                  <li>Amet id orci, non sed velit odio. Nunc mattis molestie dolor dictum dictum molestie imperdiet non ornare habitasse ultricies.</li>
                  <li>In mauris dictum. Et. Amet, quam, odio.</li>
                  <li>Platea amet, tempus et eget orci, consectetur odio. Sit leo, amet, eleifend et in habitasse velit mattis amet cras luctus cras mattis vestibulum et orci, molestie ultricies. Libero, vel eget adipiscing eget efficitur consectetur ornare dictum.</li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
        <div className='PagiNationOuter'>
          <ul>
            <li className='prev'>
              <a href="#"><img src={PrevIcon} alt="" /></a>
            </li>
            <li><img src={NumberBtnIcon} /><span>1</span></li>
            <li><img src={NumberBtnIcon} /><span>2</span></li>
            <li className='active'><img src={NumberActiveBtnIcon} /><span>3</span></li>
            <li><img src={NumberBtnIcon} /><span>4</span></li>
            <li><img src={NumberBtnIcon} /><span>5</span></li>
            <li className='next'>
              <a href="#"><img src={NextIcon} alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
