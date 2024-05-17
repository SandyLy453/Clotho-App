import Image from "next/image";
import { inventory } from "@/Data/inventory";
import styles from "@/components/InventoryCard/InventoryCard.module.css"

export default function InventoryCard({
    title = "title",
    content ="description",
    bgColor,
    photoId,
    alt
}) {

    const photos = inventory.photos.find(photos => photoId.id === photoId);

    return (
        <>
            <fieldset className={styles.fieldset} style={{backgroundColor: bgColor}}>
                <div className={styles.cards}>
                    <Image src={photos.image} alt={alt} height={149} width={154} className={styles.image}/>
                    <p>{title}</p>
                </div>   
            </fieldset>
        </>
    )

}