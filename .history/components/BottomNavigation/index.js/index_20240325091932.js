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


