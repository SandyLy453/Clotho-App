import Image from "next/image";
import styles from "@/components/OutfitCard/OutfitCard.module.css";
import { inventoryTwo } from "@/Data/inventoryTwo";

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
    onClick,
    subTitle
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
                    <p className={styles.content}>{title}
                        <span className={styles.subtitle} style={{ backgroundColor: var(--)}}>{subTitle}</span>
                    </p>
                </div>   
            </fieldset>
        </>
    )

}



