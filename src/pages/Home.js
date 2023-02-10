import React from 'react';
import "./Home.css"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Resume from "../components/Resume.js"
import {Button, Tabs, Row, Col, Divider} from "antd";

const Home = () => {
  return (
    <div className="home">
        <div className="tab-bar">
            <Tabs className="tabs"
                size="large"
                centered
                items={[
                    {
                        key: "about",
                        label: <div className="tab-label">About</div>,
                        children: <About/>
                    }, 
                    {
                        key: "projects",
                        label: <div className="tab-label">Projects</div>,
                        children: <Projects/>
                    }, {
                        key: "resume",
                        label: <div className="tab-label">Resume</div>,
                        children: <Resume/>
                    }]}
            />
        </div>
    </div>
  );
}

export default Home