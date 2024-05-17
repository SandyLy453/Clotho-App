import Image from "next/image";
import styles from "@/components/CategoryCard/CategoryCard.module.css";
import { inventory } from "@/Data/inventory";

export default function CategoryCardCard({
    title = "title",
    bgColor,
    imageURL,
    alt,
    color,
    borderRadius,
    border,
    boxShadow,
    height,
    width,
    photoId
}) {

    const cardCategory = inventory.photos.find(photo => photo.id === photoId);
    const { image, height, width } = cardCategory;

    return (
        <>
            <fieldset className={styles.fieldset} style={{ color: color, backgroundColor: bgColor, boxShadow: boxShadow, borderRadius:  borderRadius, border: border}}>
                <div className={styles.cards}>
                    <Image src={image} alt={alt} height={height} width={width} className={styles.image}/>
                    <p className={styles.content}>{title}</p>
                </div>   
            </fieldset>
        </>
    )

}