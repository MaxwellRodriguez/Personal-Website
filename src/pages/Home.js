// KNOWN ISSUES

// 1. Projects comes from the wrong side if pages are visited in a certain order (12312 or 32132)

import React from 'react';
import "./Home.css"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Resume from "../components/Resume.js"
import {Tabs} from "antd";
import {UserOutlined, CodeOutlined, FileTextOutlined} from "@ant-design/icons"

const Home = () => {

  return (
    <div className="home">
        <div className="tab-bar">
            <Tabs className="tabs"
                id="tabs"
                size="large"
                centered
                onTabClick={changePages}
                items={[
                    {
                        key: "about",
                        label: <div className="tab-label" onTabClick={slideToAbout}><UserOutlined />About</div>,
                        // children: <About/>
                    }, 
                    {
                        key: "projects",
                        label: <div className="tab-label" onTabClick={slideToProjects}><CodeOutlined />Projects</div>,
                        // children: <Projects/>
                    }, {
                        key: "resume",
                        label: <div className="tab-label" onTabClick={slideToResume}><FileTextOutlined />Resume</div>,
                        // children: <Resume/>
                    }]}
            />
            <div id="activePage">
                <div className="pageWrapper"
                    data-index="0"
                    data-status="active"
                    >
                    <About/>
                </div>
                <div className="pageWrapper"
                    data-index="1"
                    data-status="inactiveRight">
                    <Projects/>
                </div>
                <div className="pageWrapper"
                    data-index="2"
                    data-status="inactiveRight">
                    <Resume/>
                </div>
            </div>
        </div>
    </div>
  );
}

let activeIndex = 0; //about page by default
const pages = document.getElementsByClassName("pageWrapper");

const changePages = (pageKey) =>{
    switch(pageKey){
        case "about":
            slideToAbout();
            break;
        case "projects":
            slideToProjects();
            break;
        case "resume":
            slideToResume();
            break;
        default:
            return;
    }
}

function slideToAbout(){
    
    if (activeIndex === 0) return;
    pages[activeIndex].dataset.status = "inactiveRight";

    pages[0].dataset.status = "active";
    activeIndex = 0;
    console.log("active index: " + activeIndex);

}

function  slideToProjects (){
    switch (activeIndex){
        case 0: 
            // active page was About
            pages[activeIndex].dataset.status = "inactiveLeft";
            pages[1].dataset.status = "active";
            break;
        case 1:
            break;
        case 2:
            //active page was Resume
            pages[activeIndex].dataset.status = "inactiveRight";
            pages[1].dataset.status = "active";
            break;
        default:
            return;
    }

    activeIndex = 1;
    console.log("active index: " + activeIndex);

}
function slideToResume() {
    if (activeIndex === 2) return;
    pages[activeIndex].dataset.status = "inactiveLeft";

    pages[2].dataset.status = "active";
    activeIndex = 2;
    console.log("active index: " + activeIndex);

}


export default Home