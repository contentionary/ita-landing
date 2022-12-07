import React from "react";
import Image1 from '../../assets/p_1.png';
import Image2 from '../../assets/p_2.png';
import Image3 from '../../assets/p_3.png';
import Footer from "../Footer";
import Skills from "../Skills";
import { Button } from "../Hero";
import { useMediaQuery } from "@mui/material";

import './launch.styles.css';


const Launch = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="launch_box_cont">
            <div className="launch_box" />
            <div className="launch_box_container">
                <div className="launch_box_container_1">
                    <div className="launch_header">
                        Launch to your school’s {matches && <br />}website or subdomain
                    </div>
                    <div className="launch_text">
                        And YES, the Online Academy is setup in your school's name and brand identity.
                        This simply means that your students will access the learning contents without coming to Contentionary.com
                    </div>
                    <div className="btn___1">
                        <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                            <Button>
                                I'm Interested
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="launch_box_container_2">
                    <img src={Image1} className='launch_image' />
                </div>
            </div>

            <div className="launch_box_container">
                <div className="launch_box_container_1 type__1">
                    <img src={Image2} className='launch_image' />
                </div>
                <div className="launch_box_container_2 type__2">
                    <div className="launch_box_container_2_box">
                        <div className="launch_header">
                            Generate More revenue for your school while equiping them with future needed skills.
                            {/* Launch to your school’s{matches && <br /> }website or subdomain */}
                        </div>
                        <div className="launch_text text__0">
                            Interestingly, your school will NOT BE PAYING A DIME for this technology, rather, you will be making profit from a HUGE PERCENTAGE for every subscription done by your students or anyone that subscribes to your academy.
                        </div>
                        <div className="btn___1">
                            <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                                <Button>
                                    I'm Interested
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="launch_box_section">
                <div className="launch_sect">
                    <div className="launch_box_container box__2">
                        <div className="launch_box_container_1">
                            <div className="launch_header">
                                Sales Driven Approach (sell independently and sell via partners’ academies)

                                {/* Share your ebooks, notes,<br /> questions, workbook and more<br /> with students */}
                            </div>
                            <div className="launch_text">
                                It is also true that:
                                You can also add your own contents (Videos, audios, ebooks, PDFs, exam questions etc.) to your academy and sell to your students
                                And retain 90% of the subscription fee for your contents
                            </div>
                            <div className="btn___1">
                                <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                                    <Button>
                                        I'm Interested
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="launch_box_container_2">
                            <img src={Image3} className='launch_image' />
                        </div>
                    </div>
                </div>

                <Skills />
                <Footer />
            </div>
        </div>
    )
}

export default Launch