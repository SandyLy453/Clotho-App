import Image from "next/image";
import styles from "@/components/CategoryCard/CategoryCard.module.css"

export default function CategoryCardCard({
    title = "title",
    bgColor,
    imageURL,
    alt,
    color,
    borderRadius,
    border,
    boxShadow,
}) {
    return (
        <>
            <fieldset className={styles.fieldset} style={{ color: color, backgroundColor: bgColor, boxShadow: boxShadow, borderRadius:  borderRadius, border: border}}>
                <div className={styles.cards}>
                    <Image src={imageURL} alt={alt} height={150} width={140} className={styles.image}/>
                    <p className={styles.content}>{title}</p>
                </div>   
            </fieldset>
        </>
    )

}