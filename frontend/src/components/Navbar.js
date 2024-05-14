// src/components/Navbar.js

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [activePage, setActivePage] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Get the current pathname and set the activePage state
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-[#CECE5A] h-[8vh] flex justify-between px-4 justify-center items-center">
          <div className='h-full flex space-x-24 ml-32 items-center '>
              <NavItem to="/" isActive={activePage === '/'}>Accueil</NavItem>
              <NavItem to="/calculer" isActive={activePage === '/calculer'}>Calculer</NavItem>
              {/* <NavItem to="/FAQ" isActive={activePage === '/FAQ'}>FAQ</NavItem>
              <NavItem to="/Parametres" isActive={activePage === '/Parametres'}>Parametres</NavItem>
              <NavItem to="/Actualites" isActive={activePage === '/Actualites'}>Actualites</NavItem> */}
              <NavItem to="/account" isActive={activePage === '/account'}>Compte</NavItem>

          </div>
    </div>
  );
}

function NavItem({ to, children, isActive }) {
    // Check if it's "Se Connecter"
 
  
    return (
      <div className='h-full flex justify-center items-center'>
        <Link to={to} className={`text-black aileron h-full w-32 text-center flex items-center justify-center px-6 ${isActive ? 'bg-[#C51605] text-white' : 'hover:bg-gray-300'}`}>{children}</Link>
      </div>
    );
  }

export default Navbar;
