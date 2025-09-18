"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCrown, FaRocket, FaPlayCircle, FaShieldAlt, FaAward, FaUsers,
  FaCompass, FaTelescope, FaGem, FaSeedling, FaGlobe, FaBrain,
  FaUserTie, FaLaptopCode, FaChartLine, FaMedal, FaTrophy, FaStar,
  FaCertificate, FaLightbulb, FaLeaf, FaHeart, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaCalendarAlt, FaUserPlus, FaUsersCog, FaCode,
  FaNetworkWired, FaBriefcase, FaHandshake, FaCheckCircle, FaQuoteRight,
  FaBuilding, FaCheck, FaBars, FaTimes, FaChevronDown, FaArrowRight
} from 'react-icons/fa';
import { 
  FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaGithub 
} from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from 'next/link';

const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Enhanced Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Array.from(entry.target.parentNode?.children || []).indexOf(entry.target) * 150;
          
          setTimeout(() => {
            entry.target.classList.add('animate-in');
            
            // Counter animation
            if (entry.target.classList.contains('counter-container')) {
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
              });
            }
          }, delay);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stats-card, .team-card, .culture-card, .award-card');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth counter animation
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 80;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
    }, 20);
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#dna-section');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Enhanced CSS with better animations and responsive design */}
      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .gradient-warm { 
          background: linear-gradient(135deg, #f97316 0%, #dc2626 100%); 
        }
        .gradient-text-warm { 
          background: linear-gradient(135deg, #f59e0b 0%, #dc2626 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }
        .gradient-gold {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        }
        
        /* Enhanced Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-on-scroll-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .animate-on-scroll-right {
          opacity: 0;
          transform: translateX(40px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .animate-on-scroll-scale {
          opacity: 0;
          transform: scale(0.9) rotate(-3deg);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll-scale.animate-in {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        
        .team-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .team-card:hover::before {
          left: 100%;
        }
        .team-card:hover {
          transform: translateY(-10px) scale(1.03);
        }
        
        .stats-card, .team-card, .culture-card, .award-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .stats-card.animate-in, .team-card.animate-in, .culture-card.animate-in, .award-card.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        /* Enhanced Banner Animations */
        .text-animate-1 {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
          opacity: 0;
        }
        
        .text-animate-2 {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
          opacity: 0;
        }
        
        .text-animate-3 {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards;
          opacity: 0;
        }
        
        .text-animate-4 {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s forwards;
          opacity: 0;
        }
        
        .text-animate-5 {
          animation: slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.8s forwards;
          opacity: 0;
        }
        
        .stats-animate {
          animation: scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.2s forwards;
          opacity: 0;
        }
        
        .typewriter-text {
          overflow: hidden;
          border-right: 2px solid #f97316;
          white-space: nowrap;
          animation: typewriter 2.5s steps(15) 0.8s forwards, blink 1s linear infinite 3.3s;
          width: 0;
        }
        
        /* Floating Shapes */
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .shape {
          position: absolute;
          opacity: 0.08;
        }
        
        .shape:nth-child(1) {
          top: 15%;
          left: 8%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, #f97316 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite, morphBounce 4s ease-in-out infinite;
        }
        
        .shape:nth-child(2) {
          top: 70%;
          right: 10%;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #fbbf24 0%, transparent 70%);
          animation: float 10s ease-in-out infinite 2s, morphBounce 6s ease-in-out infinite 1s;
        }
        
        .shape:nth-child(3) {
          bottom: 20%;
          left: 15%;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, #dc2626 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite 4s, morphBounce 5s ease-in-out infinite 2s;
        }
        
        /* Timeline Styles */
        .timeline-line {
          position: relative;
          padding-left: 40px;
        }
        
        .timeline-line::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: -20px;
          width: 3px;
          background: linear-gradient(to bottom, #f97316, #fbbf24, #dc2626);
          border-radius: 2px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }
        
        .timeline-item::after {
          content: '';
          position: absolute;
          left: -28px;
          top: 15px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(45deg, #f97316, #fbbf24);
          border: 3px solid white;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2);
          z-index: 10;
        }
        
        /* Enhanced Button Styles */
        .btn-primary {
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        /* Animation Keyframes */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideFromLeft {
          0% { opacity: 0; transform: translateX(-50px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes slideFromRight {
          0% { opacity: 0; transform: translateX(50px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes typewriter {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #f97316; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @keyframes morphBounce {
          0%, 100% { border-radius: 50% 50% 50% 50%; }
          25% { border-radius: 60% 40% 60% 40%; }
          50% { border-radius: 40% 60% 40% 60%; }
          75% { border-radius: 50% 50% 60% 40%; }
        }
        
        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .typewriter-text {
            border-right: none;
            animation: fadeInUp 0.8s ease-out 0.8s forwards;
            white-space: normal;
            width: auto;
            overflow: visible;
          }
        }
        
        @media (max-width: 768px) {
          .text-5xl {
            font-size: 2.5rem;
          }
          
          .lg\\:text-6xl {
            font-size: 3rem;
          }
          
          .timeline-line {
            padding-left: 20px;
          }
          
          .timeline-line::before {
            left: 8px;
          }
          
          .timeline-item::after {
            left: -4px;
            width: 12px;
            height: 12px;
          }
        }
      `}</style>

      <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 min-h-screen text-gray-800 font-inter">
        
        {/* Original Header - Kept Intact */}
      <Header />


        
        {/* Enhanced Hero Banner Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Advanced Floating Background Shapes */}
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          
          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
              
              {/* Left Content - Main Hero Text */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-8">
                
                {/* Enhanced Animated Badge */}
                <div className="inline-flex items-center space-x-3 glass-morphism px-6 py-3 rounded-full text-animate-1 shadow-lg mx-auto lg:mx-0">
                  
                </div>
                
                {/* Main Heading with Advanced Animation */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-800">
                    <span className="block text-animate-2">We Don't Just</span>
                    <span className="gradient-text-warm block typewriter-text">Find Talent</span>
                    <span className="block text-animate-3" style={{animationDelay: '1.2s'}}>We Architect</span>
                    <span className="block text-animate-3" style={{animationDelay: '1.4s'}}>Success Stories</span>
                  </h1>
                </div>
                
                {/* Enhanced Subtitle with Staggered Animation */}
                <div className="text-animate-4 max-w-2xl mx-auto lg:mx-0 space-y-4">
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
                    Every placement is a masterpiece. Every partnership is a journey.
                  </p>
                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                    We connect extraordinary talent with visionary organizations through innovation, understanding, and unwavering commitment to excellence.
                  </p>
                </div>
                
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 text-animate-5 justify-center lg:justify-start">
                  <Link href='contact'>
                  <button className="group btn-primary gradient-warm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 sm:space-x-3">
                    <FaRocket className="text-sm sm:text-lg group-hover:animate-bounce" />
                    <span>contact us</span>
                    <FaArrowRight className="text-xs sm:text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                  {/* <button className="group glass-morphism text-orange-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 backdrop-blur-xl border border-orange-200 hover:border-orange-300">
                    <FaPlayCircle className="text-sm sm:text-lg group-hover:text-orange-800 transition-colors" />
                    <span>Watch Our Story</span>
                  </button> */}
                </div>
                
                {/* Enhanced Trust Indicators */}
            
              </div>
              
              {/* Right Content - Enhanced Stats Card */}
              <div className="lg:col-span-5 flex items-center justify-center mt-8 lg:mt-0">
                <div className="glass-morphism rounded-3xl p-6 sm:p-8 space-y-6 sm:space-y-8 w-full max-w-md stats-animate shadow-2xl backdrop-blur-2xl border-orange-200/50 counter-container" style={{animationDelay: '2.2s'}}>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-800">Our Impact in Numbers</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Decade of measurable success</p>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-warm rounded-2xl flex items-center justify-center shadow-lg transform rotate-[-10deg]">
                        <FaBriefcase className="text-xl sm:text-3xl text-white" />
                      </div>
                      <div>
                        <p className="text-2xl sm:text-4xl font-black text-gray-800">
                          <span className="counter" data-target="8500">500</span>+
                        </p>
                        <p className="text-gray-600 font-semibold text-sm sm:text-base">Careers Transformed</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-gold rounded-2xl flex items-center justify-center shadow-lg transform rotate-[8deg]">
                        <FaHandshake className="text-xl sm:text-3xl text-white" />
                      </div>
                      <div>
                        <p className="text-2xl sm:text-4xl font-black text-gray-800">
                          <span className="counter" data-target="0">300</span>+
                        </p>
                        <p className="text-gray-600 font-semibold text-sm sm:text-base">Client Partners</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-[-5deg]">
                        <FaCheckCircle className="text-xl sm:text-3xl text-white" />
                      </div>
                      <div>
                        <p className="text-2xl sm:text-4xl font-black text-gray-800">
                          <span className="counter" data-target="99">90</span>%
                        </p>
                        <p className="text-gray-600 font-semibold text-sm sm:text-base">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div 
              className="flex flex-col items-center space-y-2 cursor-pointer group animate-bounce"
              onClick={scrollToNext}
            >
              <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center group-hover:border-orange-600 transition-colors">
                <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 group-hover:bg-orange-600 transition-colors"></div>
              </div>
              <span className="text-xs text-gray-500 font-medium group-hover:text-gray-600 transition-colors">Scroll Down</span>
            </div>
          </div>
          
          {/* Enhanced Floating Action Elements */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden xl:block">
            <div className="space-y-4">
              <button className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                <FaLinkedinIn className="text-orange-600 group-hover:text-orange-700 transition-colors" />
              </button>
              <button className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                <FaTwitter className="text-orange-600 group-hover:text-orange-700 transition-colors" />
              </button>
              <button className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                <FaEnvelope className="text-orange-600 group-hover:text-orange-700 transition-colors" />
              </button>
            </div>
          </div>
          
        </section>
        
        {/* Company DNA Section */}
        <section id="dna-section" className="py-16 sm:py-20 lg:py-24 bg-white/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 animate-on-scroll text-gray-800">
                Our <span className="gradient-text-warm">DNA</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll leading-relaxed">
                The fundamental elements that shape our identity, guide our decisions, and fuel our passion for creating extraordinary connections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Mission */}
              <div className="culture-card card-hover glass-morphism rounded-2xl p-6 sm:p-8 text-center backdrop-blur-xl">
                <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                  <FaCompass className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-800">Mission</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  To revolutionize the staffing ecosystem by creating perfect synergies between extraordinary talent and visionary organizations.
                </p>
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div className="w-16 h-1 gradient-warm rounded-full"></div>
                </div>
              </div>

              {/* Vision */}
              <div className="culture-card card-hover glass-morphism rounded-2xl p-6 sm:p-8 text-center backdrop-blur-xl">
                <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                  <FaAward className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-800">Vision</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  To be the world's most trusted talent architect, where every professional discovers their dream career and every organization transforms.
                </p>
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div className="w-16 h-1 gradient-gold rounded-full"></div>
                </div>
              </div>
              
              {/* Values */}
              <div className="culture-card card-hover glass-morphism rounded-2xl p-6 sm:p-8 text-center backdrop-blur-xl">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                  <FaGem className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-800">Values</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Authenticity, Excellence, Innovation, and Partnership. We build transparent relationships and deliver exceptional results.
                </p>
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Story & Timeline */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-100 via-amber-50 to-red-100 relative overflow-hidden">
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 animate-on-scroll text-gray-800">
                The <span className="gradient-text-warm">Arihant Story</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto animate-on-scroll leading-relaxed">
                A decade of revolutionary innovation, transformative partnerships, and unwavering dedication to reshaping the future of work.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              
              {/* Story Content */}
              <div className="animate-on-scroll">
                <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-gray-800">The Genesis</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="glass-morphism p-4 sm:p-6 rounded-2xl backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 gradient-text-warm">The Spark of Innovation</h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      In 2015, three visionary entrepreneurs witnessed the disconnect between exceptional talent and forward-thinking organizations. They envisioned a world where technology and human intuition work in perfect harmony.
                    </p>
                  </div>
                  
                  <div className="glass-morphism p-4 sm:p-6 rounded-2xl backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 gradient-text-warm">The Evolution</h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      From a humble startup to a global powerhouse, our journey has been marked by continuous innovation and strategic partnerships. We've transformed from placing individuals to architecting entire organizational cultures.
                    </p>
                  </div>
                  
                  <div className="glass-morphism p-4 sm:p-6 rounded-2xl backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 gradient-text-warm">The Impact</h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      Today, we're catalysts of transformation, architects of success stories, and pioneers of the future workforce. Every placement creates a ripple effect of innovation and growth.
                    </p>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-orange-200">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-warm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FaQuoteRight className="text-lg sm:text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold text-base sm:text-lg italic mb-2 sm:mb-3 leading-relaxed">
                        "Every great success story begins with a perfect connection. We don't just match skills to roles — we align dreams with opportunities."
                      </p>
                      <p className="text-orange-600 font-bold text-sm sm:text-base">- Arihant Leadership Team</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="animate-on-scroll">
                <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-gray-800">Journey Milestones</h3>
                <div className="timeline-line">
                  
                  <div className="timeline-item">
                    <div className="glass-morphism p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 group backdrop-blur-xl">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="gradient-warm text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-md">2015</span>
                        <h4 className="font-black text-gray-800 text-base sm:text-lg group-hover:text-orange-600 transition-colors">The Foundation</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Three industry pioneers unite with a revolutionary vision to transform staffing through perfect harmony of technology and human insight.</p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <FaSeedling className="text-orange-500 text-sm" />
                        <span className="text-orange-600 font-semibold text-xs sm:text-sm">The Beginning of Excellence</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="glass-morphism p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 group backdrop-blur-xl">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="gradient-gold text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-md">2017</span>
                        <h4 className="font-black text-gray-800 text-base sm:text-lg group-hover:text-amber-600 transition-colors">First Breakthrough</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Achieved our first major milestone with 1000+ successful placements and forged partnerships with industry leaders across multiple sectors.</p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <FaRocket className="text-amber-500 text-sm" />
                        <span className="text-amber-600 font-semibold text-xs sm:text-sm">Rapid Growth Phase</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="glass-morphism p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 group backdrop-blur-xl">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-md">2019</span>
                        <h4 className="font-black text-gray-800 text-base sm:text-lg group-hover:text-red-600 transition-colors">Global Expansion</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Launched international operations across 25 countries, establishing regional centers of excellence and cultural expertise.</p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <FaGlobe className="text-red-500 text-sm" />
                        <span className="text-red-600 font-semibold text-xs sm:text-sm">Worldwide Presence</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="glass-morphism p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 group backdrop-blur-xl">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-md">2022</span>
                        <h4 className="font-black text-gray-800 text-base sm:text-lg group-hover:text-green-600 transition-colors">AI Revolution</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Pioneered industry-first AI-powered matching algorithms, achieving 99.2% accuracy and reducing placement time by 75%.</p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <FaBrain className="text-green-500 text-sm" />
                        <span className="text-green-600 font-semibold text-xs sm:text-sm">Technology Leadership</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="glass-morphism p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 group backdrop-blur-xl border border-orange-200 shadow-2xl">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-md">2025</span>
                        <h4 className="font-black text-gray-800 text-base sm:text-lg group-hover:text-orange-600 transition-colors">Industry Pinnacle</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Recognized as the global leader with 8500+ career transformations, 1200+ client partners, and 99% success rate.</p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <FaCrown className="text-orange-500 text-sm animate-pulse" />
                        <span className="text-orange-600 font-semibold text-xs sm:text-sm">Market Leadership</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 animate-on-scroll text-gray-800">
                Meet Our <span className="gradient-text-warm">Visionaries</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll leading-relaxed">
                The brilliant minds behind our success, driving innovation, excellence, and transformation across the global staffing landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              
              {/* CEO */}
              <div className="team-card glass-morphism rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl backdrop-blur-xl">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 gradient-warm rounded-full mx-auto flex items-center justify-center shadow-xl">
                    <FaLaptopCode className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                    <FaCrown className="text-yellow-800 text-xs sm:text-sm animate-pulse" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-2 text-gray-800">Nishant Panchamiya</h3>
                <p className="text-orange-600 font-bold mb-3 sm:mb-4 text-sm sm:text-base">Chief Executive Officer</p>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-6">
                  Visionary leader with 20+ years transforming the staffing industry. Pioneer of AI-driven talent solutions and advocate for workplace innovation.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  
                  <div className="flex justify-center space-x-2 sm:space-x-3">
                    <button className="w-6 h-6 sm:w-8 sm:h-8 gradient-warm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <FaLinkedinIn className="text-white text-xs" />
                    </button>
                    <button className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <FaTwitter className="text-white text-xs" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTO */}
              <div className="team-card glass-morphism rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl backdrop-blur-xl">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto flex items-center justify-center shadow-xl">
                    <FaLaptopCode className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <FaBrain className="text-green-800 text-xs sm:text-sm animate-pulse" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-2 text-gray-800">Dhaval Panchamiya</h3>
                <p className="text-purple-600 font-bold mb-3 sm:mb-4 text-sm sm:text-base">Director Of Recruiting Operations</p>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-6">
                  Technology innovator and AI pioneer with 15+ years creating next-generation HR solutions. Architect of our revolutionary matching algorithms.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  
                  <div className="flex justify-center space-x-2 sm:space-x-3">
                    <button className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <FaLinkedinIn className="text-white text-xs" />
                    </button>
                    <button className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <FaGithub className="text-white text-xs" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* COO */}
             

            </div>
          </div>
        </section>
        
        {/* Company Culture */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 relative overflow-hidden">
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 animate-on-scroll text-gray-800">
                Our <span className="gradient-text-warm">Culture</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll leading-relaxed">
                The heartbeat of our organization — a vibrant ecosystem where innovation thrives, excellence is celebrated, and every team member reaches their potential.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              
              <div className="culture-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-warm rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaLightbulb className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Innovation First</h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">We embrace cutting-edge solutions and creative thinking to solve tomorrow's challenges today.</p>
              </div>

              <div className="culture-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaUsers className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Team Excellence</h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Collaborative spirit and mutual respect form the foundation of our extraordinary achievements.</p>
              </div>

              <div className="culture-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaLeaf className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Growth Mindset</h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Continuous learning and development drive personal and professional transformation.</p>
              </div>

              <div className="culture-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaHeart className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Purpose Driven</h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Every action is guided by our commitment to creating meaningful impact in people's lives.</p>
              </div>

            </div>

            {/* Culture Showcase */}
            <div className="glass-morphism rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-xl shadow-xl animate-on-scroll">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 gradient-text-warm">Life at Arihant</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-warm rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Flexible work arrangements and remote-first culture</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-gold rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Comprehensive learning and development programs</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Innovation labs and entrepreneurship support</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Global mobility and cross-cultural experiences</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-48 sm:h-64 glass-morphism rounded-2xl flex items-center justify-center backdrop-blur-xl">
                    <div className="text-center">
                      <FaBuilding className="text-4xl sm:text-6xl text-orange-500 mb-3 sm:mb-4 mx-auto animate-pulse" />
                      <p className="text-lg sm:text-xl font-bold text-gray-800">Modern Workspace</p>
                      <p className="text-gray-600 text-sm sm:text-base">Designed for Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Awards & Recognition */}
        {/* <section className="py-16 sm:py-20 lg:py-24 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 animate-on-scroll text-gray-800">
                Awards & <span className="gradient-text-warm">Recognition</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll leading-relaxed">
                Industry accolades and recognition that validate our commitment to excellence, innovation, and transformative impact.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              <div className="award-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaTrophy className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 mb-2 text-sm sm:text-base">Best Staffing Agency</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">Global Excellence Awards</p>
                <p className="text-orange-600 font-bold text-sm sm:text-base">2024</p>
              </div>

              <div className="award-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaMedal className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 mb-2 text-sm sm:text-base">Innovation Leader</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">HR Tech Innovation Summit</p>
                <p className="text-blue-600 font-bold text-sm sm:text-base">2023</p>
              </div>
              
              <div className="award-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaStar className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 mb-2 text-sm sm:text-base">Client Choice Award</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">Customer Excellence</p>
                <p className="text-green-600 font-bold text-sm sm:text-base">2024</p>
              </div>

              <div className="award-card glass-morphism rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <FaCertificate className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 mb-2 text-sm sm:text-base">ISO Certified</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">Quality Management</p>
                <p className="text-purple-600 font-bold text-sm sm:text-base">2023</p>
              </div>

            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="floating-shapes">
              <div className="shape opacity-15"></div>
              <div className="shape opacity-15"></div>
              <div className="shape opacity-15"></div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Ready to Create Your <span className="text-yellow-300">Success Story?</span>
              </h2>
              <p className="text-base sm:text-xl mb-8 sm:mb-12 leading-relaxed opacity-95 max-w-3xl mx-auto">
                Join the thousands of professionals and hundreds of companies who've discovered the transformative power of perfect connections. Let's architect your future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
                <Link href='contact'>
                <button className="group btn-primary bg-white text-orange-700 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-black hover:scale-105 transition-all duration-300 shadow-xl text-base sm:text-lg flex items-center space-x-2 mx-auto sm:mx-0">
                  <FaRocket className="text-sm sm:text-lg group-hover:animate-bounce" />
                  <span>Begin Your Journey</span>
                </button>
                </Link>
                
              </div>
              
              {/* Enhanced Contact Info */}
              
            </div>
          </div>
        </section>
        
        {/* Original Footer - Kept Intact */}
       <Footer/>
      </div>
    </>
  );
};

export default AboutUs;
