'use client'

import React, { useState, Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { Label } from '../../_components/Label'

import classes from './index.module.scss'

export const CustomHeroCatalog: React.FC<Page['hero']> = ({ richText, media, links }) => {

  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ year, make, model, engine });
  };
  
  const mediaUrl = 
   media &&
   typeof media !== 'string' && `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`
  return (
    <section className={classes.hero}>
      <div className={classes.heroWrapper} style={{ backgroundImage: `url(${mediaUrl})`}}>

        <div className={classes.heroTextBox}>
          <RichText content={richText} />
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit}>
              <div className={classes.selectField}>
                <Label>Year
                  <select value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="2022">2022</option>
                    {/* Add more years as needed */}
                  </select>
                </Label>
              </div>
              <div className={classes.selectField}>
                <Label>Make
                  <select value={make} onChange={(e) => setMake(e.target.value)}>
                    <option value="Subaru">Subaru</option>
                    {/* Add more makes as needed */}
                  </select>
                </Label>
              </div>
              <div className={classes.selectField}>
                <Label>Model
                  <select value={model} onChange={(e) => setModel(e.target.value)}>
                    <option value="Legacy">Legacy</option>
                    {/* Add more models as needed */}
                  </select>
                </Label>
              </div>
              <div className={classes.selectField}>
                <Label>Engine
                  <select value={engine} onChange={(e) => setEngine(e.target.value)}>
                    <option value="4 Cyl 2.4L">4 Cyl 2.4L</option>
                    {/* Add more engine types as needed */}
                  </select>
                </Label>
              </div>
              <button className={classes.searchButton} type="submit">Search</button>
              
            </form>
          </div>
          
        </div>
        
        
      </div>
    </section>
  )
}