import React, { PureComponent } from 'react'


interface FooterState {
  // Здесь можно добавить состояние, если оно понадобится
}

class Footer extends PureComponent<{}, FooterState> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer className="bg-gray-800 w-full py-8 shadow-lg relative border-t border-gray-700">
        <div className="container mx-auto px-4">
          {/* Основное содержимое футера */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Копирайт */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Якутские ножи. Все права защищены.
              </p>
            </div>

            {/* Номер телефона */}
            <div className="flex items-center">
              <a 
                href="tel:+79142209279" 
                className="text-white text-lg font-semibold hover:text-amber-400 transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (914) 220-92-79
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;