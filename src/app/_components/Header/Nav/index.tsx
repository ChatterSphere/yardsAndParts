'use client'

import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink';
import classes from './index.module.scss'

export const HeaderNav: React.FC = () => {
  const { user } = useAuth()

    // Define inline styles
    const linkStyle = {
      padding: '8px 16px',
      borderRadius: '4px',
      fontSize: '20px',
      textDecoration: 'none',
      color: 'white',
      transition: 'background-color 0.3s, box-shadow 0.3s',
      margin: '0 5px',
      font: 'Helvetica'

      
    };
  
    const cartStyle = {
      ...linkStyle,
      backgroundColor: '#034C8B',  // green background for cart
      textDecoration: 'none' // Important to ensure no underline

      
  };
  
    const loginStyle = {
      ...linkStyle,
      backgroundColor: '#034C8B',
    };
  
    const accountStyle = {
      ...linkStyle,
      backgroundColor: '#034C8B',
    };

    

    // CartLink.js or CartLink.tsx



  return (
    <>

<>
<>



  {user ? (
    <Link href="/account" style={accountStyle}>Account</Link>
  ) : (
    <>
      <Link href="/login" style={loginStyle}>Login</Link>
      <Link href="/create-account" style={accountStyle} >Create Account</Link>
    </>
  )}
</>


</>







      <nav className={classes.nav}>
        <div className={classes.left}>



          
          <button className={classes.categoriesButton}>
            <span className={classes.icon}>☰</span>
            All categories
            <span className={classes.arrow}>▼</span>
          </button>
        </div>

        
        <div className={classes.center}>
          <Link href="/" className={classes.navLink}>Home</Link>
          <Link href="/shop" className={classes.navLink}>Shop</Link>
          <Link href="/shop-by-brand" className={`${classes.navLink} ${classes.newBadge}`}>Shop by Brand</Link>
          <Link href="/shop-by-categories" className={classes.navLink}>Shop by Categories</Link>
          <Link href="/blog" className={classes.navLink}>Blog</Link>
          <Link href="/about-us" className={classes.navLink}>About us</Link>
          <Link href="/contact-us" className={classes.navLink}>Contact us</Link>
        </div>

        <div className={classes.right}>
          <button className={classes.garageButton}>
            <span className={classes.garageIcon}>🚗</span>
            My garage
            <span className={classes.arrow}>▼</span>
          </button>

      
          
        </div>
      </nav>
      <div className={classes.mainContent}>
        {/* Your main content goes here */}
      </div>
    </>
  )
}
