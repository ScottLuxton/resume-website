import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            {/* <div className="left-content">
                <img src={resume} alt=""/>
            </div> */}
            <div className="right-content">
                <h4>I am <span>Scott Luxton</span></h4>
                <p className="paragraph">
                I thrive working in collaborative team environments where my adaptive and sometimes “outside the box” thinking is valued.  
                I am skilled at presenting and communicating with internal and external stakeholders and I enjoy connecting businesses with clients.
                </p>
                <p>I am seeking a position where I can integrate the many business skills I have developed in nearly fifteen years of marketing and account management with the technical skills I acquired while learning full stack development with InceptionU. </p>
                <p><br></br></p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nationality </p>
                        <p>Hobbies</p>
                        <p>Favourite animal</p>
                        <p>Pets</p>
                        <p>Places I enjoy</p>
                        {/* <p>Service</p> */}
                    </div>
                    <div className="info">
                        <p> Canadian </p>
                        <p> Cooking, Golf, Skiing, Kickboxing, Yoga</p>
                        <p> Buffalo </p>
                        <p>Two cats, Keiko and Pixie</p>
                        <p> Panorama, Nicoya Peninsula, Cabo, Las Vegas, Toronto, Montreal </p>
                        {/* <p> Freelance</p> */}
                    </div>
                </div>
                {/* <PrimaryButton title={'Download Cv'} /> */}
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
