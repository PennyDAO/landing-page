import React from 'react';
import NavBar from './components//NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import LandingAnimation from './components/LandingAnimation/LandingAnimation.js'
import WhyBox from './components/WhyBox/WhyBox.js';
import './App.css'
import Basics from './components/Basics/Basics.js';

const HomePage = () => {

    return(
        <div className='App'>
            <NavBar />
            <div className='landing-container'>
                <div className='title-container'>
                    <h1 className='landing-page-title'>A Community Tackling Student Debt</h1>
                    <p className='landing-page-subtitle'>A Next Generation Platform for CHANGE</p>
                    <button className='visit-app-button'>Visit App</button>
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
                              of education-related debt.'/>
                <Basics 
                  title='2. Our community desires a blockchain solution to measurably 
                         solve real-world problems, like student debt' 
                  description='A distributed application built on the Ethereum blockchain 
                               empowers our purpose-aligned community to quantifiably make 
                               a collective impact on reducing the inequalities and financial 
                               costs of obtaining a college or university degree. Our community 
                               members, CHANGE-makers, bond on-chain principal capital to 
                               establish a sustainable source of yield-generated funds.'/>
                <Basics 
                  title='3. Our marketplace for impact connects the dots' 
                  description='At PennyDAO, students share their story to get financial support. 
                               Proportional to their share of principle bonded, CHANGE-makers 
                               vote to approve each student story. If approved, the funds are 
                               distributed to a student’s Ethereum-address, and the story is 
                               compiled and transferred to each community participant.'/>
                <Basics 
                  title='3. Impact is tokenized, verifiable and permanent' 
                  description='By transforming our student stories of personal impact into tokens 
                               anchored on Ethereum, they are collected, verifiable and forever 
                               meaningful as proof of impact.'/>
              </div>
              
            </div>
            <Footer />
        </div>

    );

}

export default HomePage;