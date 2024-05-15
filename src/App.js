// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa la función useTranslation
import LanguageToggle from './LanguageToggle'; // Importa el componente LanguageToggle
import logo from './logo.svg';
import './App.css';

function App() {
  const { t, i18n } = useTranslation(); // Inicializa useTranslation

  const toggleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('app.edit')} <code>src/App.js</code> {t('app.save')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('app.learn_react')}
        </a>
        <LanguageToggle toggleLanguage={toggleLanguage} /> {/* Agrega el componente LanguageToggle */}
      </header>
    </div>
  );
}

export default App;

