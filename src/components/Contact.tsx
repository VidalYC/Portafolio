import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

// Declarar emailjs como variable global
declare global {
  interface Window {
    emailjs: any;
  }
}

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
    <>
      <style>{`
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
      
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
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
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
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
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
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
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 transition-colors duration-300 shadow-lg">
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-300 dark:hover:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-300 dark:hover:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-300 dark:hover:border-blue-500"
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
    </>
  );
};

export default Contact;