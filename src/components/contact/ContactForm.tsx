import React, { useState } from "react";
import { Send } from "lucide-react";

interface Props {
  emailjsLoaded: boolean;
  showNotification: (type: "success" | "error", message: string) => void;
}

const ContactForm: React.FC<Props> = ({ emailjsLoaded, showNotification }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const now = new Date();
      const currentDate = now.toLocaleString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Bogota",
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "yorielvidal@gmail.com",
        reply_to: formData.email,
        current_date: currentDate,
      };

      if (emailjsLoaded && window.emailjs) {
        await window.emailjs.send(
          "service_dqt053l", // Service ID
          "template_tsdysoz", // Template ID
          templateParams
        );

        setIsSubmitted(true);
        showNotification(
          "success",
          "¡Mensaje enviado exitosamente! Te contactaré pronto."
        );
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(false);
        }, 2000);
      } else {
        throw new Error("EmailJS no está disponible");
      }
    } catch (error) {
      setIsSubmitting(false);
      showNotification(
        "error",
        "Error al enviar el mensaje. Por favor, intenta nuevamente."
      );
      console.error("Error:", error);
    }
  };

  return (
    <>
      <style>{`
        .svg-wrapper.animate-fly {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }
        @keyframes fly-1 {
          from { transform: translateY(0.1em); }
          to { transform: translateY(-0.1em); }
        }
      `}</style>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Envíame un mensaje
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
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
              placeholder="Tu nombre completo"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
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
              placeholder="tu@email.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
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
              placeholder="Cuéntame sobre tu proyecto, consulta o propuesta de trabajo..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Botón */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`relative font-semibold py-2 px-6 rounded-2xl transition-all flex items-center justify-center cursor-pointer shadow-md ${
                isSubmitted
                  ? "bg-green-500"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              } text-white`}
            >
              <div
                className={`svg-wrapper flex items-center justify-center ${
                  isSubmitting ? "animate-fly" : ""
                }`}
              >
                {isSubmitted ? (
                  <div className="text-xl font-bold">✓</div>
                ) : (
                  <Send
                    className={`h-5 w-5 transition-transform ${
                      isSubmitting ? "rotate-45 scale-110" : ""
                    }`}
                  />
                )}
              </div>
              {!isSubmitting && !isSubmitted && (
                <span className="ml-2">Enviar mensaje</span>
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            * Campos obligatorios. Tu información será tratada de forma
            confidencial.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
