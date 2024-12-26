import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import Intro from './components/Intro';
import Facts from './components/Facts';
import Effects from './components/Effects';
import PersonalInsight from './components/PersonalInsight';
import Footer from './components/Footer';
import References from './components/References';
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { LuBadgeX } from "react-icons/lu";
import { FaNewspaper } from "react-icons/fa6";
import AOS from 'aos';
import '../src/index.css';




function App() {
	useEffect(() => {
		AOS.init({
		duration: 1000, 
		easing: 'ease-in-out', 
		once: true, 
		});
	}, []);
	  
	return (
	  <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg.jpg" }}>
		<div className="absolute inset-0 "></div>
  
		<div className="relative z-10">
		  <BrowserRouter>
			<div className="w-full backdrop-blur-sm p-5">
			  <ul className="flex font-helvetica justify-around">
				<Link className="font-bold font-helvetica hidden md:block text-white" to="/">Home</Link>
				<Link className="font-bold hidden md:block text-white" to="/intro">What is it?</Link>
				<Link className="font-bold hidden md:block text-white" to="/facts">Fun Facts!</Link>
				<Link className="font-bold hidden md:block text-white" to="/effects">Effects to Ethics</Link>
				<Link className="font-bold hidden md:block text-white" to="/personalinsight">My Personal Take</Link>
				<Link className="font-bold md:hidden text-white" to="/"><FaHome /></Link>
				<Link className="font-bold md:hidden text-white" to="/intro"><MdOutlineQuestionMark /></Link>
				<Link className="font-bold md:hidden text-white" to="/facts"><FaClipboardList /></Link>
				<Link className="font-bold md:hidden text-white" to="/effects"><div className="flex"><HiOutlineCheckBadge /><LuBadgeX /></div></Link>
				<Link className="font-bold md:hidden text-white" to="/personalinsight"><FaNewspaper /></Link>
			  </ul>
			</div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/intro" element={<Intro />} />
				<Route path="/facts" element={<Facts />} />
				<Route path="/effects" element={<Effects />} />
				<Route path="/personalinsight" element={<PersonalInsight />} />
				<Route path="/references" element={<References />} />
				<Route path='/footer' element={<Footer />} />
			</Routes>
			<Footer />
		  </BrowserRouter>
		</div>
	  </div>
	);
  }

export default App
