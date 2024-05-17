import Image from "next/image";
import styles from "@/components/CategoryCard/CategoryCard.module.css";
import { inventoryTwo } from "@/Data/inventory";

export default function CategoryCardCard({
    title = "title",
    bgColor,
    alt,
    color,
    borderRadius,
    border,
    boxShadow,
    height,
    width,
    photoId,
    onClick
}) {

    const cardCategory = inventoryTwo.photos.find(photo => photo.id === photoId.toString());

    return (
        <>
            <fieldset 
                className={styles.fieldset} 
                onClick={onClick}
                style={{ color: color, backgroundColor: bgColor, boxShadow: boxShadow, borderRadius:  borderRadius, border: border}}
            >
                <div className={styles.cards}>
                    <Image src={cardCategory.image} alt={alt} height={height} width={width} className={styles.image}/>
                    <p className={styles.content}>{title}</p>
                </div>   
            </fieldset>
        </>
    )

}



