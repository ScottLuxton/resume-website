import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'JavaScript'}
                            // width={'70%'}
                            // text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS'}
                            // width={'90%'}
                            // text={'90%'}
                        />
                        <ProgressBar 
                            title={'MongoDB'}
                            // width={'85%'}
                            // text={'85%'}
                        />
                        <ProgressBar 
                            title={'Node JS'}
                            // width={'60%'}
                            // text={'60%'}
                        />
                        <ProgressBar 
                            title={'Express JS'}
                            // width={'95%'}
                            // text={'95%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'HTML'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'GitHub'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'Networking'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'Mapbox'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'B2B Sales'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'Account Management'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'Customer Relationship Development'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'Client Services'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'Learning'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={'Communication'}
                            // width={'75%'}
                            // text={'75%'}
                        />
                        <ProgressBar 
                            title={''}
                            // width={'75%'}
                            // text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
