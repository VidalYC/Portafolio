const Stats = () => {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6</div>
        <div className="text-gray-600 dark:text-gray-300">Certificaciones Obtenidas</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5</div>
        <div className="text-gray-600 dark:text-gray-300">Organizaciones Certificadoras</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
        <div className="text-gray-600 dark:text-gray-300">Horas de Formación</div>
      </div>
    </div>
  );
};

export default Stats;
