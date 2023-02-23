import {React, useEffect, useState} from 'react'
import "./Projects.css"
import {Card} from "antd";

import ZomBeeLogo from "../assets/ZomBeeDefenseLogo.png";
import MaxBotLogo from "../assets/MaxBotLogo.png";
import AdolLogo from "../assets/AdolebitqueLogo.png"
import Screenshot from "../assets/Screenshot.jpg"
import cursor from "../assets/cursor.png"

const {Meta} = Card;

function Projects() {

    const [mousePos, setMousePos] = useState({});
    
    useEffect(() => {
        const handleMouseMove = (event) => {
          setMousePos({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            handleMouseMove
          );
        };
      }, []);

  return (
    
    <div className="projects">
        <h2>My Projects</h2>
        <div className="projects-wrapper">
            <Card
                hoverable 
                // cover={<Avatar size={200} src={MaxBotLogo}/>}
                cover = {<img src={MaxBotLogo} alt="Max's Helper Bot Logo"></img>}
            >
                <Meta
                    title="Discord Bot"
                    description="dum bot"
                />
            </Card>
            <Card 
                hoverable
                cover={<img id="ZombeeLogoImg" src={ZomBeeLogo} alt="ZomBee Defense Logo"></img>}
            >
                <Meta
                    title="ZomBee Defense"
                    description="game i made in processing"
                />
            </Card>
            <Card
                hoverable
                cover={<div className="coverWrapper">
                        <img id="Screenshot" src={Screenshot} alt="the webpage you're currently looking at"></img>
                        {/* <Avatar src={Screenshot} size={200}/> */}
                        <img id="mousetest" src={cursor}  style={{left:(mousePos.x / window.innerWidth)* 100 +"%", top:(mousePos.y / window.innerHeight)* 100 +"%", zIndex: 100}} alt="fake cursor"></img>
                    </div>
                }
            >
                
                <Meta
                    title="This Website"
                    description="ur lookin at it"
                />
            </Card>
            <Card
                hoverable
                // cover={<Avatar size={200} src={AdolLogo}/>}
                cover={<img src={AdolLogo} alt="Adolebitque Logo"></img>}
            >
                <Meta
                    title="Adolebitque"
                    description="Horror game I worked on with a team using Unity"
                />
            </Card>
            <Card>
                <Meta
                    title="Art Portfolio"
                    description="not sure im keeping this one"
                />
            </Card>
        </div>
    </div>
  )
}

export default Projects