import styles from './BottomNavigation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function BottomNavigation() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.iconHolder}>
                    <Link href='/'>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="27.1122" cy="27.095" rx="27.1122" ry="27.095" fill="#8229E0"/>
                        <path d="M20.1236 28.1254C20.876 31.047 23.5298 33.2057 26.6881 33.2057C29.8464 33.2057 32.5002 31.047 33.2527 28.1254M25.0236 9.098L13.5309 18.0311C12.7626 18.6282 12.3785 18.9268 12.1018 19.3007C11.8567 19.6319 11.6741 20.0051 11.5629 20.4018C11.4375 20.8496 11.4375 21.3359 11.4375 22.3086V34.5605C11.4375 36.4573 11.4375 37.4057 11.8069 38.1302C12.1318 38.7675 12.6503 39.2856 13.2879 39.6103C14.0129 39.9795 14.9619 39.9795 16.8599 39.9795H36.5163C38.4144 39.9795 39.3634 39.9795 40.0883 39.6103C40.726 39.2856 41.2445 38.7675 41.5694 38.1302C41.9388 37.4057 41.9388 36.4573 41.9388 34.5605V22.3086C41.9388 21.3359 41.9388 20.8496 41.8133 20.4018C41.7022 20.0051 41.5196 19.6319 41.2745 19.3007C40.9977 18.9268 40.6136 18.6282 39.8454 18.0311L28.3527 9.098C27.7573 8.63526 27.4597 8.4039 27.131 8.31496C26.841 8.23649 26.5353 8.23649 26.2453 8.31496C25.9166 8.4039 25.6189 8.63526 25.0236 9.098Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </Link>
                </div>
                <div className={styles.iconHolder}>
                    <Link href='/'>
                        <Image  src=""
                                alt=""
                                width={50}
                                height={50}
                                className={styles.icon}
                        />
                    </Link>
                </div>
                <div className={styles.iconHolder}>
                    <Link href='/'>
                        <Image  src=""
                                alt=""
                                width={50}
                                height={50}
                                className={styles.icon}
                        />
                    </Link>
                </div>
                <div className={styles.iconHolder}>
                    <Link href='/'>
                        <Image  src=""
                                alt=""
                                width={50}
                                height={50}
                                className={styles.icon}
                        />
                    </Link>
                </div>
                <div className={styles.iconHolder}>
                    <Link href='/'>
                        <Image  src=""
                                alt=""
                                width={50}
                                height={50}
                                className={styles.icon}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}


