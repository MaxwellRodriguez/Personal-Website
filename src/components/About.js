import React from 'react';
import {Image} from "antd";
import AOS from "aos";
import './About.css';

import MoonBrother from "../assets/MoonBrother.jpg";
import PortraitSelfie from "../assets/SelfieWPortrait.jpg";


function About() {
    AOS.init();
    return(
        <div className="About">
            <div>
            <Image className="about-image1" alt="Selfie with my Self Portrait" src={PortraitSelfie} mask="none"></Image>
            </div>
            <div className='about-text'>
                {/* <div className="about-center-line"></div> */}
                <h2>About Me</h2>
                <p>
                    I recently graduated from the University of Florida with a Bachelors in Computer Science-Digital Arts and Sciences. I had a great time learning everything from data structures to design principles, but I think I miss my a cappella group the most.
                </p>
                <p>
                    If I have some spare time, I love playing games with my friends, spending time with my girlfriend, and walking my dog. Games mean a lot to me, and they’re my favorite way of getting to know people. Feel free to challenge me to a game of chess any time.
                </p>
                <p>
                    If I have more spare time, my hobbies are cosplay, making art, and game development. Whether it’s creating a cool costume or a neat game concept, it’s really satisfying when one of my ideas comes to life.
                </p>
            </div>
            <div>
            <Image 
                className="about-image2" 
                alt="Moon Brother Cosplay (Let me know if you recognize him!)" 
                src={MoonBrother} 
                mask="none"
                data-aos="fade-up" 
                data-aos-duration={1200} 
            >
            </Image>
            </div>
        </div>
    );
}

export default About