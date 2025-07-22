import React from 'react'
import { Shield, Building2, Stethoscope, CalendarClock, Clock, Award, CheckCircle, BarChart3, Target, Zap, Star, Phone, Mail, Calendar, FileText, DollarSign, Heart, Contact } from 'lucide-react'

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
        <i className="fas fa-calendar-alt mr-2"></i>2025 | <i className="fas fa-users ml-4 mr-2"></i>Administrativos
      </p>
    </div>
  </div>,

  // Slide 2: Propuesta
  <div className="fade-in">
    <h2 className="text-4xl md:text-5xl font-bold text-insurance-navy mb-8 text-center">Propuesta de renovación</h2>
    <div className="flex justify-center">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg max-w-2xl w-full">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-insurance-navy mb-2">Plan Corporativo</h3>
          <div className="text-3xl md:text-4xl font-bold text-insurance-blue">$4,000</div>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
            <span className="text-base md:text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Tipo de Plan:</span>
            <span className="text-base md:text-lg text-insurance-gray">Corporativo</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
            <span className="text-base md:text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Cobertura:</span>
            <span className="text-base md:text-lg text-insurance-gray">Nacional</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
            <span className="text-base md:text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Monto máximo de cobertura:</span>
            <span className="text-base md:text-lg text-insurance-gray">$4,000</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
            <span className="text-base md:text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Tipo de cobertura:</span>
            <span className="text-base md:text-lg text-insurance-gray">Por incapacidad por persona</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
            <span className="text-base md:text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Tipo de deducible:</span>
            <span className="text-base md:text-lg text-insurance-gray">Anual por persona</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
            <span className="text-base md:text-lg font-semibold text-insurance-navy mb-1 sm:mb-0">Red especial del plan:</span>
            <span className="text-base md:text-lg text-insurance-gray">Red Total</span>
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
        <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Cobertura Hospitalaria</h3>
        <p className="text-insurance-gray">$4,000</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Stethoscope className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Cobertura Ambulatoria</h3>
        <p className="text-insurance-gray">$4,000</p>
      </div>
    </div>
  </div>,

  // Slide 4: Key Benefits
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Características Principales del Plan</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <FileText className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Preexistencias</h3>
        <p className="text-insurance-gray">$4,000</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <CalendarClock className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Carencia Hospitalaria</h3>
        <p className="text-insurance-gray">90 días</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Clock className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Carencia Ambulatoria</h3>
        <p className="text-insurance-gray">30 días</p>
      </div>
    </div>
  </div>,

  // Slide 5: Plan Complementario
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-8 text-center">Plan Complementario</h2>
    <p className="text-xl text-insurance-gray text-center mb-6 max-w-4xl mx-auto leading-relaxed">
      Gastos médicos mayores que se activa cuando los gastos superen los $4,000 del plan base
    </p>
    <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
      <h3 className="text-2xl font-semibold text-insurance-navy mb-6 text-center">Se activa para casos de:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <Building2 className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Hospitalizaciones complejas</span>
          </div>
          <div className="flex items-center">
            <Stethoscope className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Cirugías mayores</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <Heart className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Enfermedades catastróficas</span>
          </div>
          <div className="flex items-center">
            <Target className="w-6 h-6 text-insurance-blue mr-4" />
            <span className="text-insurance-gray">Tratamientos especializados</span>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Building2 className="w-12 h-12 text-insurance-blue mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-insurance-navy mb-2">Hospitalización</h3>
        <p className="text-insurance-gray text-sm">0% copago</p>
        <div className="text-2xl font-bold text-insurance-blue mb-1">$500,000</div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Heart className="w-12 h-12 text-insurance-blue mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-insurance-navy mb-2">Medicina</h3>
        <p className="text-insurance-gray text-sm">copago</p>
        <div className="text-2xl font-bold text-insurance-blue mb-1">0%</div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Target className="w-12 h-12 text-insurance-blue mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-insurance-navy mb-2">Trasplantes</h3>
        <p className="text-insurance-gray text-sm">hasta</p>
        <div className="text-2xl font-bold text-insurance-blue mb-1">$250,000</div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <FileText className="w-12 h-12 text-insurance-blue mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-insurance-navy mb-2">Preexistencias</h3>
        <p className="text-insurance-gray text-sm">hasta</p>
        <div className="text-2xl font-bold text-insurance-blue mb-1">$1,000</div>
      </div>
    </div>
  </div>,

  // Slide 6: Copago Hospitalario
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-8 text-center">Cobertura Hospitalaria</h2>
    <p className="text-xl text-insurance-gray text-center mb-12 max-w-4xl mx-auto leading-relaxed">
      Esta cobertura se activa cuando el paciente requiere permanecer internado por un período superior a 24 horas.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Copago Red Estándar</h3>
        <div className="text-4xl font-bold text-insurance-blue mb-2">10%</div>
        <p className="text-insurance-gray">Del monto total</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Copago Otras Redes</h3>
        <div className="text-4xl font-bold text-insurance-blue mb-2">20%</div>
        <p className="text-insurance-gray">Del monto total</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <DollarSign className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Monto Máximo</h3>
        <div className="text-4xl font-bold text-insurance-blue mb-2">$4,000</div>
        <p className="text-insurance-gray">Cobertura anual</p>
      </div>
    </div>
  </div>,

  // Slide 7: Cobertura Hospitalaria (Beneficios)
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Otras Coberturas Hospitalarias</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <Heart className="w-12 h-12 text-insurance-blue mb-6" />
        <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Cuarto y Alimento</h3>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-insurance-blue">$120.00</div>
          <p className="text-sm text-insurance-gray">Valor máximo</p>
        </div>
        <ul className="text-insurance-gray space-y-3">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Aplica para todas las redes</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Cobertura del 100%</li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <Stethoscope className="w-12 h-12 text-insurance-blue mb-6" />
        <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Unidad de Cuidados Intensivos</h3>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-insurance-blue">$4,000</div>
          <p className="text-sm text-insurance-gray">Monto máximo</p>
        </div>
        <ul className="text-insurance-gray space-y-3">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Aplica para todas las redes</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Según % copago hospitalario</li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <Clock className="w-12 h-12 text-insurance-blue mb-6" />
        <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Límite de días en UCI</h3>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-insurance-blue">$4,000</div>
          <p className="text-sm text-insurance-gray">Cobertura máxima</p>
        </div>
        <ul className="text-insurance-gray space-y-3">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Sin límite de días</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Todas las redes incluidas</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 8: Red de Hospitales
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Red de Hospitales</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Red Estándar</h3>
          <ul className="text-insurance-gray text-sm space-y-2 text-left">
            <li>• Clínica Kennedy Samborondón</li>
            <li>• Hospitales Junta de Beneficencia</li>
            <li>• Hospital León Becerra</li>
            <li>• Clínica Panamericana</li>
            <li>• Clínica Unión</li>
            <li>• Clínica Milenium</li>
          </ul>
        </div>
        <div className="text-center">
          <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Red Preferida</h3>
          <ul className="text-insurance-gray text-sm space-y-2 text-left">
            <li>• Omnihospital</li>
            <li>• Clínica Medysis</li>
            <li>• Hospital Luis Vernaza</li>
          </ul>
        </div>
        <div className="text-center">
          <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Red Total</h3>
          <ul className="text-insurance-gray text-sm space-y-2 text-left">
            <li>• Clínica Alcívar</li>
            <li>• Clínica Alborada</li>
            <li>• SOLCA</li>
          </ul>
        </div>
        <div className="text-center">
          <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Red Élite</h3>
          <ul className="text-insurance-gray text-sm space-y-2 text-left">
            <li>• UEES Clinic</li>
          </ul>
        </div>
      </div>
    </div>
  </div>,

  // Slide 9: Cobertura Ambulatoria
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-8 text-center">Cobertura Ambulatoria</h2>
    <p className="text-xl text-insurance-gray text-center mb-6 max-w-4xl mx-auto leading-relaxed">
    La cobertura ambulatoria cubre servicios médicos sin internación mayor a 24 horas, como consultas, exámenes diagnósticos, terapias y procedimientos menores en entornos no hospitalarios.
    </p>
    <p className="text-lg font-semibold text-insurance-navy text-center mb-8">Incluye:</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4 leading-tight">Exámenes y<br />Procedimientos (RDA)</h3>
        <div className="text-4xl font-bold text-insurance-blue mb-2">20% - 25%</div>
        <p className="text-insurance-gray">Del monto total</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <Building2 className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4 leading-tight">Consultas<br />médicas</h3>
        <div className="text-4xl font-bold text-insurance-blue mb-2">20% - 25%</div>
        <p className="text-insurance-gray">Del monto total</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
        <DollarSign className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4 leading-tight">Monto<br />Máximo</h3>
        <div className="text-4xl font-bold text-insurance-blue mb-2">$4,000</div>
        <p className="text-insurance-gray">Cobertura anual</p>
      </div>
    </div>
  </div>,

  // Slide 10: Crédito Ambulatorio
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-8 text-center">Crédito Ambulatorio</h2>
    <p className="text-xl text-insurance-gray text-center mb-6 max-w-4xl mx-auto leading-relaxed">
      Es un sistema de pago directo que permite al afiliado recibir servicios médicos ambulatorios 
      cancelando únicamente el copago correspondiente.
    </p>
    <p className="text-lg font-semibold text-insurance-navy text-center mb-8">¿Cómo funciona este beneficio?</p>
    
    <div className="bg-white p-12 md:mb-16 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Servicios Incluidos:</h3>
          <ul className="space-y-4 text-insurance-gray">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Consultas médicas</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Exámenes de laboratorio y diagnóstico</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Procedimientos menores ambulatorios</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Medicamentos en farmacias afiliadas</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Terapias especializadas</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Ventajas del Crédito:</h3>
          <div className="space-y-6">
            <div className="bg-insurance-light p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h4 className="text-lg font-semibold text-insurance-navy">Reducción de Costos</h4>
              </div>
              <p className="text-insurance-gray text-sm">
              Opción económica que garantiza atención sin comprometer el presupuesto.
              </p>
            </div>
            
            <div className="bg-insurance-light p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <Clock className="w-8 h-8 text-insurance-blue mr-3" />
                <h4 className="text-lg font-semibold text-insurance-navy">Proceso Ágil</h4>
              </div>
              <p className="text-insurance-gray text-sm">
                Trámite directo con el prestador, sin necesidad de reembolsos posteriores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 11: Crédito: Consultas Médicas
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Crédito para Consultas Médicas</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Especialidades en Red:</h3>
          <ul className="space-y-4 text-insurance-gray">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Medicina Interna / Consulta General</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Ginecología</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Pediatría</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Otras Especialidades y Subespecialidades</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Médicos Especialistas (particulares)*</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-insurance-navy mb-4 text-center">Costos por Consulta</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h5 className="text-sm font-semibold text-insurance-navy mb-2">Red Élite</h5>
                <div className="text-2xl font-bold text-insurance-blue">$24.00</div>
              </div>
                              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                 <h5 className="text-sm font-semibold text-insurance-navy mb-2">
                   <span className="md:hidden">Estándar/<br/>Preferida/Total</span>
                   <span className="hidden md:inline">Estándar/Preferida/Total</span>
                 </h5>
                 <div className="text-2xl font-bold text-insurance-blue">$4.00</div>
               </div>
               <div className="bg-white p-4 rounded-lg shadow-sm text-center md:col-span-2 md:max-w-xs md:mx-auto">
                 <h5 className="text-sm font-semibold text-insurance-navy mb-2">
                   <span className="md:hidden">Estándar/Preferida/<br/>Total/Élite*</span>
                   <span className="hidden md:inline">Estándar/Preferida/Total/Élite*</span>
                 </h5>
                 <div className="text-2xl font-bold text-insurance-blue md:mx-10">$20.00</div>
               </div>
            </div>
            <div className="text-center text-sm text-insurance-gray">
              <p>Centro Médico Familiar y Mediglobal: <span className="font-bold text-green-600">sin costo</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 12: Crédito: Examenes y Procedimientos
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Crédito para Exámenes y Procedimientos</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Tipos de exámenes:</h3>
          <ul className="space-y-4 text-insurance-gray">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Hemogramas</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Química Sanguínea</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Perfil Lipídico</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>ECG / Radiografías</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Exámenes Especializados (particulares)*</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-insurance-navy mb-4 text-center">Copagos fijos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
               <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                 <div className="text-2xl font-bold text-insurance-blue mb-2">20%</div>
                 <h5 className="text-sm font-semibold text-insurance-navy leading-tight">
                   <span className="md:hidden">Red Estándar/<br/>Preferida/Total</span>
                   <span className="hidden md:inline">Red Estándar/Preferida/Total</span>
                 </h5>
               </div>
               <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                 <div className="text-2xl font-bold text-insurance-blue mb-2">25%</div>
                 <h5 className="text-sm font-semibold text-insurance-navy">Red Élite</h5>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 13: Crédito: Farmacias
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Crédito en Farmacias</h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full md:w-80">
        <Clock className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Intelmed</h3>
        <p className="text-insurance-gray mb-2">Crédito disponible</p>
        <p className="text-3xl font-bold text-insurance-blue mb-2">$1,500</p>
        <p className="text-insurance-gray"><span className="font-bold text-insurance-navy">Copago: 20%</span></p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full md:w-80">
        <Award className="w-16 h-16 text-insurance-blue mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-insurance-navy mb-4">Pharmacys</h3>
        <p className="text-insurance-gray mb-2">Crédito disponible</p>
        <p className="text-3xl font-bold text-insurance-blue mb-2">$125</p>
        <p className="text-insurance-gray"><span className="font-bold text-insurance-navy">Copago: 20%</span></p>
      </div>
    </div>
  </div>,

  // Slide 14: Maternidad
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Maternidad</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="flex-1">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-insurance-blue rounded-full mt-2 mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold text-insurance-navy mb-2">Cobertura Integral</h3>
                <p className="text-insurance-gray">Incluye controles prenatales, parto, cesárea y legrados. Sin deducible, cobertura al 100% para titular o cónyuge.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center md:min-w-[120px]">
            <div className="text-2xl font-bold text-insurance-blue">$1,200</div>
            <p className="text-sm text-insurance-gray">Monto máximo</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="flex-1">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-insurance-blue rounded-full mt-2 mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold text-insurance-navy mb-2">Periodo de Carencia</h3>
                <p className="text-insurance-gray">Maternidad en carencia según tarifa cero, vía reembolso con prestadores en convenio. Sin deducible al 100%.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center md:min-w-[120px]">
            <div className="text-2xl font-bold text-insurance-blue">60 días</div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="flex-1">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-insurance-blue rounded-full mt-2 mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold text-insurance-navy mb-2">Cuidados del Recién Nacido</h3>
                <p className="text-insurance-gray">Atención integral neonatal, perinatal y UCI. Notificación durante primeros 30 días. Con deducible y copago.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center md:min-w-[120px]">
            <div className="text-2xl font-bold text-insurance-blue">$4,000</div>
            <p className="text-sm text-insurance-gray">Monto máximo</p>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 15: Beneficios Adicionales
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Beneficios Adicionales</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Terapias Especializadas</h3>
              <p className="text-insurance-gray text-sm">Físicas, respiratorias, lenguaje, cardiacas. Sin límite por incapacidad. <span className="font-bold text-insurance-blue">Hasta $30.00 c/u</span></p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Emergencia Ambulatoria</h3>
              <p className="text-insurance-gray text-sm">Por accidente, sin deducible ni copago. <span className="font-bold text-insurance-blue">Hasta $400</span></p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Atención Oncológica</h3>
              <p className="text-insurance-gray text-sm">Integral con cirugía reconstructiva y rehabilitación. <span className="font-bold text-insurance-blue">Hasta $4,000</span></p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Trasplante de Órganos</h3>
              <p className="text-insurance-gray text-sm">Según ley de la materia, aplica deducible y copago. <span className="font-bold text-insurance-blue">Hasta $4,000</span></p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Ambulancia Terrestre</h3>
              <p className="text-insurance-gray text-sm">Por emergencias médicas con prestador en convenio. <span className="font-bold text-insurance-blue">Hasta $100</span></p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Extracción Terceros Molares</h3>
              <p className="text-insurance-gray text-sm">Con rayos X, por odontólogo/cirujano maxilofacial. <span className="font-bold text-insurance-blue">Hasta $120</span></p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Mamografía + Consulta</h3>
              <p className="text-insurance-gray text-sm">Una vez por año, titular y cónyuge, sin deducible. <span className="font-bold text-insurance-blue">Hasta $60.00 anuales</span></p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-insurance-navy mb-1">Asistencia Médica en Viajes</h3>
              <p className="text-insurance-gray text-sm">Para emergencias en exterior por negocio/turismo. <span className="font-bold text-insurance-blue">2 eventos anuales, 30 días máx.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 16: Proceso para Reembolsos
  <div className="fade-in">
    <h2 className="text-4xl md:text-5xl font-bold text-insurance-navy mb-6 text-center">Proceso para Reembolsos</h2>
    <p className="text-lg text-insurance-gray text-center mb-4 max-w-4xl mx-auto">
      Gestiona tus reembolsos de manera rápida y sencilla siguiendo estos pasos.
    </p>
    <p className="text-base font-semibold text-insurance-navy text-center mb-6">Documentación necesaria:</p>
    
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Documentos Requeridos:</h3>
          <ul className="space-y-2 text-insurance-gray text-sm">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Formulario de solicitud completado</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Facturas originales de servicios médicos</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Recetas médicas originales</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Resultados de exámenes realizados</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Copia de cédula titular y beneficiario</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Datos bancarios para transferencia</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-insurance-navy mb-4">Proceso de Reembolso:</h3>
          <div className="space-y-3">
            <div className="bg-insurance-light p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <FileText className="w-6 h-6 text-insurance-blue mr-2" />
                <h4 className="text-base font-semibold text-insurance-navy">1. Presentación</h4>
              </div>
              <p className="text-insurance-gray text-xs">
                Entrega documentación en oficinas o vía email.
              </p>
            </div>
            
            <div className="bg-insurance-light p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-6 h-6 text-insurance-blue mr-2" />
                <h4 className="text-base font-semibold text-insurance-navy">2. Revisión</h4>
              </div>
              <p className="text-insurance-gray text-xs">
                Verificación y validación de cobertura.
              </p>
            </div>
            
            <div className="bg-insurance-light p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <DollarSign className="w-6 h-6 text-green-500 mr-2" />
                <h4 className="text-base font-semibold text-insurance-navy">3. Pago</h4>
              </div>
              <p className="text-insurance-gray text-xs">
                Transferencia directa a cuenta bancaria.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-base font-semibold text-insurance-navy mb-1">Tiempo:</h4>
                <p className="text-green-800 text-xs font-bold">
                  8 días laborables desde presentación completa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 17: Procesos para Hospitalizaciones
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Procesos para Hospitalizaciones</h2>
    <div className="bg-white p-12 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Pre-Autorizaciones</h3>
          <ul className="space-y-4 text-insurance-gray">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Formulario de pre y post autorización</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span className="break-words">Resultado de exámenes (máx. 3 meses de antigüedad)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span className="break-words">Presupuesto de honorarios médicos de libre elección</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
              <span>Detalle de insumos y equipos</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-yellow-800">
              <strong>Tiempo de procesamiento:</strong> 72 horas laborables
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Emergencias</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-insurance-navy mb-3">Proceso:</h4>
              <ul className="space-y-3 text-insurance-gray">
                <li className="flex items-start">
                  <Building2 className="w-5 h-5 text-insurance-blue mr-3 mt-0.5" />
                  <span className="break-words">Ingreso al proveedor en red y registro como cliente ASISKEN</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-insurance-blue mr-3 mt-0.5" />
                  <span>En caso de novedad, comunicarse con CAPSTONE</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-insurance-navy mb-3">Hospitales de Emergencia:</h4>
              <ul className="space-y-2 text-insurance-gray">
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-3" />
                  <span>Clínica Kennedy</span>
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-3" />
                  <span>Hospital Semedic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 18: Costos
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Costos</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Titular</h3>
          <div className="text-4xl font-bold text-insurance-blue mb-2">$33.31</div>
          <p className="text-insurance-gray">Cobertura para el titular del plan</p>
        </div>
        <ul className="space-y-3 text-insurance-gray">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Acceso a todas las redes</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Beneficios completos</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Cobertura hasta $4,000 + Plan Complementario</li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Titular + 1 Beneficiario</h3>
          <div className="text-4xl font-bold text-insurance-blue mb-2">$103.99</div>
          <p className="text-insurance-gray">Incluye titular y un beneficiario adicional</p>
        </div>
        <ul className="space-y-3 text-insurance-gray">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Cobertura para ambos afiliados</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Acceso a todos los servicios</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Misma cobertura completa</li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-insurance-navy mb-4">Titular + Familia</h3>
          <div className="text-4xl font-bold text-insurance-blue mb-2">$178.89</div>
          <p className="text-insurance-gray">Cobertura para titular y núcleo familiar</p>
        </div>
        <ul className="space-y-3 text-insurance-gray">
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Protección integral</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Todos los beneficios del plan</li>
          <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Cobertura hasta $4,000 + Plan Complementario</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 19: Soporte & Atención
  <div className="fade-in">
    <h2 className="text-5xl font-bold text-insurance-navy mb-12 text-center">Soporte & Atención</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
         <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Reclamos y Liquidaciones</h3>
         <div className="space-y-4">
           <div className="flex items-center">
             <Contact className="w-6 h-6 text-insurance-blue mr-4" />
             <span className="text-insurance-gray">Diana Mendez</span>
           </div>
           <div className="flex items-center">
             <Mail className="w-6 h-6 text-insurance-blue mr-4" />
             <span className="text-insurance-gray">reembolsos@capstone.com.ec</span>
           </div>
         </div>
       </div>
       <div className="bg-white p-8 rounded-2xl shadow-lg">
         <h3 className="text-2xl font-semibold text-insurance-navy mb-6">Hospitalizaciones y Créditos</h3>
         <div className="space-y-4">
           <div className="flex items-center">
             <Contact className="w-6 h-6 text-insurance-blue mr-4" />
             <span className="text-insurance-gray">Yesenia Sanchez</span>
           </div>
           <div className="flex items-center">
             <Mail className="w-6 h-6 text-insurance-blue mr-4" />
             <span className="text-insurance-gray">ysanchez@capstone.com.ec</span>
           </div>
         </div>
       </div>
    </div>
  </div>
]

export default slides