import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="FileText" className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              БИНУС
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="/sed-solutions"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              СЭД Решения
            </a>
            <a
              href="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Цены
            </a>
            <a
              href="/partners"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Партнеры
            </a>
            <a
              href="/contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Консультация
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Главная
              </a>
              <a
                href="/sed-solutions"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                СЭД Решения
              </a>
              <a
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Цены
              </a>
              <a
                href="/partners"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Партнеры
              </a>
              <a
                href="/contacts"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Контакты
              </a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg mt-4 font-medium">
                Консультация
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
