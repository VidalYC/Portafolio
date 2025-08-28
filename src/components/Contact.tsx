import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

// Declarar emailjs como variable global
declare global {
  interface Window {
    emailjs: any;
  }
}

// Componente de fondo animado
const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {/* Círculos grandes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-100/20 dark:bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-100/20 dark:bg-purple-500/10 rounded-full animate-float-medium delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-green-100/20 dark:bg-green-500/10 rounded-full animate-float-fast delay-2000"></div>
        
        {/* Círculos medianos */}
        <div className="absolute top-1/6 right-1/3 w-16 h-16 bg-cyan-100/25 dark:bg-cyan-500/15 rounded-full animate-float-medium delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-pink-100/25 dark:bg-pink-500/15 rounded-full animate-float-slow delay-1500"></div>
        <div className="absolute top-2/3 left-1/5 w-14 h-14 bg-indigo-100/25 dark:bg-indigo-500/15 rounded-full animate-float-fast"></div>
        
        {/* Círculos pequeños */}
        <div className="absolute top-1/8 left-2/3 w-8 h-8 bg-yellow-100/30 dark:bg-yellow-500/20 rounded-full animate-float-fast delay-700"></div>
        <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-red-100/30 dark:bg-red-500/20 rounded-full animate-float-medium delay-1200"></div>
        <div className="absolute top-3/5 left-1/8 w-10 h-10 bg-emerald-100/30 dark:bg-emerald-500/20 rounded-full animate-float-slow delay-1800"></div>
        
        {/* Formas geométricas */}
        <div className="absolute top-1/3 left-3/4 w-6 h-6 bg-blue-200/40 dark:bg-blue-400/25 transform rotate-45 animate-float-medium delay-300"></div>
        <div className="absolute bottom-1/6 left-1/2 w-4 h-4 bg-purple-200/40 dark:bg-purple-400/25 transform rotate-45 animate-float-fast delay-900"></div>
        <div className="absolute top-4/5 right-2/3 w-5 h-5 bg-green-200/40 dark:bg-green-400/25 transform rotate-45 animate-float-slow delay-1600"></div>
        
        {/* Líneas flotantes */}
        <div className="absolute top-1/5 left-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent dark:via-blue-400/30 animate-drift-horizontal"></div>
        <div className="absolute bottom-1/5 right-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent dark:via-purple-400/30 animate-drift-horizontal delay-1000"></div>
        <div className="absolute top-2/5 right-1/6 h-20 w-0.5 bg-gradient-to-b from-transparent via-green-300/40 to-transparent dark:via-green-400/30 animate-drift-vertical delay-1500"></div>
        
        {/* Puntos brillantes */}
        <div className="absolute top-1/8 left-1/3 w-2 h-2 bg-blue-400/60 dark:bg-blue-300/40 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-1/8 right-1/3 w-1.5 h-1.5 bg-purple-400/60 dark:bg-purple-300/40 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute top-3/4 left-3/5 w-1 h-1 bg-green-400/60 dark:bg-green-300/40 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute top-1/2 left-4/5 w-2 h-2 bg-yellow-400/60 dark:bg-yellow-300/40 rounded-full animate-twinkle delay-1500"></div>
        <div className="absolute bottom-2/5 left-1/6 w-1.5 h-1.5 bg-pink-400/60 dark:bg-pink-300/40 rounded-full animate-twinkle delay-2000"></div>
      </div>
      
      {/* Efecto de malla sutil */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(15px) rotate(120deg); }
          66% { transform: translateY(-25px) translateX(-10px) rotate(240deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-20px) translateX(20px) rotate(180deg); }
        }
        
        @keyframes drift-horizontal {
          0%, 100% { transform: translateX(-10px) opacity(0); }
          50% { transform: translateX(10px) opacity(1); }
        }
        
        @keyframes drift-vertical {
          0%, 100% { transform: translateY(-10px) opacity(0); }
          50% { transform: translateY(10px) opacity(1); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
        .animate-drift-horizontal { animation: drift-horizontal 10s ease-in-out infinite; }
        .animate-drift-vertical { animation: drift-vertical 12s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-1600 { animation-delay: 1.6s; }
        .delay-1800 { animation-delay: 1.8s; }
        .delay-2000 { animation-delay: 2s; }
        
        .svg-wrapper.animate-fly {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }
        
        @keyframes fly-1 {
          from {
            transform: translateY(0.1em);
          }
          to {
            transform: translateY(-0.1em);
          }
        }
      `}</style>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Cargar EmailJS desde CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      window.emailjs.init('RZPeuWFNsCynZ2Zw3');
      setEmailjsLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification({ type: null, message: '' });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Obtener fecha y hora actual en formato legible
      const now = new Date();
      const currentDate = now.toLocaleString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Bogota'
      });

      // Parámetros del template para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'yorielvidal@gmail.com',
        reply_to: formData.email,
        current_date: currentDate
      };

      if (emailjsLoaded && window.emailjs) {
        // Código real usando EmailJS
        await window.emailjs.send(
          'service_dqt053l',    // Tu Service ID
          'template_tsdysoz',   // Tu Template ID  
          templateParams
        );
        
        setIsSubmitted(true);
        showNotification('success', '¡Mensaje enviado exitosamente! Te contactaré pronto.');
        setFormData({ name: '', email: '', message: '' });
        
        // Resetear el estado después de mostrar el éxito
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(false);
        }, 2000);
        
      } else {
        // Fallback si EmailJS no carga
        throw new Error('EmailJS no está disponible');
      }
    } catch (error) {
      setIsSubmitting(false);
      showNotification('error', 'Error al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Fondo Animado */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notification Toast */}
        {notification.type && (
          <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center space-x-3 transition-all duration-300 ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        )}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tus desafíos de datos y BI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm rounded-lg group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/80 transition-colors">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">Email</p>
                    <a 
                      href="mailto:yorielvidal@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      yorielvidal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm rounded-lg group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/80 transition-colors">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">Teléfono</p>
                    <a 
                      href="tel:+573136412944" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      +57 (313) 641-2944
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm rounded-lg group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/80 transition-colors">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">Ubicación</p>
                    <p className="text-gray-600 dark:text-gray-300">Valledupar, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sígueme en
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/yoriel-carvajalino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-110 transform transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/VidalYC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 hover:scale-110 transform transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 transition-colors duration-300 shadow-lg border border-white/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="Cuéntame sobre tu proyecto, consulta o propuesta de trabajo..."
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`relative font-semibold py-2 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center overflow-hidden cursor-pointer border-none active:scale-95 shadow-md hover:shadow-lg ${
                    isSubmitted 
                      ? 'bg-green-500 hover:bg-green-500' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                  } text-white`}
                  style={{
                    fontFamily: 'inherit',
                    fontSize: '16px'
                  }}
                >
                  <div className={`svg-wrapper flex items-center justify-center ${isSubmitting ? 'animate-fly' : ''}`}>
                    {isSubmitted ? (
                      <div className="text-xl font-bold text-white">✓</div>
                    ) : (
                      <Send 
                        className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
                          isSubmitting ? 'rotate-45 scale-110' : ''
                        }`} 
                      />
                    )}
                  </div>
                  {!isSubmitting && !isSubmitted && (
                    <span className="block ml-2 transition-all duration-300 ease-in-out">
                      Enviar mensaje
                    </span>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                * Campos obligatorios. Tu información será tratada de forma confidencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;