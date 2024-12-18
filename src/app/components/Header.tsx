import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='logo'>Wall Clock Wonders</h1>
      <nav className='nav'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/watches">Watches</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart className='cart-icon' />
      </nav>
    </header>
  );
};

export default Header;
