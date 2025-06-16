import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="FileText" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold">БИНУС</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Лидер в области СЭД решений для российского бизнеса. Помогаем
              компаниям эффективно управлять документооборотом.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Решения</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Электронный документооборот
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Цифровые подписи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Бизнес-процессы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Облачные решения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Интеграции
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Компания</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="/sed-solutions"
                  className="hover:text-white transition-colors"
                >
                  СЭД Решения
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Цены
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="hover:text-white transition-colors"
                >
                  Партнеры
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="flex-shrink-0" />
                <span>info@binus.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="flex-shrink-0 mt-1" />
                <span>г. Москва, ул. Тверская, д. 1, стр. 1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} className="flex-shrink-0" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 БИНУС. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Реквизиты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
