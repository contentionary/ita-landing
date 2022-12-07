import React, { useEffect, useState, useRef } from 'react';
import BgImage from '../../assets/bgD.png';
import styled from '@emotion/styled';
import Sim from '../../assets/svg/sim.svg';
import Person from '../../assets/svg/person.svg';
import Wallet from '../../assets/svg/wallet.svg';
import Logo from '../../assets/logo.png'
import UserImg from '../../assets/sch.png'
import Cheburashka from '../../assets/Cheburashka.png';
import Video from '../../assets/video.png';
import Survey from '../../assets/Survey.png';
import { useMediaQuery } from '@mui/material';
import Quiz from '../../assets/Quiz.png';
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import './hero.styles.css'


export const Button = styled.button`
    width: 161px;
    height: 49px;
    left: 1164px;
    top: 51px;
    background: linear-gradient(92.54deg, #DD6E20 -14.34%, #DDA333 98.84%);
    border-radius: 4px;
    border: none;
    z-index: 10;
    outline: none;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    a {
        color: #fff;
        text-decoration: none;
    }
`


const Hero = () => {

    const matches = useMediaQuery('(min-width:600px)');
    const navigation = useNavigate()

    const handleClick = (ele) => {
        const element = document.querySelector(ele);
        element.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div className='hero_container'>
            <div className='hero_container_box' />
            {
                matches ?
                    (
                        <div className='header_box'>
                            <div className='header_container'>
                                <img src={Logo} />
                                <div style={{cursor: 'pointer'}} onClick={() => handleClick('#pricing')} className='header_link'>Pricing</div>
                                <div style={{cursor: 'pointer'}} onClick={() => handleClick('#contact')} className='header_link'>Contact Us</div>
                            </div>
                            <div className='btn'>
                                <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                                    <Button>
                                        I'm Interested
                                    </Button>
                                </a>
                            </div>
                            <div className='header_menu_box' />
                        </div>
                    )
                    :
                    (
                        <div className='mobile_view'>
                            <img src={Logo} />
                            <AiOutlineMenu size={20} />
                        </div>
                    )
            }

            <div className='header_hero_container'>
                <div className='header_fex'>
                    <div>
                        <div className='header_hero_text'>
                            {
                                matches ? <>
                                    Dear<br />
                                    School Owner or<br />
                                    Administrator
                                </>
                                    :
                                    <>
                                        Dear School<br /> Owner or<br />
                                        Administrator
                                    </>
                            }
                        </div>

                        <div className='header_hero_text_2'>
                            Own an online I.T Academy today and make {matches && <br />} huge profit from students' engagement
                        </div>
                    </div>
                    <img src={UserImg} className='user_image' />
                </div>

                <div className='get_started_header'>
                    <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                        <Button>
                            Get Started For Free
                        </Button>
                    </a>
                </div>

                <div className='customize'>
                    Customizable to your school website and brand identity
                </div>

                <div className='box_actions'>
                    <div className='box_container b__1'>
                        <img src={Sim} />
                        <div className='box_text'>
                            No code required
                        </div>
                    </div>
                    <div className='box_container b__2'>
                        <img src={Person} />
                        <div className='box_text'>
                            {matches ? 'No technical skills needed' : 'No credit card'}
                        </div>
                    </div>
                    <div className='box_container b__3'>
                        <img src={Wallet} />
                        <div className='box_text'>
                            {matches ? 'Free Setup' : 'No technical skills needed'}
                        </div>
                    </div>
                </div>
            </div>


            {/* SECTION */}

            <div className='expect_sections'>
                <div className='expect_sections_header'>
                    {matches ? <>What to expect<br /> from your online<br /> I.T Academy</> : 'What to expect from your online I.T Academy'}
                </div>

                <div className='expect_sections_'>
                    <div className='expect_sections_box'>
                        <img src={Video} />
                        <div className='expect_sections_box_cont'>
                            <div className='expect_sections_box_text'>Embedded top I.T skill {matches && <br />} Video courses</div>
                            <div className='expect_sections_box_text_2'>
                                Video courses are available for students who are interested in I.T Skills.
                                From coding to robotics, microsoft packages  etc.
                            </div>
                        </div>
                    </div>


                    <div className='expect_sections_box'>
                        <img src={Cheburashka} />
                        <div className='expect_sections_box_cont'>
                            <div className='expect_sections_box_text'>1000+ Curricullum- {matches && <br />} based animated videos</div>
                            <div className='expect_sections_box_text_2'>
                                Access to high quality animated  illustrative videos. from maths, chemistry,
                                physics to basic science and more
                            </div>
                        </div>
                    </div>


                    <div className='expect_sections_box'>
                        <img src={Survey} />
                        <div className='expect_sections_box_cont'>
                            <div className='expect_sections_box_text'>Preparatory Practice {matches && <br />}  Test and Mocks</div>
                            <div className='expect_sections_box_text_2'>
                                Access to pratice questions for entrance exams and other examinations
                            </div>
                        </div>
                    </div>


                    <div className='expect_sections_box'>
                        <img src={Quiz} />
                        <div className='expect_sections_box_cont'>
                            <div className='expect_sections_box_text'>Weekends class-based<br /> online Competitions</div>
                            <div className='expect_sections_box_text_2'>
                                Opportunity to join weekend tournaments and compete with peers and win prizes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section_class_btn'>
                <a href='https://forms.gle/rTcTymHSJ9cqREZw6' target='_blank'>
                    <Button>
                        I'm Interested
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default Hero