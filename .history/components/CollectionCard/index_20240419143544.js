import styles from './CollectionCard.module.css'
import Image from "next/image"
import Link from "next/link"

export default function CollectionCard({
    title = "",
    largePhoto="",
    topLeftPhoto="",
    topRightPhoto="",
    bottomLeftPhoto="",
    bottomRightPhoto="",
    alt
}) {

    return(
        <>
            <div className={styles.cardHolder}>
                <div className={styles.photoHolder}>
                    <Image 
                        src={largePhoto}
                        alt={alt}
                        width={185}
                        height={200}
                        className={styles.large}
                    />
                </div>
                <div className={styles.textHolder}>
                    <div className={styles.name}>
                        {title}
                    </div>
                    <Image 
                        src={'/images/next-light.png'}
                        alt="next arrow"
                        width={40}
                        height={55}
                    />
                </div>
            </div>
        </>
    )
}



