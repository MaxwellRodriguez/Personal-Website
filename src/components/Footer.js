import "./Footer.css";
import React from "react";
import { Col,} from 'antd'
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons'


const Footer = () => {
    return (
            <div className="footerRow">
                <Col span={9} offset={15}>
                    <div className="iconDiv">
                        <a href="https://github.com/TylerMetzger" rel="noreferrer" target="_blank" style={{ color: "inherit" }}>
                            <GithubOutlined className="githubIcon" />
                        </a>
                        <a href="https://www.linkedin.com" rel="noreferrer" target="_blank" style={{ color: "inherit" }}>
                            <LinkedinOutlined className="linkedinIcon" />
                        </a>
                        <a href="mailto:tylermetzger23@gmail.com" rel="noreferrer" target="_blank" style={{ color: "inherit" }}>
                            <MailOutlined className="emailIcon" />
                        </a>
                    </div>
                </Col>
            </div>
    );
};

export default Footer;
