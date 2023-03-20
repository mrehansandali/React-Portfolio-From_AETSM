import React from 'react'
import "./Main.css"
import img from "../img/img.jpg"
import star from "../img/star-filled.webp"
import star2 from "../img/star-empty.png"
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';
import { MdOutlineReport, MdLocationPin } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';



function Main() {

  return (
    <div>
      <div className="main">


        <div className="firstbox">
          <div className="img"><img src={img} alt="" /></div>
          <div className="info">
            <div className="name">
              <h1>Muhammad Rehan <span>  <span> <MdLocationPin /></span> Pakistan</span></h1>
              <p>Frontend Developer</p>
            </div>
            <div className="rankings">
              <p>RANKINGS</p>
              <div className="stars">
                <h3>8,6</h3>
                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star2} alt="" />
                </div>
              </div>
            </div>
            <div className="mrbuttons">
              <div className="mrmainmsg">
                <button className="message-button"> <span className="i">
                  <TbMessageCircle2Filled />
                </span> Message</button>
              </div>
              <div className="mrmainmsg">
                <button className="message-button"> <span className="i">
                  <TiTick />
                </span> Contacts</button>
              </div>
              <div className="mrmainmsg">
                <button className="message-button"> <span className="i">
                  <MdOutlineReport />
                </span> Report User</button>
              </div>
            </div>
          </div>
        </div>


        <div className="secondbox">


          <div className="skills">
            <div className="work">
              <div className="heading"><h1>WORK</h1><hr /></div>
              <div className="mrbtnheading">
                <h3>Spotify Pakistan</h3>
                <button className="message-button">Primary</button>
              </div>
              <div className="paras">
                <p>170 William Street</p>
                <p>New York, NY 1002154-5646-54-236-78</p>
              </div>
            </div>
            <div className="work">
              <div className="mrbtnheading">
                <h3>Metropolitan Museum</h3>
                <button className="message-button">Secondary</button>
              </div>
              <div className="paras">
                <p>525 E 68th Street</p>
                <p>New York, NY 1002154-5646-54-236-78</p>
              </div>
            </div>
            <div className="work">
              <div className="heading"><h1>SKILLS</h1><hr /></div>
              <div className="mrh5">
                <h5>Branding</h5>
                <h5>UI/UX</h5>
                <h5>Web-Design</h5>
                <h5>Packaging</h5>
                <h5>Print & Editorial</h5>
              </div>
            </div>
          </div>


          <div className="about">
            <div className="aboutbtn">
              <button type='button'><span><AiFillEye /></span>Timeline</button>
              <button type='button'><span><FaUser /></span>About</button>
            </div>
            <div className="contactInfo">
              <h3>CONTACT INFORMATION</h3>
              <div className="ciInfo">
                <h1 id='setciwid'>Phone :</h1>
                <span><h1>03162007264</h1></span>
              </div>
              <div className="ciInfo">
                <h1 id='setciwid'>Address :</h1>
                <h1>Area 4D Korangi # 6 Pakistan</h1>
              </div>
              <div className="ciInfo">
                <h1 id='setciwid'>E-mail :</h1>
                <span><h1>mrehansandali@gmail.com</h1></span>
              </div>

              <h3>BASIC INFORMATION</h3>
              <div className="ciInfo">
                <h1 id='setciwid'>Birthday :</h1>
                <h1>14 April 2001</h1>
              </div>
              <div className="ciInfo">
                <h1 id='setciwid'>Gender :</h1>
                <h1>Male</h1>
              </div>

            </div>
          </div>


        </div>






      </div>
    </div>




  )
}

export default Main













