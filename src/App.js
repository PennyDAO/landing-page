import React from 'react';
import NavBar from './components//NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import LandingAnimation from './components/LandingAnimation/LandingAnimation.js'
import WhyBox from './components/WhyBox/WhyBox.js';
import './App.css'
import Basics from './components/Basics/Basics.js';
import ImageOne from './images/image1.jpg';
import ImageTwo from './images/image2.jpg';
import ImageThree from './images/image3.jpg';
import ImageFour from './images/image4.jpg';
import { MemberLeft, MemberRight } from './components/Member/Member.js';
import Hanaya from './images/hanaya_pfp.png';
import Edward from './images/edward_pfp.png';
import David from './images/david_pfp.png';
import Cody from './images/cody_pfp.png';
import Peter from './images/peter_pfp.png';


const HomePage = () => {

    return(
        <div className='App'>
            <NavBar />
            <div className='landing-container'>
                <div className='title-container'>
                    <h1 className='landing-page-title'>Where every penny counts</h1>
                    <p className='landing-page-subtitle'>A Marketplace for Impact</p>
                    <button className='visit-app-button'><a href='https://pennydao.github.io/pennyDAO_official/'>Visit App</a></button>
                </div>
                <div className='landing-page-image-container'>
                    <LandingAnimation />
                </div>
            </div>
            <div className='section-container'>
                <h1>One Purpose: Honest Impact</h1>
                <div className='why-box-container'>
                    <WhyBox
                    title='Zero Platform Fees'
                    description='Every penny counts toward achieving impact and honest change. And our community determines how all funds are distribuited to do that.'
                    color='#CEAF7F' />
                    <WhyBox
                    title='Real Student Stories'
                    description='Our community votes to award grants to individual students. their personal story matters to us, and seeing them succeed feels good.'
                    color='#BD8733' />
                    <WhyBox
                    title='Proof of Impact'
                    description='Student stories and grant activity are permaently anchored to the blockchain. Proven impact our community made, verifiable forever.'
                    color='#A58C6E' />
                </div>
            </div>
            <div className='section-container'>
              <h1>PennyDAO Basics</h1>
              <div className='basics-container'>
                <Basics 
                    title='1. There’s no shortage of students drowning in debt' 
                    description='Tuition costs continue to skyrocket and most students 
                                graduate with some amount of education-related debt. 
                                There’s a need for a fresh approach to helping students 
                                start life easier, without the uncertainty and challenges 
                                of education-related debt.'
                    image={ImageOne}                
                />
                <Basics 
                    title='2. Our community desires a blockchain solution to measurably 
                            solve real-world problems, like student debt' 
                    description='A distributed application built on the Ethereum blockchain 
                                empowers our purpose-aligned community to quantifiably make 
                                a collective impact on reducing the inequalities and financial 
                                costs of obtaining a college or university degree. Our community 
                                members, CHANGE-makers, bond on-chain principal capital to 
                                establish a sustainable source of yield-generated funds.'
                    image={ImageTwo}           
                />
                <Basics 
                    title='3. Our marketplace for impact connects the dots' 
                    description='With Penny, personal impact is valued and $CHANGE is our currency. 
                                Students share their story to get financial support. Proportional 
                                to their share of principle bonded, CHANGE-makers vote to approve 
                                each student story. If approved, the funds are distributed to a 
                                student’s Ethereum-address, and the story is compiled and transferred 
                                to each community participant as an Impact NFT.'
                    image={ImageThree}
                />
                <Basics 
                    title='3. Impact is tokenized: verifiable, permanent, and collectible' 
                    description='Impact NFTs are individual stories of helping a student 
                                start life easier. Those stories are transformed into tokens 
                                anchored on Ethereum to be collected, verifiable and forever 
                                meaningful as Proof of Impact in our community. Together, 
                                we’re making a difference.'
                    image={ImageFour}
                />
              </div>
              <div className='section-container'>
                <h1>PennyDAO Core Team</h1>
                <p>Inspired to Scale Ethereum with an Impactful Story</p>
                <div className='why-box-container'>
                    <MemberRight 
                        title='Frontend Interface Developer'
                        description='Kota is a computer science student at the University of California, Irvine.'
                        image={Cody}
                        name='Kota Enokida'
                    />
                    <MemberLeft
                        title='NFT & Smart Contract Developer'
                        description='Edward is a backend developer at Curve Finance and an actuarial scientist.'
                        image={Edward}
                        name='Edward Amor'
                    />
                    <MemberRight 
                        title='Lead Developer / Dev Team Lead'
                        description='Hanaya is the community lead at DeFi Pulse Index (DPI) and leads our dev.'
                        image={Hanaya}
                        name='Hanaya Barasali'
                    />
                    <MemberLeft 
                        title='DAO-Operations & Marketing'
                        description='Peter is a SaaS consultatnt, formerly at Accenture and a Buddhist monk.'
                        image={Peter}
                        name='Kota Enokida'
                    />
                    <MemberRight 
                        title='Project Storyteller'
                        description='David builds resilient brands with story leadership and stakeholder listening.'
                        image={David}
                        name='Kota Enokida'
                    />
                </div>
            </div>
            </div>
            <Footer />
        </div>

    );

}

export default HomePage;