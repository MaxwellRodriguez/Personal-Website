import React from 'react';
import './Resume.css';

import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons"
import resumePDF from "../assets/Max Rodríguez Resume.pdf"

function Resume() { 
    return(
        <div className="resume">
            <h2>My Resume</h2>
            <Button 
                type="primary" 
                shape="round" 
                icon={<DownloadOutlined />} 
                href={resumePDF}
                target="_blank"
            >
                Download
            </Button>
            <iframe 
                id="resumeDoc" 
                title="ResumeDoc" 
                scrolling='no' //it's deprecated, but the alternative solution doesn't work
                src="https://docs.google.com/document/d/e/2PACX-1vQ5vkVAoaaslrdbrXgOSzXliuT5OruOl9m0imNK1O2gdMRVvLR4YPRNXPz4jd1H-JJygJqFXbxTWGl0/pub?embedded=true"
            ></iframe>
        </div>
    );
}


// window.onload = function(){
//     const iframe = document.getElementById("resumeDoc");
//     iframe.onload = function(){
//         console.log("HELLO???");
//         iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
//     }
// }
export default Resume