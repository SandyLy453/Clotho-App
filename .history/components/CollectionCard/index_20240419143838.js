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
    altOne,
    altTwo,
    altThree,
    altFour,
    altFive
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

                    <Image 
                        src={topLeftPhoto}
                        alt={alt}
                        width={90}
                        height={95}
                        className={styles.topSmall}
                    />
                    <Image 
                        src={topRightPhoto}
                        alt={alt}
                        width={90}
                        height={95}
                        className={styles.topSmall}
                    />
                    <Image 
                        src={bottomLeftPhoto}
                        alt={alt}
                        width={90}
                        height={95}
                        className={styles.bottomSmall}
                    />
                    <Image 
                        src={bottomRightPhoto}
                        alt={alt}
                        width={90}
                        height={95}
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



