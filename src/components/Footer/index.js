import React from "react";
import FB from '../../assets/svg/fb.svg';
import Link from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Youtube from '../../assets/svg/youtube.svg';
import Logo from '../../assets/logo.png'
import { useMediaQuery } from "@mui/material";
import './footer.styles.css';


const Footer = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <div className="footer_container" id='contact'>
            <div className="footer_container_box">
                <div>
                    {!matches && <img src={Logo} />}
                    <div className="footer_header">Nigeria Office:</div>
                    <div className="footer_header_">Address 1:</div>
                    <div className="road">38 Opebi Road, Ikeja, Lagos State,<br /> Nigeria.</div>

                    <div className="footer_header_ _cont_">Telephone:</div>
                    <div className="road color">+234 902 239 6389</div>



                    <div className="footer_header _head_">United Kingdom Office:</div>
                    <div className="road">Longside Lane, Longside House,<br /> Bradford, United Kingdom.</div>

                    <div className="footer_header_ _cont_">Telephone:</div>
                    <div className="road color">+44 7754 601138</div>


                    <div className="footer_header _head_">Contact Email:</div>
                    <div className="road color">contact@contentionary.com</div>

                </div>

                {
                    matches && (
                        <div>
                            <div className="footer_header">Legal</div>
                            <div className="links__">Privacy Policy</div>
                            <div className="links__">Intellectual Property</div>
                            <div className="links__">Terms of use</div>

                        </div>
                    )
                }

                <div>
                    <div className="footer_header footer_header__">Social follows</div>
                    <div className="footer_links">
                        <img src={FB} />
                        <img src={Link} />
                        <img src={Twitter} />
                        <img src={Youtube} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer