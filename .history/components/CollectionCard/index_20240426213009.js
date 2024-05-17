import styles from './CollectionCard.module.css'
import Image from "next/image"
import Link from "next/link"

export default function CollectionCard({
    title = "Collection Name",
    largePhoto="",
    topLeftPhoto="",
    topRightPhoto="",
    bottomLeftPhoto="",
    bottomRightPhoto="",
    altOne = "photo 1",
    altTwo = "photo 2",
    altThree = "photo 3",
    altFour = "photo 4",
    altFive = "photo 5",
    onClick,
    link = '/'
}) {

    return(
        <>
            <div className={styles.cardHolder}>
                <div className={styles.photoHolder}>
                    <Image 
                        src={largePhoto}
                        alt={altOne}
                        width={180}
                        height={190}
                        className={styles.large}
                    />
                    <div className={styles.smallBox}>
                        <div className={styles.quater}>
                            <div className={styles.pairTop}>
                                <Image 
                                    src={topLeftPhoto}
                                    alt={altTwo}
                                    width={90}
                                    height={90}
                                    className={styles.topSmall}
                                />
                                <Image 
                                    src={topRightPhoto}
                                    alt={altThree}
                                    width={90}
                                    height={90}
                                    className={styles.topSmall}
                                />
                            </div>
                            <div className={styles.pair}>
                                <Image 
                                    src={bottomLeftPhoto}
                                    alt={altFour}
                                    width={90}
                                    height={90}
                                    className={styles.bottomSmall}
                                />
                                <Image 
                                    src={bottomRightPhoto}
                                    alt={altFive}
                                    width={90}
                                    height={90}
                                    className={styles.bottomSmall}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Link href={link} className={styles.link}>
                    <div className={styles.textHolder} onClick={onClick}>
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
                </Link>
            </div>
        </>
    )
}



