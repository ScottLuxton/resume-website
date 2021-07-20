import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'My Experience'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Work summary'} />
                </div>
                <div className="resume-content">
                    
                    <ResumeItem 
                        year={'Oct 2014 - Aug 2020'} 
                        title={'Business Development Manager / Account Manager'}
                        subTitle={'DB Schenker of Canada'}
                        text={'In my roles as business development / account manager I was responsible for generating new revenue and providing account management services for our largest clients. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2014 and 2007 - 2008'} 
                        title={'Key Account Executive'}
                        subTitle={'UPS'}
                        text={'In my time with UPS I was succesful in developing new client relationships and was promoted from a junior sales role to a key account executive position.'} 
                    />
                    <ResumeItem 
                        year={'May 2008 - July 2009'} 
                        title={'Marketing Associate'}
                        subTitle={'Sysco Food Services'}
                        text={'I Worked with client Chefs to help them develop menus within specified budgets and manage inventory with Sysco services and products.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational summary'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'March - August 2021'} 
                        title={'Full Stack Development Learner'}
                        subTitle={'InceptionU'}
                        text={'Graduated from a six month full stack development program in which we worked in AGILE software development teams and built a Plus15 navigation application for our final project. '} 
                    />
                    <ResumeItem 
                        year={'July 2007'} 
                        title={'Business Administration'}
                        subTitle={'SAIT Polytechnic'}
                        text={'I majored in marketing and we studied topics such as brand management, strategic marketing, research, business planning, economics and management. '} 
                    />
                    <ResumeItem 
                        year={'December 2003'} 
                        title={'Professional Cooking'}
                        subTitle={'SAIT Polytechnic'}
                        text={'Two year in class training followed by an apprentiship at a private country club.  We studied classical french cusine and techniques and learned in working kitchens.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
