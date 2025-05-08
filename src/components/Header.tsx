import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

interface HeaderState {
  // Здесь можно добавить состояние, если оно понадобится
}

class Header extends PureComponent<{}, HeaderState> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className="bg-gray-800 shadow-lg">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-end">
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className="text-white hover:text-amber-400 transition-colors duration-300 text-lg font-medium px-3 py-2 rounded hover:bg-gray-700"
              >
                Главная
              </Link>
              <Link 
                to="/catalog" 
                className="text-white hover:text-amber-400 transition-colors duration-300 text-lg font-medium px-3 py-2 rounded hover:bg-gray-700"
              >
                Каталог
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-amber-400 transition-colors duration-300 text-lg font-medium px-3 py-2 rounded hover:bg-gray-700"
              >
                О нас
              </Link>
              <Link 
                to="/contacts" 
                className="text-white hover:text-amber-400 transition-colors duration-300 text-lg font-medium px-3 py-2 rounded hover:bg-gray-700"
              >
                Контакты
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;