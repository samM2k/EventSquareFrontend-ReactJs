import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'

function AuthorizedView(onLogoutClicked) {
    
  return (
      <div>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
          </div>
          <h1>Vite + React</h1>

          <button onClick={onLogoutClicked.OnLogoutClicked}>Logout</button>

      </div>
  );
}

export default AuthorizedView;