import Image from "next/image";
import styles from "@/components/InventoryCard/InventoryCard.module.css"

export default function InventoryCard({
    title = "title",
    bgColor,
    imageURL,
    alt,
    color,
    borderRadius,
    borderImage,
    border,
    boxShadow,
    height,
    width,
    content,
}) {

    return (
        <>
            <fieldset className={styles.fieldset} style={{ border: border, color: color, backgroundColor: bgColor, boxShadow: boxShadow, borderRadius:  borderRadius, borderImage: borderImage}}>
                <div className={styles.cards}>
                    <Image src={imageURL} alt={alt} height={height} width={width} className={styles.image}/>
                    <p className={styles.content}>{title}</p>
                </div>   
            </fieldset>
            <div>
                <p className={styles.name}>{content}</p>
            </div>
        </>
    )

}