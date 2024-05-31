import React from 'react';
import Link from 'next/link';
import { Header as HeaderType } from '../../../payload/payload-types';
import { fetchHeader } from '../../_api/fetchGlobals';
import { Gutter } from '../Gutter';
import { HeaderNav } from './Nav';
import classes from './index.module.scss';


import { useAuth } from '../../_providers/Auth'
import { CartLink } from '../CartLink';

export async function Header() {




  
  let header: HeaderType | null = null;

  try {
    header = await fetchHeader();
    console.log(header);  
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <header className={classes.header}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            <img
              className={classes.logo}
              alt="Yards & Parts Logo"
              src="/Yards_logo.jpg"
            />
          </Link>
          <div className={classes.searchBar}>
            <select className={classes.categorySelect}>
              <option value="">Select Category</option>
              {/* Populate with categories */}
            </select>
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Enter a keyword or product SKU"
            />








         

            
         
          </div>

          <div className={classes.center}>
   
        </div>




          
          <HeaderNav header={header} />
        </Gutter>
      </header>
    </>
  );
}