import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "FileText",
      title: "Электронный документооборот",
      description:
        "Полная автоматизация работы с документами от создания до архивирования",
      features: [
        "Цифровые подписи",
        "Маршруты согласования",
        "Контроль исполнения",
      ],
    },
    {
      icon: "Shield",
      title: "Защита и соответствие",
      description: "Соблюдение всех требований российского законодательства",
      features: ["63-ФЗ", "149-ФЗ", "152-ФЗ"],
    },
    {
      icon: "Workflow",
      title: "Бизнес-процессы",
      description: "Настройка и автоматизация корпоративных процессов",
      features: ["Workflow", "Уведомления", "Аналитика"],
    },
    {
      icon: "Database",
      title: "Интеграции",
      description: "Подключение к существующим системам предприятия",
      features: ["1С", "SAP", "CRM"],
    },
    {
      icon: "Cloud",
      title: "Облачные решения",
      description: "Современная инфраструктура с высокой надежностью",
      features: ["99.9% Uptime", "Масштабируемость", "Резервное копирование"],
    },
    {
      icon: "Users",
      title: "Техподдержка 24/7",
      description: "Профессиональная поддержка на всех этапах работы",
      features: ["Консультации", "Обучение", "Техническая поддержка"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши <span className="text-[#a6bfa5]">СЭД решения</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексные решения для цифровой трансформации вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#a6bfa5]/30 transition-all duration-300 hover-scale"
            >
              <div className="w-16 h-16 bg-[#a6bfa5] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={service.icon as any}
                  className="text-white"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2 flex-shrink-0"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-[#a6bfa5] font-medium hover:text-[#a6bfa5]/80 transition-colors story-link">
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
