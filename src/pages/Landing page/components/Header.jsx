import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../Component/Button";
import arrowRight from '../../../assets/Vector.svg'
import slack from '../../../assets/slack.svg'
import discord from '../../../assets/discord.svg'
import stripe from '../../../assets/stripe.svg'
import figma from '../../../assets/figma.svg'
import openAi  from '../../../assets/openai.svg'
import retool from '../../../assets/Frame.svg'
const Header = () => {
    const [isHover, setIsHover] = useState(false)
    function handleover(){
        setIsHover(true)
    }
    function handleLeave(){
        setIsHover(false)
    }
    useEffect(()=>{
        let slide = document.getElementById('slideshow')
    let points = slide.getBoundingClientRect()
    console.log(points.left)
    console.log(points.right)
    },[])
  return (
    <header>
      <nav className="flex justify-between py-2">
        <div>
            <h1 className="font-['Neuton-800'] text-[1.5rem] leading-normal">compound</h1>
        </div>
        <ul className="flex items-center gap-5">
            <NavLink to='#' >Membership</NavLink>
            <NavLink to='#'>Resources</NavLink>
            <NavLink to='#'>Company</NavLink>
        </ul>
        <div className="flex items-center gap-5">
            <button>sign in</button>
            <Button type="primary">Get started <img src={arrowRight} alt="" /></Button>
        </div>
      </nav>
      <section className="h-full py-48">
        <div>
            <h3 onMouseOver={handleover} onMouseLeave={handleLeave} className= {isHover ? "leading-none text-[3.955375rem] blur-[0]" : "leading-none text-[3.955375rem] blur-[3.9553885459899902px] cursor-pointer" }>We focus on your finances</h3>
            <h3 onMouseOver={handleLeave} onMouseLeave={handleover} className={isHover ? "leading-none text-[3.955375rem] blur-[3.9553885459899902px] cursor-pointer" : "leading-none text-[3.955375rem] blur-[0]" }>You focus on what matters the most</h3>
        </div>
        <div className="flex gap-3 py-10">
        <Button type="primary">Get started <img src={arrowRight} alt="" /></Button>
        <Button type='default'>Learn More</Button>
        </div>
        <div className="flex gap-3">
            <p className="text-[1.5rem] w-60 wrap">
            Wealth management for people from leading tech companies
            </p>
            <div className="flex gap-4 wiggle slideshow" id="slideshow">
                <div className="contain"></div>
                <img src={slack} alt=""  className="wrape"/>
                <img src={discord} alt="" className="wrape"/>
                <img src={stripe} alt="" className="wrape" />
                <img src={figma} alt="" className="wrape"/>
                <img src={openAi} alt="" className="wrape"/>
                <img src={retool} alt="" className="wrape"/>
                <div className="contain"></div>
            </div>
            {}
        </div>
      </section>
    </header>
  );
};

export default Header;
