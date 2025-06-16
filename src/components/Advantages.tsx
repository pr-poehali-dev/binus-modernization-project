import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      number: "01",
      title: "Быстрое внедрение",
      description:
        "Запуск системы за 2-4 недели благодаря готовым шаблонам и автоматизации",
      icon: "Rocket",
    },
    {
      number: "02",
      title: "Экономия до 60%",
      description:
        "Снижение затрат на документооборот и повышение эффективности сотрудников",
      icon: "TrendingUp",
    },
    {
      number: "03",
      title: "100% безопасность",
      description:
        "Соответствие всем требованиям информационной безопасности РФ",
      icon: "ShieldCheck",
    },
    {
      number: "04",
      title: "Простота использования",
      description:
        "Интуитивно понятный интерфейс, не требующий специального обучения",
      icon: "Smile",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              нас
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15+ лет опыта в создании надежных решений для российского рынка
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {advantage.number}
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={advantage.icon as any}
                    className="text-blue-600"
                    size={28}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы начать цифровую трансформацию?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Получите персональную консультацию и узнайте, как СЭД система
              может оптимизировать ваши бизнес-процессы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Бесплатная консультация
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300 font-semibold">
                Демо-презентация
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
