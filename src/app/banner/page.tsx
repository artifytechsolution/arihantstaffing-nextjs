"use client";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineLoader />
});

function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <div className="absolute inset-2 w-8 h-8 border-2 border-violet-400/30 border-b-violet-400 rounded-full animate-spin animate-reverse" 
             style={{ animationDuration: '1.5s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ backgroundRef, textRef }) {
  const splineRef = useRef();
  const heroRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
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

  return (
    <>
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-black scroll-smooth"
    >
      {/* Pure Black Background */}
      <div className="absolute inset-0 bg-black"></div>

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
            }} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

        {/* Left Section - Staffing Agency Content */}
        <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-12">
          <div className={`w-full max-w-2xl transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 mb-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-lg shadow-lg">
              <div className="w-2.5 h-2.5 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Premier Staffing Solutions
              </span>
            </div>

            {/* Main Heading - Staffing Agency Focus */}
            <h1
              ref={textRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-12"
            >
              <span className="block text-white mb-4 drop-shadow-lg">
                Connect Top
              </span>

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Leading Companies
              </span>
            </h1>

            {/* Description - Staffing Agency Services */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-14 leading-relaxed font-light max-w-xl">
              We bridge the gap between exceptional{" "}
              <span className="text-white font-medium">professionals</span>
              {" "}and innovative companies, creating partnerships that drive success and growth.
            </p>

            {/* CTA Buttons - Staffing Specific */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link
                href="/find-talent"
                className="group relative px-10 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <span className="relative z-10 flex items-center justify-center text-lg">
                  Find Talent
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/find-jobs"
                className="group px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                <span className="flex items-center justify-center text-lg">
                  Find Jobs
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats Section - Staffing Metrics */}

          </div>
        </div>

        {/* Right Section - 3D Model (Completely Static) */}
        <div className="relative flex items-start justify-center min-h-[70vh] lg:min-h-screen pt-8 lg:pt-16 p-4 lg:p-6">

          {/* 3D Model Container - No Movement or Rotation */}
          <div className="relative w-full h-full max-w-6xl max-h-[900px] -mt-8 lg:-mt-16">

            {/* Spline 3D Model - Completely Static */}
            <Suspense fallback={<SplineLoader />}>
              <div className="relative w-full h-full min-h-[650px] lg:min-h-[850px] overflow-hidden">
                <Spline
                  ref={splineRef}
                  scene="https://prod.spline.design/duzoI3LlQTc86Ia5/scene.splinecode"
                  className="w-full h-full"
                  onLoad={() => {
                    console.log('3D Scene loaded successfully');
                    setIsLoaded(true);
                  } }
                  onError={(error) => {
                    console.error('Spline loading error:', error);
                  } } />
                {!isLoaded && <SplineLoader />}
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
     
      <section
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden bg-black scroll-smooth"
      >

        <div className="absolute inset-0 bg-black"></div>


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
              }} />
          ))}
        </div>



        {/* Main Content Grid */}
        <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

          {/* Left Section - Staffing Agency Content */}
          <div className="flex pt-14 items-center justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-12">
            <div className={`w-full max-w-2xl transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

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
          <div className="relative flex items-start justify-center min-h-[70vh] lg:min-h-screen pt-8 lg:pt-16 p-4 lg:p-6">

            {/* 3D Model Container - No Movement or Rotation */}
            <div className="relative w-full h-full max-w-6xl max-h-[900px] -mt-8 lg:-mt-16">

              {/* Spline 3D Model - Completely Static */}
              <Suspense>
                <div className="relative w-full h-full min-h-[650px] lg:min-h-[850px] overflow-hidden">
                  <Spline
                    ref={splineRef}
                    scene="https://prod.spline.design/duzoI3LlQTc86Ia5/scene.splinecode"
                    className="w-full h-full"
                    onLoad={() => {
                      console.log('3D Scene loaded successfully');
                      setIsLoaded(true);
                    } }
                    onError={(error) => {
                      console.error('Spline loading error:', error);
                    } } />
                  {!isLoaded}
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
      </>
  );
}
