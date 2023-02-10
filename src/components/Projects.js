import React from 'react'
import "./Projects.css"
import {Card, Avatar} from "antd";

import ZomBeeLogo from "../assets/ZomBeeDefenseLogo.png";
import MaxBotLogo from "../assets/MaxBotLogo.png";

const {Meta} = Card;

function Projects() {
  return (
    <div className="projects">
        <h2>My Projects</h2>
        <div className="projects-wrapper">
            <Card
                hoverable 
                cover={<Avatar size={200} src={MaxBotLogo}/>}
            >
                <Meta
                    title="Discord Bot"
                    description="dum bot"
                />
            </Card>
            <Card 
                hoverable
                cover={<img src={ZomBeeLogo}></img>}
            >
                <Meta
                    title="ZomBee Defense"
                    description="game i made in processing"
                />
            </Card>
            <Card>
                <Meta
                    title="This Website"
                    description="ur lookin at it"
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