// // 'use client'

// // import React from 'react'
// // import Link from 'next/link'

// // import { Header as HeaderType, User } from '../../../../payload/payload-types'
// // import { useAuth } from '../../../_providers/Auth'
// // import { CartLink } from '../../CartLink'
// // import { CMSLink } from '../../Link'

// // import classes from './index.module.scss'

// // export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
// //   const navItems = header?.navItems || []
// //   const { user } = useAuth()

// //   return (
// //     <nav
// //       className={[
// //         classes.nav,
// //         // fade the nav in on user load to avoid flash of content and layout shift
// //         // Vercel also does this in their own website header, see https://vercel.com
// //         user === undefined && classes.hide,
// //       ]
// //         .filter(Boolean)
// //         .join(' ')}
// //     >
// //       {navItems.map(({ link }, i) => {
// //         return <CMSLink key={i} {...link} appearance="none" />
// //       })}
// //       <CartLink />
// //       {user && <Link href="/account">Account</Link>}
// //       {!user && (
// //         <React.Fragment>
// //           <Link href="/login">Login</Link>
// //           <Link href="/create-account">Create Account</Link>
// //         </React.Fragment>
// //       )}
// //     </nav>
// //   )
// // }
// // src/app/_components/Header/Nav/index.tsx
// 'use client'

// import React from 'react'
// import Link from 'next/link'

// import { Header as HeaderType, User } from '../../../../payload/payload-types'
// import { useAuth } from '../../../_providers/Auth'
// import { CartLink } from '../../CartLink'
// import { CMSLink } from '../../Link'

// import classes from './index.module.scss'

// export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
//   const navItems = header?.navItems || []
//   const { user } = useAuth()

//   return (
//     <nav className={classes.nav}>
//       <div className={classes.left}>
//         <button className={classes.categoriesButton}>
//           <span className={classes.icon}>☰</span>
//           All categories
//           <span className={classes.arrow}>▼</span>
//         </button>
//       </div>
//       <div className={classes.center}>
//         {navItems.map(({ link }, i) => {
//           return (
//             <CMSLink key={i} {...link} appearance="none" className={classes.navLink}>
//               {link.label === 'Shop by Brand' && <span className={classes.newBadge}>New!</span>}
//             </CMSLink>
//           )
//         })}
//       </div>
//       <div className={classes.right}>
//         <button className={classes.garageButton}>
//           <span className={classes.garageIcon}>🚗</span>
//           My garage
//           <span className={classes.arrow}>▼</span>
//         </button>
//         <CartLink />
//         {user && <Link href="/account">Account</Link>}
//         {!user && (
//           <>
//             <Link href="/login">Login</Link>
//             <Link href="/create-account">Create Account</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }

// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import { useAuth } from '../../../_providers/Auth'
// import { CartLink } from '../../CartLink'
// import classes from './index.module.scss'

// export const HeaderNav: React.FC = () => {
//   const { user } = useAuth()

//   return (
//     <nav className={classes.nav}>
//       <div className={classes.left}>
//         <button className={classes.categoriesButton}>
//           <span className={classes.icon}>☰</span>
//           All categories
//           <span className={classes.arrow}>▼</span>
//         </button>
//       </div>
//       <div className={classes.center}>
//         <Link href="/" className={classes.navLink}>Home</Link>
//         <Link href="/shop" className={classes.navLink}>Shop</Link>
//         <Link href="/shop-by-brand" className={`${classes.navLink} ${classes.newBadge}`}>Shop by Brand</Link>
//         <Link href="/shop-by-categories" className={classes.navLink}>Shop by Categories</Link>
//         <Link href="/blog" className={classes.navLink}>Blog</Link>
//         <Link href="/about-us" className={classes.navLink}>About us</Link>
//         <Link href="/contact-us" className={classes.navLink}>Contact us</Link>
//       </div>
//       <div className={classes.right}>
//         <button className={classes.garageButton}>
//           <span className={classes.garageIcon}>🚗</span>
//           My garage
//           <span className={classes.arrow}>▼</span>
//         </button>
//         <CartLink />
//         {user && <Link href="/account">Account</Link>}
//         {!user && (
//           <>
//             <Link href="/login">Login</Link>
//             <Link href="/create-account">Create Account</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }


'use client'

import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import classes from './index.module.scss'

export const HeaderNav: React.FC = () => {
  const { user } = useAuth()

  return (
    <>
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
          <CartLink />
          {user && <Link href="/account">Account</Link>}
          {!user && (
            <>
              <Link href="/login">Login</Link>
              <Link href="/create-account">Create Account</Link>
            </>
          )}
        </div>
      </nav>
      <div className={classes.mainContent}>
        {/* Your main content goes here */}
      </div>
    </>
  )
}
