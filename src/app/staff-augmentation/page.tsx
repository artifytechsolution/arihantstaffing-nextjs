// StaffAugmentation.jsx
"use client"
import React, { useEffect, useState } from 'react';
import { 
  FaUserPlus, 
  FaChevronDown, 
  FaUsersCog, 
  FaCode, 
  FaLaptopCode, 
  FaNetworkWired, 
  FaBars, 
  FaStar, 
  FaArrowRight, 
  FaUsers, 
  FaChartBar, 
  FaUserTie, 
  FaCheckCircle, 
  FaTasks, 
  FaBullhorn, 
  FaPaintBrush, 
  FaShieldAlt, 
  FaClock, 
  FaCogs, 
  FaChartLine, 
  FaHeartbeat, 
  FaShoppingCart, 
  FaGraduationCap, 
  FaIndustry, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF 
} from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from 'next/link';

const StaffAugmentation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    // Custom keyframes for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      @keyframes slideInUp {
        0% { opacity: 0; transform: translateY(50px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInScale {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-float-delay-1 {
        animation: float 3s ease-in-out infinite;
        animation-delay: 0.5s;
      }
      .animate-float-delay-2 {
        animation: float 3s ease-in-out infinite;
        animation-delay: 1s;
      }
      .animate-bounce-slow {
        animation: bounce 2s infinite;
      }
      .animate-pulse-slow {
        animation: pulse 3s infinite;
      }
      .banner-shape-1 {
        animation: float 6s ease-in-out infinite;
      }
      .banner-shape-2 {
        animation: float 4s ease-in-out infinite reverse;
      }
      .banner-shape-3 {
        animation: float 5s ease-in-out infinite;
        animation-delay: 1s;
      }
      .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

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

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('shadow-lg');
        } else {
          navbar.classList.remove('shadow-lg');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-800">
      
      {/* Header */}
        <Header />

      {/* Staff Augmentation Banner Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="banner-shape-1 absolute w-96 h-96 -top-48 -right-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-8"></div>
        <div className="banner-shape-2 absolute w-64 h-64 -bottom-32 -left-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-8"></div>
        <div className="banner-shape-3 absolute w-44 h-44 top-2/5 right-1/6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-8"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold animate-on-scroll">
               
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight animate-on-scroll">
                Scale Your Team
                <span className="gradient-text block">Instantly</span>
                with Expert Talent
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-on-scroll">
                Access top-tier professionals on demand. Our staff augmentation services provide skilled experts who integrate seamlessly with your team to accelerate project delivery and business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Link href='contact'>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2">
                  <span>Find Expert Talent Now</span>
                  <FaArrowRight />
                </button>
                </Link>
               
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 animate-on-scroll">
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Skilled Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">48h</div>
                  <div className="text-sm text-gray-600 font-medium">Average Placement Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">97%</div>
                  <div className="text-sm text-gray-600 font-medium">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Staff Augmentation Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Talent Pool Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <FaLaptopCode className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Software Developers</div>
                        <div className="text-sm text-gray-600">Full-stack, Frontend & Backend</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-bold text-lg">850+ Available</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 animate-float-delay-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <FaChartBar className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Data Analysts</div>
                        <div className="text-sm text-gray-600">BI, Analytics & Data Science</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-bold text-lg">420+ Ready</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 animate-float-delay-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <FaUserTie className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Project Managers</div>
                        <div className="text-sm text-gray-600">Agile, Scrum & Waterfall</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-bold text-lg">180+ Certified</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-60 animate-bounce-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500 rounded-full opacity-60 animate-pulse-slow"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-500 rounded-full opacity-60 animate-bounce-slow"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Staff Augmentation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Expert Talent <span className="gradient-text">On Demand</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Access skilled professionals across multiple domains to scale your team instantly and accelerate project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Software Development */}
            <div className="animate-on-scroll bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-3xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <FaCode className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Software Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Experienced developers proficient in modern technologies and frameworks to accelerate your software projects.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Full-Stack & Frontend Developers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Backend & API Development Specialists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mobile App Developers (iOS/Android)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">DevOps & Cloud Engineers</span>
                </li>
              </ul>
            </div>

            {/* Data & Analytics */}
            <div className="animate-on-scroll bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-3xl p-8 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <FaChartBar className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data & Analytics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Data professionals who transform raw data into actionable insights and drive data-driven decision making.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Data Scientists & Machine Learning Engineers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Business Intelligence Analysts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Database Administrators & Engineers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Data Visualization Specialists</span>
                </li>
              </ul>
            </div>

            {/* Project Management */}
            <div className="animate-on-scroll bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 rounded-3xl p-8 hover:border-green-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <FaTasks className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Project Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Certified project managers and scrum masters to ensure successful project delivery and team coordination.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">PMP & Agile Certified Managers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Scrum Masters & Product Owners</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Technical Program Managers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Delivery & Operations Managers</span>
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="animate-on-scroll bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-100 rounded-3xl p-8 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <FaBullhorn className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Digital Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Marketing professionals who drive growth through strategic campaigns and digital marketing expertise.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">SEO/SEM & PPC Specialists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Social Media & Content Marketers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Email Marketing Automation Experts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Growth Hackers & Performance Marketers</span>
                </li>
              </ul>
            </div>

            {/* Design & UX */}
            <div className="animate-on-scroll bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-100 rounded-3xl p-8 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaPaintBrush className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Design & User Experience</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Creative designers and UX experts who craft engaging user experiences and compelling visual designs.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">UI/UX Designers & Researchers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Graphic & Brand Designers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Product Designers & Prototyping Experts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Motion Graphics & Animation Artists</span>
                </li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div className="animate-on-scroll bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">QA professionals who ensure software quality through comprehensive testing and quality assurance processes.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Manual & Automation Test Engineers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Performance & Security Testing Specialists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mobile & Web Application Testers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">QA Leads & Test Managers</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Our Staff Augmentation */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant Staff Augmentation?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Our proven approach and extensive talent network make us the ideal partner for scaling your team efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="animate-on-scroll bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Pre-Vetted Talent Pool</h3>
              <p className="text-gray-600">Rigorously screened professionals with verified skills and experience across multiple domains.</p>
            </div>
            
            <div className="animate-on-scroll bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Rapid Deployment</h3>
              <p className="text-gray-600">Get qualified professionals onboard within 48 hours to meet urgent project requirements.</p>
            </div>
            
            <div className="animate-on-scroll bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaCogs className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Flexible Engagement</h3>
              <p className="text-gray-600">Scale up or down based on project needs with flexible contract terms and engagement models.</p>
            </div>
            
          </div>

          {/* ROI Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gray-800">
                Proven <span className="gradient-text">Business Results</span>
              </h3>
              <p className="text-lg text-gray-600">Our staff augmentation services deliver measurable outcomes for your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">50%</div>
                <div className="text-gray-600 font-semibold">Faster Project Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">65%</div>
                <div className="text-gray-600 font-semibold">Cost Reduction vs Full-time Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">90%</div>
                <div className="text-gray-600 font-semibold">First Week Productivity Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">48h</div>
                <div className="text-gray-600 font-semibold">Average Talent Deployment Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Augmentation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">Augmentation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A streamlined approach that gets you the right talent quickly and efficiently to meet your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Requirement Analysis</h3>
              <p className="text-gray-600 leading-relaxed">Understand your specific skill requirements, project timeline, and team integration needs through detailed consultation.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-bounce"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Talent Matching</h3>
              <p className="text-gray-600 leading-relaxed">Identify and shortlist pre-vetted professionals from our talent pool who match your technical and cultural requirements.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Interview & Selection</h3>
              <p className="text-gray-600 leading-relaxed">Facilitate interviews with selected candidates and support the final selection process to ensure the perfect fit.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Seamless Integration</h3>
              <p className="text-gray-600 leading-relaxed">Onboard selected professionals with comprehensive integration support and ongoing performance management.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 animate-on-scroll text-gray-800">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Our staff augmentation solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaLaptopCode className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Technology</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Finance</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaHeartbeat className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Healthcare</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaShoppingCart className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">E-commerce</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Education</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaIndustry className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Manufacturing</h4>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              Ready to Scale Your <span className="text-yellow-300">Team?</span>
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Get access to top-tier professionals who can start contributing to your projects immediately. Let's discuss your staffing needs and find the perfect talent match.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href='contact'>
              <button className="bg-white text-blue-700 px-12 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                Get Expert Talent Now
              </button>
              </Link>
            
            </div>
            
            {/* Contact Info */}
            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <FaPhone className="text-2xl text-yellow-300" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="opacity-80">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaEnvelope className="text-2xl text-yellow-300" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="opacity-80">staffing@arihantstaffing.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaUsers className="text-2xl text-yellow-300" />
                <div>
                  <div className="font-semibold">View Talent</div>
                  <div className="opacity-80">Browse Professionals</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
 <Footer/>
    </div>
  );
};

export default StaffAugmentation;
