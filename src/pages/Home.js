import React from 'react';
import "./Home.css"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Resume from "../components/Resume.js"
import "../components/Footer.css"
import {Tabs} from "antd";
import {UserOutlined, CodeOutlined, FileTextOutlined, GithubOutlined, MailOutlined, LinkedinOutlined } from "@ant-design/icons"

const Home = () => {

  return (
    <wrapper className="homeAndFooter">
        <div className="home">
            {/* <div className="center-line-check"></div> */}
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
            
            {/* <Footer/> */}
        
            
        </div>
        
        <footer className="footer">
            <div className="iconDiv">
                <a href="https://github.com/MaxwellRodriguez" rel="noreferrer" target="_blank" style={{ color: "inherit" }}>
                    <GithubOutlined className="githubIcon" />
                </a>
                <a href="https://www.linkedin.com/in/max-rodriguez-566a91202/" rel="noreferrer" target="_blank" style={{ color: "inherit" }}>
                    <LinkedinOutlined className="linkedinIcon" />
                </a>
                <a href="mailto:maxwellrodriguez@gmail.com" rel="noreferrer" target="_blank" style={{ color: "inherit" }}>
                    <MailOutlined className="emailIcon" />
                </a>
            </div>
        </footer>
    </wrapper>
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
    
    pages[1].dataset.status = "inactiveRight"; //preparing a switch to projects

    pages[0].dataset.status = "active";
    activeIndex = 0;
    // console.log("active index: " + activeIndex);

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
    // console.log("active index: " + activeIndex);

}
function slideToResume() {
    if (activeIndex === 2) return;
    pages[activeIndex].dataset.status = "inactiveLeft";

    pages[1].dataset.status = "inactiveLeft"; //preparing a switch to projects

    pages[2].dataset.status = "active";
    activeIndex = 2;
    // console.log("active index: " + activeIndex);

}


export default Home