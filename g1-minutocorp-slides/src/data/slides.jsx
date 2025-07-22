import React from 'react'
import { Shield, ShieldCheck, Award, Clock, CheckCircle, BarChart3, Target, Zap, Star, Phone, Mail, Calendar, FileText, DollarSign, Heart, Umbrella, Car, ChevronRight } from 'lucide-react'

const slides = [
  // Slide 1: Title Slide
  <div className="text-center fade-in">
    <div className="mb-8">
      <Shield className="w-24 h-24 text-insurance-navy mx-auto mb-6" />
    </div>
    <h1 className="text-5xl md:text-6xl font-bold text-insurance-navy mb-6 leading-tight">
      Renovación Plan de Asistencia Médica
    </h1>
    <p className="text-xl md:text-2xl text-insurance-gray mb-8">
      Propuesta de Renovación MINUTOCORP
    </p>
    <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
      <p className="text-base md:text-lg text-insurance-gray">
        <i className="fas fa-calendar-alt mr-2"></i>2025 | <i className="fas fa-users ml-4 mr-2"></i>Operativos
      </p>
    </div>
  </div>,

  // Slide 2: Executive Summary
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Propuesta de renovación</h2>
    <div className="flex justify-center">
      <div className="bg-white p-12 rounded-2xl shadow-lg max-w-2xl w-full">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-insurance-blue mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-insurance-navy mb-2">Plan Corporativo</h3>
          <div className="text-4xl font-bold text-insurance-blue">$4,200</div>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Tipo de Plan:</span>
            <span className="text-lg text-insurance-gray">Corporativo</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Cobertura:</span>
            <span className="text-lg text-insurance-gray">Nacional</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Monto máximo de cobertura:</span>
            <span className="text-lg text-insurance-gray">$4,200</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Tipo de cobertura:</span>
            <span className="text-lg text-insurance-gray">Por incapacidad por persona</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
            <span className="text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Tipo de deducible:</span>
            <span className="text-lg text-insurance-gray">Anual por persona</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
            <span className="text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Red especial del plan:</span>
            <span className="text-lg text-insurance-gray">Red Total</span>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 3: Key Benefits
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Características Principales del Plan</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <DollarSign className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Deducible</h3>
        <p className="text-insurance-gray">$100</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <ShieldCheck className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Cobertura Hospitalaria</h3>
        <p className="text-insurance-gray">$4,200</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <ShieldCheck className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Cobertura Ambulatoria</h3>
        <p className="text-insurance-gray">$4,200</p>
      </div>
    </div>
  </div>,

  // Slide 3.1: Key Benefits
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Características Principales del Plan</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <DollarSign className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Preexistencias</h3>
        <p className="text-insurance-gray">$4,200</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <ShieldCheck className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Carencia Hospitalaria</h3>
        <p className="text-insurance-gray">90 días</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <ShieldCheck className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Carencia Hospitalaria</h3>
        <p className="text-insurance-gray">30 días</p>
      </div>
    </div>
  </div>,

  // Slide 4: Renewal Statistics
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">2024 Renewal Success</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-4xl font-bold text-insurance-blue mb-2">94%</div>
        <p className="text-insurance-gray font-medium">Retention Rate</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-4xl font-bold text-insurance-blue mb-2">87%</div>
        <p className="text-insurance-gray font-medium">Early Renewals</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-4xl font-bold text-insurance-blue mb-2">15%</div>
        <p className="text-insurance-gray font-medium">Cost Savings</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-4xl font-bold text-insurance-blue mb-2">24hr</div>
        <p className="text-insurance-gray font-medium">Processing Time</p>
      </div>
    </div>
  </div>,

  // Slide 5: Coverage Types
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Coverage Options</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <Heart className="w-12 h-12 text-insurance-blue mb-6" />
        <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Health Insurance</h3>
        <ul className="text-insurance-gray space-y-3">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Comprehensive medical coverage</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Dental and vision benefits</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Wellness programs included</li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <Car className="w-12 h-12 text-insurance-blue mb-6" />
        <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Auto Insurance</h3>
        <ul className="text-insurance-gray space-y-3">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Full collision coverage</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Roadside assistance 24/7</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Multi-vehicle discounts</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 6: Digital Experience
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Digital Innovation</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <Zap className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Instant Quotes</h3>
          <p className="text-insurance-gray">Get renewal quotes in under 60 seconds</p>
        </div>
        <div className="text-center">
          <Target className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Smart Recommendations</h3>
          <p className="text-insurance-gray">AI-powered coverage optimization</p>
        </div>
        <div className="text-center">
          <BarChart3 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Real-time Analytics</h3>
          <p className="text-insurance-gray">Track your policy performance</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 7: Customer Testimonials
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center mb-6">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-insurance-gray italic text-lg mb-4">
          "The renewal process was seamless and the customer service exceeded our expectations. Highly recommend!"
        </p>
        <p className="text-insurance-navy font-semibold">- Sarah Johnson, Business Owner</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center mb-6">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-insurance-gray italic text-lg mb-4">
          "Saved 20% on our premium while getting better coverage. The digital tools make managing policies so easy."
        </p>
        <p className="text-insurance-navy font-semibold">- Michael Chen, Family Plan</p>
      </div>
    </div>
  </div>,

  // Slide 8: Renewal Process
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Simple Renewal Process</h2>
    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-insurance-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
        <h3 className="text-xl font-semibold text-insurance-navy mb-2">Review Coverage</h3>
        <p className="text-insurance-gray">Assess your current needs and coverage</p>
      </div>
      
      <ChevronRight className="w-8 h-8 text-insurance-gray hidden md:block" />
      
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-insurance-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
        <h3 className="text-xl font-semibold text-insurance-navy mb-2">Get Quote</h3>
        <p className="text-insurance-gray">Receive personalized renewal pricing</p>
      </div>
      
      <ChevronRight className="w-8 h-8 text-insurance-gray hidden md:block" />
      
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-insurance-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
        <h3 className="text-xl font-semibold text-insurance-navy mb-2">Approve & Sign</h3>
        <p className="text-insurance-gray">Digital signature and instant activation</p>
      </div>
    </div>
  </div>,

  // Slide 9: Risk Management
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Comprehensive Risk Management</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Proactive Protection</h3>
          <ul className="space-y-4 text-insurance-gray">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Regular risk assessments and policy updates</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Industry-specific coverage recommendations</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Preventive loss control programs</span>
            </li>
          </ul>
        </div>
        <div>
          <Umbrella className="w-24 h-24 text-insurance-blue mx-auto" />
        </div>
      </div>
    </div>
  </div>,

  // Slide 10: Claims Excellence
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Claims Excellence</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <Clock className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Fast Processing</h3>
        <p className="text-3xl font-bold text-insurance-blue mb-2">24hrs</p>
        <p className="text-insurance-gray">Average claim resolution time</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <Award className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">High Satisfaction</h3>
        <p className="text-3xl font-bold text-insurance-blue mb-2">98%</p>
        <p className="text-insurance-gray">Client satisfaction rate</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <Phone className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">24/7 Support</h3>
        <p className="text-3xl font-bold text-insurance-blue mb-2">365</p>
        <p className="text-insurance-gray">Days a year availability</p>
      </div>
    </div>
  </div>,

  // Slide 11: Competitive Advantages
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Why Choose Us</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-insurance-blue rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold text-insurance-navy mb-2">Industry Expertise</h3>
              <p className="text-insurance-gray">Over 50 years of combined experience in risk management</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-insurance-blue rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold text-insurance-navy mb-2">Financial Stability</h3>
              <p className="text-insurance-gray">A+ rating from leading financial institutions</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-insurance-blue rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold text-insurance-navy mb-2">Technology Leadership</h3>
              <p className="text-insurance-gray">Cutting-edge digital platforms and mobile solutions</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Shield className="w-32 h-32 text-insurance-blue" />
        </div>
      </div>
    </div>
  </div>,

  // Slide 12: Pricing Strategy
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Transparent Pricing</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Basic Plan</h3>
          <div className="text-4xl font-bold text-insurance-blue mb-2">$199</div>
          <p className="text-insurance-gray">per month</p>
        </div>
        <ul className="space-y-3 text-insurance-gray">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Essential coverage</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />24/7 support</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Online management</li>
        </ul>
      </div>
      <div className="bg-insurance-navy p-8 rounded-2xl shadow-lg text-white relative">
        <div className="absolute top-4 right-4 bg-insurance-blue px-3 py-1 rounded-full text-sm">Popular</div>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
          <div className="text-4xl font-bold mb-2">$349</div>
          <p className="text-gray-300">per month</p>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Comprehensive coverage</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Priority support</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Advanced analytics</li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Enterprise</h3>
          <div className="text-4xl font-bold text-insurance-blue mb-2">Custom</div>
          <p className="text-insurance-gray">pricing</p>
        </div>
        <ul className="space-y-3 text-insurance-gray">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Tailored solutions</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Dedicated account manager</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Custom integrations</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 13: Implementation Timeline
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Implementation Timeline</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="space-y-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-insurance-blue rounded-full flex items-center justify-center text-white font-bold mr-6">Q1</div>
          <div>
            <h3 className="text-xl font-semibold text-insurance-navy mb-2">Program Launch</h3>
            <p className="text-insurance-gray">Initial rollout and client onboarding</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-insurance-blue rounded-full flex items-center justify-center text-white font-bold mr-6">Q2</div>
          <div>
            <h3 className="text-xl font-semibold text-insurance-navy mb-2">Feature Enhancement</h3>
            <p className="text-insurance-gray">Digital platform improvements and new services</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-insurance-blue rounded-full flex items-center justify-center text-white font-bold mr-6">Q3</div>
          <div>
            <h3 className="text-xl font-semibold text-insurance-navy mb-2">Market Expansion</h3>
            <p className="text-insurance-gray">New coverage options and geographic expansion</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-insurance-blue rounded-full flex items-center justify-center text-white font-bold mr-6">Q4</div>
          <div>
            <h3 className="text-xl font-semibold text-insurance-navy mb-2">Performance Review</h3>
            <p className="text-insurance-gray">Annual assessment and strategy refinement</p>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 14: Support & Resources
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Support & Resources</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Dedicated Support Team</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">24/7 Phone Support</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Email Response within 2 hours</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Scheduled consultations</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Educational Resources</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <FileText className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Comprehensive policy guides</span>
          </div>
          <div className="flex items-center">
            <BarChart3 className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Risk assessment tools</span>
          </div>
          <div className="flex items-center">
            <Target className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Industry best practices</span>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 15: Success Metrics
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Success Metrics</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-5xl font-bold text-insurance-blue mb-4">94%</div>
          <p className="text-insurance-gray font-medium">Client Retention</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-insurance-blue mb-4">$2.5M</div>
          <p className="text-insurance-gray font-medium">Claims Processed</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-insurance-blue mb-4">24hr</div>
          <p className="text-insurance-gray font-medium">Average Response</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-insurance-blue mb-4">4.8★</div>
          <p className="text-insurance-gray font-medium">Client Satisfaction</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 16: Next Steps
  <div className="fade-in text-center">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12">Ready to Renew?</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Phone className="w-12 h-12 text-insurance-blue mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-2">Call Us</h3>
          <p className="text-insurance-gray">1-800-RENEWAL</p>
        </div>
        <div className="text-center">
          <Mail className="w-12 h-12 text-insurance-blue mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-2">Email</h3>
          <p className="text-insurance-gray">renew@insurance.com</p>
        </div>
        <div className="text-center">
          <Calendar className="w-12 h-12 text-insurance-blue mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-2">Schedule</h3>
          <p className="text-insurance-gray">Book a consultation</p>
        </div>
      </div>
      <div className="bg-insurance-navy text-white p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Thank You</h3>
        <p className="text-lg">Your trust is our foundation. Let's continue protecting what matters most to you.</p>
      </div>
    </div>
  </div>,

  // Slide 17: Bonus - Company Overview
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">About Our Company</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Our Mission</h3>
        <p className="text-insurance-gray text-lg leading-relaxed mb-6">
          To provide comprehensive, innovative insurance solutions that give our clients peace of mind and financial security.
        </p>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-insurance-blue">50+</div>
            <p className="text-insurance-gray text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-insurance-blue">10K+</div>
            <p className="text-insurance-gray text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-insurance-blue">$1B+</div>
            <p className="text-insurance-gray text-sm">Coverage Provided</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Our Values</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-insurance-navy">Integrity</h4>
              <p className="text-insurance-gray text-sm">Transparent and honest in all dealings</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-insurance-navy">Innovation</h4>
              <p className="text-insurance-gray text-sm">Continuously improving our services</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-insurance-navy">Customer Focus</h4>
              <p className="text-insurance-gray text-sm">Your needs drive our solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
]

export default slides