import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Shield, TrendingUp, Users, Award, Clock, CheckCircle, BarChart3, Target, Zap, Star, Phone, Mail, Calendar, FileText } from 'lucide-react'
import slides from '../data/slides'

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide()
      } else if (event.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100

  return (
    <div className="h-screen bg-gradient-to-br from-insurance-light to-white flex flex-col">
      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-insurance-navy progress-bar"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 pb-24 md:pb-8">
        <div className="w-full max-w-6xl h-full relative">
          {/* Slide Content */}
          <div 
            className="slide-content h-full flex flex-col justify-center cursor-pointer px-2 md:px-0"
            onClick={nextSlide}
          >
            {slides[currentSlide]}
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:flex md:absolute md:bottom-8 md:left-8 items-center space-x-4 z-10">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-insurance-light"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-insurance-navy" />
            </button>
            
            <span className="text-insurance-gray font-medium text-base">
              {currentSlide + 1} / {totalSlides}
            </span>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-insurance-light"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-6 h-6 text-insurance-navy" />
            </button>
          </div>

          {/* Mobile Slide Counter */}
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-white rounded-lg shadow-lg z-10">
            <div className="flex items-center space-x-4 px-4 py-2">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-insurance-light rounded-lg transition-colors"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5 text-insurance-navy" />
              </button>
              
              <span className="text-insurance-gray font-medium text-sm whitespace-nowrap">
                {currentSlide + 1} / {totalSlides}
              </span>
              
              <button
                onClick={nextSlide}
                className="p-2 hover:bg-insurance-light rounded-lg transition-colors"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="w-5 h-5 text-insurance-navy" />
              </button>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="hidden md:flex md:absolute md:bottom-8 md:right-8 space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-insurance-navy' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation