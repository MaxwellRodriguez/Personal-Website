import {React, useEffect, useState} from 'react'
import "./Projects.css"
import {Card, Modal, Button, Image} from "antd";
import {GithubFilled} from "@ant-design/icons";

import MaxBotLogo from "../assets/MaxBotLogo.png";
import MaxBotDemo from "../assets/MaxBotDemo.gif"
import ZomBeeLogo from "../assets/ZomBeeDefenseLogo.png";
import Screenshot from "../assets/Screenshot.jpg"
import cursor from "../assets/cursor.png"
import AdolLogo from "../assets/AdolebitqueLogo.png"
import ZBDFootage from "../assets/ZomBeeDefense_Footage.mp4"

//art portfolio assets
import PersephTouch from "../assets/PersephonesTouch.png"
import Rook from "../assets/ArtPortfolio/rook.png"
import FALibrary from "../assets/ArtPortfolio/PerspectiveDrawingoftheFineArtsLibrary2.png"
import FACE from "../assets/ArtPortfolio/FACE.png"
import ChompItTower from "../assets/ArtPortfolio/ChompItTower.png"
import HeartKnot from "../assets/ArtPortfolio/CelticHeartKnot.png"
import SavoyKnot from "../assets/ArtPortfolio/SavoyKnot.png"
import SquareKnot from "../assets/ArtPortfolio/SquareKnot.png"
import SimpleKnot from "../assets/ArtPortfolio/SimpleKnot.png"
import SlipKnot from "../assets/ArtPortfolio/SlipKnot.png"
import SelfPortrait from "../assets/ArtPortfolio/SelfPortrait.jpg"
import TandB from "../assets/ArtPortfolio/Tristam&Braken.gif"
import BasilBox from "../assets/ArtPortfolio/BasilinaBox.jpg"
import Place1 from "../assets/ArtPortfolio/Placelessness1.jpg"
import Place2 from "../assets/ArtPortfolio/Placelessness2.jpg"
import Place3 from "../assets/ArtPortfolio/Placelessness3.jpg"
import StillLife from "../assets/ArtPortfolio/ContourSketchofStillLife.jpg"
import Swamp from "../assets/ArtPortfolio/TheSwamp.jpg"
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

    //Modal Management
    const [maxBotModalOpen, setMaxBotModalOpen] = useState(false);
	const [zomBeeDefenseModalOpen, setZomBeeDefenseModalOpen] = useState(false);
	const [myWebsiteModalOpen, setMyWebsiteModalOpen] = useState(false);
	const [adolebitqueModalOpen, setAdolebitqueModalOpen] = useState(false);
	const [artPortfolioModalOpen, setArtPortfolioModalOpen] = useState(false);
    
    const manageModal = (index) => {
        switch (index){
            case 0:
                setMaxBotModalOpen(true);
                break;
            case 1:
                setZomBeeDefenseModalOpen(true);
                break;
            case 2:
                setMyWebsiteModalOpen(true);
                break;
            case 3:
                setAdolebitqueModalOpen(true);
                break;
            case 4:
                setArtPortfolioModalOpen(true);
                break;
            default:
                setMaxBotModalOpen(false);
                setZomBeeDefenseModalOpen(false);
                setMyWebsiteModalOpen(false);
                setAdolebitqueModalOpen(false);
                setArtPortfolioModalOpen(false);
        }
    };

    const maxBotModal = (
        <Modal
            centered
            width={900}
            title="Max's Helper Bot"
            open={maxBotModalOpen}
             onOk={() => manageModal(-1)}
             onCancel={() => manageModal(-1)}
            maskStyle={{ backdropFilter: "blur(5px)" }}
            footer={
                <Button
                    href="https://discord.com/oauth2/authorize?client_id=280173205597978624&scope=bot"
                    target="_blank"
                    type="primary"
                >
                    Add to Discord
                </Button>
            }
        >
            <img src={MaxBotDemo} alt="Demo of Max's Helper Bot"></img>
            <p>
                I made this Discord Bot to do a wide variety of things, none of which are helpful. Whether you want something to yell with you or react to every single message with the same emote, this bot can do it.
            </p>
            <p>
                I used discord.js and node.js to code the bot, adding features sparsely since 2017. It makes use of different Discord features like joining voice channels, reading/sending messages, reactions, and the like. 
                I value privacy both as a user and a developer, so no user data or messages are stored.
            </p>
        </Modal>
      );

      const zomBeeModal = (
        <Modal
            centered
            width={900}
            title="ZomBee Defense"
            open={zomBeeDefenseModalOpen}
             onOk={() => manageModal(-1)}
             onCancel={() => manageModal(-1)}
            maskStyle={{ backdropFilter: "blur(5px)" }}
            footer={
                <Button
                    href="https://github.com/MaxwellRodriguez/ZomBeeDefense"
                    target="_blank"
                    type="primary"
                >
                    <GithubFilled/>Github
                </Button>
            }
        >
            <video id="ZBDFootage" width="400px" height="auto" autoplay="autoplay" muted loop>
                <source src={ZBDFootage} type="video/mp4"></source>
            </video>
            <p>
                ZomBee Defense is a first person shooter survival game where the goal is to destroy zombie bees (or ZomBees) coming from all angles before they reach you. 
                The gameplay consists of 5 rounds the player must defeat to win. 
                The game is very simple as it was a two-week final project for a college course, but it was a lot of fun to make.  
            </p>
            <p>
                As per the class requirements, ZomBee Defense was written in Java for Processing 4, and uses Sound and PeasyCam libraries to function. 
                I originally developed my own camera, but opted for PeasyCam as it allowed for a simpler mix of 2D display and 3D elements. 
                The whole project is open source on my GitHub, so feel free to try it yourself.
            </p>
        </Modal>
      );

      const myWebsiteModal = (
        <Modal
            centered
            width={900}
            title="This Website"
            open={myWebsiteModalOpen}
             onOk={() => manageModal(-1)}
             onCancel={() => manageModal(-1)}
            maskStyle={{ backdropFilter: "blur(5px)" }}
            footer={
                <Button
                    href="https://github.com/MaxwellRodriguez/Personal-Website"
                    target="_blank"
                    type="primary"
                >
                    <GithubFilled/>Github
                </Button>
            }
        >
            <p>
                I developed this website as a way to showcase my coding and art portfolio. Additionally, I wanted to build a website on my own since I worked exclusively with teams to make web applications in college.
            </p>
            <p>  
                The website was made with React.js, CSS, and uses the Ant Design library for some navigation and styling elements. You can check out the code on my GitHub, as I made it all open source.
            </p>
        </Modal>
      );
      const adolebitqueModal = (
        <Modal
            centered
            width={900}
            title="Adolebitque"
            open={adolebitqueModalOpen}
             onOk={() => manageModal(-1)}
             onCancel={() => manageModal(-1)}
            maskStyle={{ backdropFilter: "blur(5px)" }}
            footer={
                <Button
                    href="https://piptastic.itch.io/adolebitque"
                    target="_blank"
                    type="primary"
                >
                    View on itch.io
                </Button>
            }
        >
            <video poster="https://www.freegameplanet.com/wp-content/uploads/2021/04/adolebitque-game-download.jpg" 
                autoplay="autoplay" loop="loop" muted="muted" width="80%" height="auto">
                    <source src="https://www.freegameplanet.com/wp-content/uploads/2021/04/adolebitque-game-download.webm" type="video/webm"></source>
                    <source src="https://www.freegameplanet.com/wp-content/uploads/2021/04/adolebitque-game-download.mp4" type="video/mp4"></source>
            </video>
            <p>
                This game was the product of a semester-long class project in Fall 2020. My team of 7 handled everything including concept, programming, 2D and 3D asset creation, and animation. 
                We all had to contribute and communicate remotely given the nature of the pandemic, which was challenging at times. We developed Adolebitque (Latin for "burn") in Unity, using C# as our language of choice. 
            </p>
            <p>
                In the end, the game was published on Free Game Planet where it made the top spot in downloads for a while, and even attracted several Youtube content creators to publish their playthroughs. 
            </p>
        </Modal>
      );
      const artPortfolioModal = (
        <Modal
            centered
            width="1200px"
            title="My Art"
            open={artPortfolioModalOpen}
             onOk={() => manageModal(-1)}
             onCancel={() => manageModal(-1)}
            maskStyle={{ backdropFilter: "blur(5px)" }}
            footer={
                <div></div>
            }
        >
            <div className="gallery">
                {/* <div className="galleryColumn">
                        <div className="galleryOffset1"></div>
                        <div className="galleryImageContainer">
                            <img className="galleryImage" alt="Persephone's Touch" src={PersephTouch}></img>
                            <caption className="galleryCaption">Persephone's Touch</caption>
                        </div>
                        <div className="galleryImageContainer">
                            <img className="galleryImage" alt="Rook" src={Rook}></img>
                            <caption className="galleryCaption">Rook</caption>
                        </div>
                        <div className="galleryImageContainer">
                            <img className="galleryImage" alt="Tristam & Braken Code Sketch" src={TandB}></img>
                            <caption className="galleryCaption">Tristam & Braken Code Sketch</caption>
                        </div>
                    </div>
                    <div className="galleryColumn">
                        <div className="galleryImageContainer">
                            <img className="galleryImage" alt="FACE" src={FACE}></img>
                            <caption className="galleryCaption">FACE</caption>
                        </div>
                        
                        <div className="galleryImageContainer">
                            <img className="galleryImage" alt="Self Portrait" src={SelfPortrait}></img>
                            <caption className="galleryCaption">Self Portrait</caption>
                        </div>
                    </div>
                    <div className="galleryColumn">
                        <div className="galleryOffset3"></div>
                        <div className="galleryImageContainer">
                            <img className="galleryImage" alt="Celtic Heart Knot" src={HeartKnot}></img>
                            <caption className="galleryCaption">Celtic Heart Knot</caption>
                        </div>
                        <div className="galleryImageContainer">
                            <img className="ChompItTower" alt="Chomp It Tower" src={ChompItTower}></img>
                            <caption className="galleryCaption">Chomp It Tower</caption>
                        </div>
                        <div className="galleryImageContainer">
                            <img className="galleryImage" alt="Perspective Drawing of the Fine Arts Library" src={FALibrary}></img>
                            <caption className="galleryCaption">Perspective Drawing of the Fine Arts Library</caption>
                        </div>
                        
                    </div>  */}
            
                <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                            }}
                        >
                <div className="galleryColumn">
                    {/* <div className="galleryOffset1"></div> */}
                    
                        <div className="galleryImageContainer">
                            <Image className="galleryImage" alt="Persephone's Touch" src={PersephTouch} mask="none"></Image>
                            <caption className="galleryCaption">Persephone's Touch</caption>
                        </div>
                        <div className="galleryImageContainer">
                            <Image className="galleryImage" alt="Rook" src={Rook}></Image>
                            <caption className="galleryCaption">Rook</caption>
                        </div>
                        <div className="galleryImageContainer">
                            <Image className="galleryImage" alt="Contour Sketch of Still Life" src={StillLife}></Image>
                            <caption className="galleryCaption">Contour Sketch of Still Life</caption>
                        </div>
                    
                </div>
                <div className="galleryColumn">
                    <div className="galleryImageContainer">
                        <Image className="galleryImage" alt="FACE" src={FACE}></Image>
                        <caption className="galleryCaption">FACE</caption>
                    </div>
                    <div className="galleryImageContainer">
                        <Image className="galleryImage" alt="Self Portrait" src={SelfPortrait}></Image>
                        <caption className="galleryCaption">Self Portrait</caption>
                    </div>
                    <div className="galleryImageContainer" id="seriesHover">
                        <div className="galleryHover">
                            <img className="galleryImage" id="hover2" alt="Placelessness 3 / Placelessness Series" src={Place3}></img>
                            
                        </div>
                        <div className="galleryHover">
                            <img className="galleryImage" id="hover1" alt="Placelessness 2 / Placelessness Series" src={Place2}></img>
                        </div>
                            <Image 
                                id="main"
                                className="galleryImage" 
                                alt="Placelessness Series" 
                                src={Place1}
                                ></Image>
                            <div className="galleryGroup">
                                <Image className="galleryImage" alt="Placelessness 2" src={Place2}></Image>
                                <Image className="galleryImage" alt="Placelessness 3" src={Place3}></Image>                               
                            </div>
                            <caption className="galleryCaption">Placelessness Series</caption>
                        </div>
                </div>
                <div className="galleryColumn">
                    <div className="galleryImageContainer">
                        <Image className="ChompItTower" alt="Chomp It Tower" src={ChompItTower}></Image>
                        <caption className="galleryCaption">Chomp It Tower</caption>
                    </div>
                    <div className="galleryImageContainer" id="seriesHover">
                        <div className="galleryHover">
                            <img className="galleryImage" id="hover2" alt="Slip Knot / String Theory Series" src={SlipKnot}></img>
                            
                        </div>
                        <div className="galleryHover">
                        <   img className="galleryImage" id="hover1" alt="Savoy Knot / String Theory Series" src={SavoyKnot}></img>
                        </div>
                        
                        <Image 
                            className="galleryImage" 
                            id="main"
                            alt="Celtic Heart Knot / String Theory Series" 
                            src={HeartKnot}
                        />
                        <div className="galleryGroup">
                            <Image className="galleryImage" alt="Savoy Knot" src={SavoyKnot}></Image>
                            <Image className="galleryImage" alt="Square Knot" src={SquareKnot}></Image>
                            <Image className="galleryImage" alt="Slip Knot" src={SlipKnot}></Image>
                            <Image className="galleryImage" alt="Overhand Knot" src={SimpleKnot}></Image>
                        </div>
                        <caption className="galleryCaption">String Theory Series</caption>
                    </div>
                    <div className="galleryImageContainer">
                        <Image className="galleryImage" alt="The Swamp" src={Swamp}></Image>
                        <caption className="galleryCaption">The Swamp</caption>
                    </div>
                </div>
                <div className="galleryColumn">
                    {/* <div className="galleryOffset4"></div> */}
                    <div className="galleryImageContainer">
                        <Image className="galleryImage" alt="Perspective Drawing of the Fine Arts Library" src={FALibrary}></Image>
                        <caption className="galleryCaption">Perspective Drawing of the Fine Arts Library</caption>
                    </div>
                    <div className="galleryImageContainer">
                        <Image className="galleryImage" alt="Tristam & Braken Code Sketch" src={TandB}></Image>
                        <caption className="galleryCaption">Tristam & Braken Code Sketch</caption>
                    </div>
                    <div className="galleryImageContainer">
                            <Image className="galleryImage" alt="This is not my art, but my girlfriend's cat, Basil" src={BasilBox}></Image>
                            <caption className="galleryCaption">This is not my art, but my girlfriend's cat, Basil</caption>
                    </div>
                </div>
                </Image.PreviewGroup>
            </div>
        </Modal>
      );

  return (
    <div className="projects">
        <h2>My Projects</h2>
        <div className="projects-wrapper">
            <Card
                hoverable 
                // cover={<Avatar size={200} src={MaxBotLogo}/>}
                onClick={() => manageModal(0)}
                cover = {<img src={MaxBotLogo} alt="Max's Helper Bot Logo"></img>}
            >
                <Meta
                    title="Max's Helper Bot"
                    description="Discord bot coded with discord.js"
                />
            </Card>
            <Card 
                hoverable
                onClick={() => manageModal(1)}
                cover={<img id="ZombeeLogoImg" src={ZomBeeLogo} alt="ZomBee Defense Logo"></img>}
            >
                <Meta
                    title="ZomBee Defense"
                    description="Shooter survival game made in Processing 4"
                />
            </Card>
            <Card
                hoverable
                onClick={() => manageModal(2)}
                cover={<div className="coverWrapper">
                        <img id="Screenshot" src={Screenshot} alt="the webpage you're currently looking at"></img>
                        {/* <Avatar src={Screenshot} size={200}/> */}
                        <img id="mousetest" src={cursor}  style={{left:(mousePos.x / window.innerWidth)* 100 +"%", top:(mousePos.y / window.innerHeight)* 100 +"%", zIndex: 10}} alt="fake cursor"></img>
                    </div>
                }
            >
                
                <Meta
                    title="This Website"
                    description="(You're looking at it)"
                />
            </Card>
            <Card
                id="adol-card"
                hoverable
                onClick={() => manageModal(3)}
                cover={<img src={AdolLogo} alt="Adolebitque Logo"></img>}
            >
                <Meta
                    title="Adolebitque"
                    description="Horror game I worked on with a team using Unity"
                />
            </Card>
            <Card
                id="art-portfolio-card"
                hoverable
                onClick={() => manageModal(4)}
                cover={
                    <div className="art-icon-wrapper" id="art-icon-wrapper">
                        <img src={PersephTouch} style={{zIndex:3}} alt="Persephone's Touch Thumbnail"></img>
                        <img src={FACE} style={{zIndex:2}} alt="Mostly covered art by top thumbnail"></img>
                        <img src={Rook} style={{zIndex:1}} alt="Mostly covered art by top thumbnail"></img>
                    </div>
                }
            >
                <Meta
                    title="Art Portfolio"
                    description="A look into some of my art projects"
                />
            </Card>
            {/* <iframe src="../App.js" title="recursive"></iframe> */}
        </div>
        {maxBotModal}
        {zomBeeModal}
        {myWebsiteModal}
        {adolebitqueModal}
        {artPortfolioModal}
    </div>
  )
}

// const expandCard = (cardName) => {
//     console.log(cardName);
//     // let card = document.getElementById(cardName);
//     // card.style.width = "100vw";
//     // card.style.height = "100vh";
//     // card.style.zIndex = "10";
//     // card.style.position = "absolute";
//     // // card.style.transform = "translate(-100%)"
// }



export default Projects