"use client";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import React from 'react';
import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaFileDownload, FaCalendar, FaPhone, FaEnvelope,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, FaCrown, 
  FaRocket, FaGlobe, FaPuzzlePiece, FaFilter, FaSearch, FaTrophy, FaChartLine,
  FaAward, FaCogs, FaIndustry, FaShoppingCart, FaHeartbeat,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaFacebookF,
  // Check & Status Icons
  FaCheckCircle, FaBounce, FaLightbulb, FaShieldAlt, FaClock, FaEye,
  FaPalette, FaUserTie, FaGraduationCap, FaLeaf, FaCog,
  // About section icons
  FaBriefcase, FaHandshake
} from 'react-icons/fa';

import {
  // Material Design Icons for additional variety
  MdDashboard, MdPeople, MdBarChart, MdSettings, MdNotifications, MdMail,
  MdVerified, MdSpeed, MdSecurity, MdSupport
} from 'react-icons/md';

import {
  // Bootstrap Icons for even more options
  BsHeartbeat, BsPulse, BsShieldCheck
} from 'react-icons/bs';
import Header from "../header/page";
import Footer from "../footer/page";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,

});

const steps = [
  {
    number: 1,
    title: 'Discovery & Analysis',
    description: 'We Deep-Dive Into Your Company Culture, Requirements, And Success Criteria Using Our Proprietary Assessment Framework.',
    icon: <FaSearch className="w-4 h-4 text-blue-500" />,
    
  },
  {
    number: 2,
    title: 'AI-Powered Sourcing',
    description: 'Our AI Algorithms Scan Millions Of Profiles Across 50+ Platforms To Identify The Perfect Candidates For Your Role.',
    icon: <FaRocket className="w-4 h-4 text-purple-500" />,
 
  },
  {
    number: 3,
    title: 'Smart Screening',
    description: 'Multi-Layered Evaluation Including Skills Assessment, Cultural Fit Analysis, And Predictive Performance Modeling.',
    icon: <FaShieldAlt className="w-4 h-4 text-green-500" />,
   
  },
  {
    number: 4,
    title: 'Expert Screening',
    description: 'Our Senior Recruiters Conduct In-Depth Screening To Validate Technical Skills And Ensure Perfect Alignment.',
    icon: <FaUserPlus className="w-4 h-4 text-orange-500" />,
   
  },
  {
    number: 5,
    title: 'Seamless Integration',
    description: 'We Facilitate The Entire Placement Process And Provide Ongoing Support To Ensure Successful Integration.',
    icon: <FaCheckCircle className="w-4 h-4 text-teal-500" />,
   
  },
];

const industries = [
  {
    title: 'Technology',
    description: 'Software Development, Gen AI, Data Engineer, SAP, SalesForce, AI/ML, Cybersecurity, Cloud Infrastructure',
    icon: <FaLaptopCode className="text-white text-2xl" />,
   
  },
  {
    title: 'Healthcare',
    description: 'Medical Professionals, Healthcare IT, Pharmaceutical Research',
    icon: <FaHeartbeat className="text-white text-2xl" />,
    
  },
  {
    title: 'Finance',
    description: 'Banking, Fintech, Investment Management, Accounting',
    icon: <FaChartLine className="text-white text-2xl" />,
   
  },
  {
    title: 'Manufacturing',
    description: 'Industrial Engineering, Supply Chain, Quality Assurance',
    icon: <FaCog className="text-white text-2xl" />,
   
  },
  {
    title: 'Education',
    description: 'EdTech, Online Learning, Academic Administration',
    icon: <FaGraduationCap className="text-white text-2xl" />,
    
  },
  {
    title: 'Clean Energy',
    description: 'Renewable Energy, Sustainability, Green Technology',
    icon: <FaLeaf className="text-white text-2xl" />,
    
  },
  {
    title: 'Creative',
    description: 'Design, Marketing, Content Creation, Media Production',
    icon: <FaPalette className="text-white text-2xl" />,
    
  },
  {
    title: 'Consulting & Advisory',
    description: 'Strategy Consulting, Business Transformation, Risk Advisory',
    icon: <FaUserTie className="text-white text-2xl" />,
   
  },
];

// Team members data
const teamMembers = [
  {
    name: 'Nishant Panchamiya',
    position: 'Founder & CEO',
    description: 'Visionary leader with extensive experience in staffing solutions and driving organizational growth.',
    initials: 'NP',
    linkedin: '#',
    email: 'nishant@arihantstaffing.com',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Dhaval Panchamiya',
    position: 'Director Of Recruiting Operations',
    description: 'Expert in recruitment strategy and operations with a proven track record of delivering high-impact staffing solutions.',
    initials: 'DP',
    linkedin: '#',
    email: 'dhaval@arihantstaffing.com',
    gradient: 'from-purple-500 to-indigo-500'
  }
];

// Enhanced Counter Component for animated numbers
const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const numericTarget = parseFloat(target.toString().replace(/[^\d.]/g, ''));
    const increment = numericTarget / (duration * 60); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(timer);
      }
      setCount(current);
    }, 1000 / 60);
  };

  const formatValue = () => {
    if (target.toString().includes('.')) {
      return `${prefix}${count.toFixed(1)}${suffix}`;
    } else {
      return `${prefix}${Math.floor(count)}${suffix}`;
    }
  };

  return <span ref={elementRef}>{formatValue()}</span>;
};



export default function CompleteBannerComponent({ backgroundRef, textRef }) {
  const splineRef = useRef();
  const heroRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Header state management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ 
        x: Math.max(0, Math.min(1, x)), 
        y: Math.max(0, Math.min(1, y)) 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Enhanced navbar scroll effect
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const getMouseTransform = (multiplierX = 10, multiplierY = 8) => ({
    transform: `translate(${(mousePosition.x - 0.5) * multiplierX}px, ${(mousePosition.y - 0.5) * multiplierY}px)`
  });

  // Header functions
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .gradient-bg { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
        }
        .gradient-text { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
        }
        .gradient-health {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }
        .navbar-scrolled {
          background: rgba(17, 24, 39, 0.95) !important;
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        .service-card:hover::before {
          left: 100%;
        }
        .floating-animation {
          animation: floating 6s ease-in-out infinite;
        }
        .morphing-shape {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: morph 8s ease-in-out infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
        }
        .glass-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.15);
        }
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hover-lift:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
        }
        .process-step {
          transition: all 0.4s ease;
        }
        .process-step:hover {
          transform: translateY(-10px);
        }
        .process-step:hover .step-number {
          transform: scale(1.1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        .industry-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }
        .industry-card:hover::before {
          left: 100%;
        }
        .stats-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .stats-item {
          transition: all 0.4s ease;
        }
        .stats-item:hover {
          transform: translateY(-10px) scale(1.05);
        }
        .team-member {
          transition: all 0.4s ease;
        }
        .team-member:hover {
          transform: translateY(-10px) scale(1.02);
        }
        .team-avatar {
          transition: all 0.3s ease;
        }
        .team-member:hover .team-avatar {
          transform: scale(1.1) rotate(5deg);
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out; }
        .animate-fadeInScale { animation: fadeInScale 0.6s ease-out; }
        .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
      `}</style>

      {/* Enhanced Navigation Header */}
        <Header />

      {/* Hero Section with 3D Model - UNCHANGED AS REQUESTED */}
      <section 
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden bg-[#171717] scroll-smooth"
      >
        {/* Pure Black Background */}
        <div className="absolute inset-0 bg-[#171717]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-5 bg-white transition-transform duration-1000 ease-out"
              style={{
                left: `${20 + i * 12}%`,
                top: `${20 + i * 10}%`,
                width: `${1 + i * 0.2}rem`,
                height: `${1 + i * 0.2}rem`,
                ...getMouseTransform()
              }}
            />
          ))}
        </div>



        {/* Main Content Grid */}
        <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">
          
          {/* Left Section - Staffing Agency Content */}
          <div className="flex pt-14 items-center justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-12">
            <div className={`w-full max-w-2xl transition-all duration-1500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              
              {/* Main Heading - Staffing Agency Focus */}
              <h1 
                ref={textRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-12"
              >
                <span className="block text-white mb-4 drop-shadow-lg">
                  Connect With Top
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                  Leading Companies
                </span>
              </h1>

              {/* Description - Staffing Agency Services */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-14 leading-relaxed font-light max-w-xl">
               We revolutionize recruitment with AI-powered matching, {" "}
                <span className="text-white font-medium">professionals</span>
                {" "}connecting exceptional talent with visionary companies in record time..
              </p>

              {/* CTA Buttons - Staffing Specific */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  <span className="relative z-10 flex items-center justify-center text-lg">
                   Contact us
                    <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
              
              </div>
            </div>
          </div>

          {/* Right Section - 3D Model (Completely Static) */}
          <div className="relative flex items-start lg:col-span-1 justify-center min-h-[70vh] lg:min-h-screen pt-8 lg:pt-16  ">
            
            {/* 3D Model Container - No Movement or Rotation */}
            <div className="relative w-full h-full max-w-6xl max-h-[900px] -mt-8 lg:-mt-16">
              
              {/* Spline 3D Model - Completely Static */}
              <Suspense >
                <div className="relative w-full h-full min-h-[650px] lg:min-h-[850px] overflow-hidden">
                  <Spline
                    ref={splineRef}
                    scene="https://prod.spline.design/FLqA5LDtuBPCIaSY/scene.splinecode"
                    className="w-full h-full"
                    onLoad={() => {
                      console.log('3D Scene loaded successfully');
                      setIsLoaded(true);
                    }}
                    onError={(error) => {
                      console.error('Spline loading error:', error);
                    }}
                  />
                  {!isLoaded }
                </div>
              </Suspense>

              {/* Static Glow Effect - No Mouse Interaction */}
              <div className="absolute inset-0 -z-10 -top-16">
                <div className="w-full h-full opacity-15 blur-3xl bg-gradient-radial from-white/40 via-white/20 to-transparent transform scale-125 -translate-y-16" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-4 left-12 w-24 h-24 border border-white/10 rounded-full opacity-30 animate-spin-slow"></div>
              <div className="absolute bottom-16 right-12 w-18 h-18 border border-white/10 rounded-lg rotate-45 animate-pulse opacity-30"></div>
              <div className="absolute top-1/3 left-2 w-20 h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
              <div className="absolute top-1/6 right-2 w-0.5 h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={handleScrollDown}
            className="flex flex-col items-center space-y-3 text-white/60 hover:text-white/80 transition-all duration-300 animate-bounce hover:animate-none cursor-pointer group focus:outline-none"
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              Explore More
            </span>
            <div className="w-6 h-12 border-2 border-white/30 group-hover:border-white/50 rounded-full flex justify-center bg-white/5 backdrop-blur-sm transition-all duration-300">
              <div className="w-1 h-4 bg-white rounded-full mt-2 animate-pulse group-hover:animate-none"></div>
            </div>
          </button>
        </div>
      </section>
      

     

      {/* Enhanced Process Section */}
      <section id="process" className="py-32 bg-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="floating-animation absolute top-20 right-20 w-80 h-80 morphing-shape bg-purple-300 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-600 font-bold text-sm mb-6 shadow-lg">
              <FaCogs className="mr-2" />
              Our Process
              <MdVerified className="ml-2 text-lg" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              How We <span className="gradient-text">Deliver Excellence</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Proven 5-Step Process Combines AI Technology With Human Expertise To Deliver Exceptional Results In Record Time
            </p>
          </div>

          {/* Enhanced Process Steps */}
          <div className="grid lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <div key={step.number} className="process-step text-center animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-8">
                  <div className="step-number w-24 h-24 gradient-bg rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto shadow-2xl transition-all duration-300">
                    {step.number}
                  </div>
                  <div
                    className="absolute -inset-4 gradient-bg rounded-full opacity-20 animate-pulse"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  ></div>
                  {/* Enhanced floating icon */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-50 transition-all duration-300 hover:scale-110">
                    {step.icon}
                  </div>
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                {/* Duration badge */}

              </div>
            ))}
          </div>

          {/* Process CTA */}
          <div className="text-center mt-20 animate-on-scroll">
            <Link href='/about'>
            <button className="gradient-bg text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center mx-auto space-x-3">
              <FaRocket className="text-xl" />
              <span>See Our Process In Action</span>
              <FaArrowRight />
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section id="industries" className="py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-purple-100 rounded-full text-purple-600 font-bold text-sm mb-6 shadow-lg">
              <FaIndustry className="mr-2" />
              Industry Expertise
              <FaTrophy className="ml-2 text-yellow-500" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              <span className="gradient-text">Expert</span> Across Multiple Domains
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Deep Industry Experience And Specialized Recruitment Team
              Deliver Targeted Solutions For Every Domain
            </p>
          </div>

          {/* Enhanced Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="industry-card glass-card rounded-2xl p-8 text-center hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-3">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{industry.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{industry.description}</p>
                {/* Placement stats */}
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Left Content */}
            <div className="space-y-10 animate-on-scroll">
              <div>
                <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-600 font-bold text-sm mb-6 shadow-lg">
                  <FaAward className="mr-2" />
                  About Arihant Staffing
                  <MdVerified className="ml-2 text-lg" />
                </div>
                <h2 className="text-5xl lg:text-6xl font-black mb-8">
                  Why <span className="gradient-text">Leading Companies</span> Trust Us
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                  With 15 years of experience, Arihant Staffing has been a trusted
                  recruitment partner, delivering top talent across industries
                  with speed, accuracy, and reliability. We connect businesses
                  with the right professionals to fuel growth and long-term
                  success.
                </p>
              </div>

              <div className="space-y-8">
                {/* Enhanced Feature Items */}
                {[
                  {
                    icon: <FaBriefcase className="text-white text-xl" />,
                    title: 'Deep Industry Expertise',
                    description: 'Our specialized recruiters understand sector-specific hiring needs — from IT and finance to healthcare and manufacturing.',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: <FaUsers className="text-white text-xl" />,
                    title: 'Vast Talent Network',
                    description: 'Access to a diverse pool of pre-vetted professionals across multiple domains, skill sets, and seniority levels.',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: <FaHandshake className="text-white text-xl" />,
                    title: 'Proven Reliability',
                    description: 'With a 95%+ client retention rate, we pride ourselves on consistent results, transparent processes, and long-term partnerships.',
                    color: 'from-purple-500 to-indigo-500'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 animate-on-scroll hover:translate-x-2 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 hover:scale-110`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Call to Action */}
              <div className="flex justify-center">
                <Link href='contact'>
                <button className="gradient-bg text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl flex items-center space-x-3">
                  <FaCalendar className="text-xl" />
                  <span>Contact Us</span>
                </button>
                </Link>
              </div>
            </div>

            {/* Enhanced Right Content (Stats) */}
            <div className="relative animate-on-scroll">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="about-stat glass-card rounded-3xl p-8 text-center hover-lift">
                    <div className="text-5xl font-black gradient-text mb-3">
                      15+
                    </div>
                    <div className="text-gray-600 font-semibold">
                      Years Of Excellence
                    </div>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
                  </div>

                  <div className="about-stat glass-card rounded-3xl p-8 text-center hover-lift">
                    <div className="text-5xl font-black gradient-text mb-3">
                      50+
                    </div>
                    <div className="text-gray-600 font-semibold">
                      Enterprise Clients
                    </div>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto"></div>
                  </div>
                </div>

                <div className="space-y-8 mt-12">
                  <div className="about-stat glass-card rounded-3xl p-8 text-center hover-lift">
                    <div className="text-5xl font-black gradient-text mb-3">600+</div>
                    <div className="text-gray-600 font-semibold">
                      Successful Placements
                    </div>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto"></div>
                  </div>

                  {/* Awards Badge */}
                  {/* <div className="glass-card rounded-3xl p-6 text-center hover-lift">
                    <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-3" />
                    <div className="text-gray-800 font-bold text-lg mb-2">Industry Leader</div>
                    <div className="text-gray-600 text-sm">Top Recruitment Firm 2023</div>
                  </div> */}
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <FaRocket className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results That Speak Volumes Section */}
      <section className="py-32 stats-section text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="floating-animation absolute top-20 right-20 w-96 h-96 morphing-shape bg-white blur-3xl"></div>
          <div className="floating-animation absolute bottom-20 left-20 w-80 h-80 morphing-shape bg-yellow-300 blur-3xl" style={{ animationDelay: '-4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              Results That <span className="text-yellow-300">Speak Volumes</span>
            </h2>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Our Track Record Of Success Demonstrates Our Commitment To
              Delivering Exceptional Recruitment Outcomes That Transform
              Businesses.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="text-7xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="600" suffix="+" />
              </div>
              <div className="text-2xl font-bold text-purple-100 mb-2">
                Successful Placements
              </div>
              <div className="text-purple-200">Since 2008</div>
            </div>

            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="text-7xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="50" suffix="+" />
              </div>
              <div className="text-2xl font-bold text-purple-100 mb-2">
                Enterprise Clients
              </div>
              <div className="text-purple-200">Worldwide</div>
            </div>

            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="text-7xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="24" suffix="hrs" />
              </div>
              <div className="text-2xl font-bold text-purple-100 mb-2">
                Average Match Time
              </div>
              <div className="text-purple-200">Industry Leading</div>
            </div>

            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="text-7xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="98.5" suffix="%" />
              </div>
              <div className="text-2xl font-bold text-purple-100 mb-2">
                Client Retention Rate
              </div>
              <div className="text-purple-200">Year over Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Experts Behind Your Success */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-100 rounded-full text-yellow-600 font-bold text-sm mb-6 shadow-lg">
              <FaUsers className="mr-2" />
              Meet Our Team
              <FaAward className="ml-2 text-yellow-500" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              The <span className="gradient-text">Experts</span> Behind Your Success
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Team Of Industry Veterans And Recruitment Experts Work
              Tirelessly To Deliver Exceptional Results For Every Client.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="team-member glass-card rounded-3xl p-8 text-center hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`team-avatar w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-xl`}>
                    {member.initials}
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-lg text-purple-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    title="Email"
                  >
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>

                {/* Expertise Badge */}
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-gray-700">
                  <FaTrophy className="w-4 h-4 mr-2 text-yellow-500" />
                  Industry Expert
                </div>
              </div>
            ))}
          </div>

          {/* Team CTA */}
          {/* <div className="text-center mt-16 animate-on-scroll">
            <button className="gradient-bg text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-xl flex items-center mx-auto space-x-3">
              <FaUsers className="text-2xl" />
              <span>Join Our Team</span>
              <FaArrowRight />
            </button>
          </div> */}
        </div>
      </section>
         <section className="py-32 gradient-bg text-white relative overflow-hidden">
      {/* Floating Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-animation absolute top-20 left-20 w-96 h-96 morphing-shape bg-white blur-3xl"></div>
        <div
          className="floating-animation absolute bottom-20 right-20 w-80 h-80 morphing-shape bg-yellow-300 blur-3xl"
          style={{ animationDelay: "-3s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl lg:text-7xl font-black mb-8">
          Ready to Transform Your <br />
          <span className="text-yellow-300">Hiring Process?</span>
        </h2>

        <p className="text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join 50+ companies that trust Arihant Staffing for their staffing
          needs. Experience the future of recruitment with our AI-powered
          platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
          <Link href='/contact'>
          <button className="bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl">
            <i className="fas fa-calendar mr-3"></i>
            Contact Us
          </button>
          </Link>

          <button className="border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
            <i className="fas fa-phone mr-3"></i>
            Call : +1 973-891-7576
          </button>
        </div>
      </div>
    </section>
    
<Footer/>

    </div>
  );
}
