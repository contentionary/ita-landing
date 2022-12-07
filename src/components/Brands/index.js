import React from "react";
import Marquee from "react-fast-marquee";
import styled from '@emotion/styled';
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'
import Img7 from '../../assets/img7.png'
import Img8 from '../../assets/img8.png'
import Img9 from '../../assets/img9.png'
import Img10 from '../../assets/img10.png'
import Img11 from '../../assets/img11.png'
import Img12 from '../../assets/img12.png'
import Img13 from '../../assets/img13.png'
import Img14 from '../../assets/img14.png'
import Img15 from '../../assets/img15.png'
import { useMediaQuery } from "@mui/material";



import './brand.styles.css'

const Box = styled.img`
    width: auto;
    margin-left: 80px;
    height: 60px;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-size: center;
    // background-image: url(${props => props.img});
    src: ${props => props.img};

`

const Brand = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="brand_container">
            <div>
                <div className="partners">OUR PARTNERS</div>
                <div className="trusted">
                    {matches ? <>We are trusted<br /> by top brands</> : <>What to expect from<br /> your online I.T<br /> Academy</>}
                </div>
            </div>

            <div className="marque_cont">
                <Marquee speed={40} gradient={false} pauseOnHover={true}>
                    {
                        [
                            Img1, Img2, Img3, Img4, Img5, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15
                        ].map((element, idx) => (
                            // <Box className="box__1_" key={idx} img={element} />
                            <img className="box__1_ img__12" key={idx} src={element} />
                        ))
                    }
                </Marquee>
            </div>

        </div>
    )
}

export default Brand