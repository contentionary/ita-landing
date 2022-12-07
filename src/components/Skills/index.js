import React from "react";
import Star from '../../assets/svg/star.svg';
import Unlimited from '../../assets/svg/unlimited.svg';
import Wallet from '../../assets/svg/wallet.svg'
import Image from '../../assets/p_4.png'
import Burst from '../../assets/svg/burst.svg'
import { Button } from "../Hero";
import { useMediaQuery } from "@mui/material";
import './skills.styles.css';


const Skills = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="skills_container" id="skill">
            <div className="skills_container_header">
                Expected I.T skills{<br />}
                for the Academy
            </div>
            <div className="students">

                Students will have access to these<br /> contents all through the year
            </div>
            <div className="skills_actions">
                {
                    [
                        {
                            text: 'STEM- Robotics',
                            img: Star,
                        },
                        {
                            text: 'Web Development using Wordpress',
                            img: Unlimited,
                        }, {
                            text: 'Design (Graphics)',
                            img: Wallet,
                        }, {
                            text: 'Desktop Publishing',
                            img: Unlimited,
                        }, {
                            text: 'Microsoft (Word, excel and Powerpoint)',
                            img: Wallet,
                        }, {
                            text: '1000+ animated videos in maths, science, geopraphy etc.',
                            img: Star,
                        },
                    ].map((element) => (
                        <div key={element.text} className="skills_box">
                            <img src={element.img} />
                            <div className="skill_box_text">
                                {element.text}
                            </div>
                        </div>
                    ))
                }
            </div>
            <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                <Button>
                    I'm Interested
                </Button>
            </a>

            <div className="skills_pricing" id="pricing">
                <div className="skill_pricing_box">
                    <div className="skill_pricing_box_">
                        <div className="pricing">
                            Our pricing
                        </div>
                        {
                            !matches && <div className="we_make">
                                We only make profit when you are making profit
                            </div>
                        }
                        <div className="details">
                            Students are expected to subscribe to any tutorial video of their choice, with fees ranging from N5,000 to N10,000 per year. This amount is shared 70:30 between Contentionary and your school.
                            {/* Student are expected to subscribe to any tutorial video of their choice, with fee ranging from N5,000 to N10,000 per yearly.
                            This amount is shared 70:30 between contentionary and your school. */}

                        </div>
                        <div className="setup">
                            Setup is FREE
                        </div>
                    </div>
                </div>
                <img src={Image} />
            </div>

            <div className="skill_weekends">
                <div className="skill_weekends_box">
                    {matches && <img src={Burst} />}
                    <div className="skills_box__">
                        <div className="skills_week">
                            Weekends, holidays and afterschool hours can now be productive for students. Vocational knowledge is not an option but a must for every growing child
                        </div>

                        <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                            <Button>
                                Yes, Let's start
                            </Button>
                        </a>
                    </div>
                    <img src={Burst} className='burst_mobile' />
                </div>
            </div>
        </div>
    )
}

export default Skills