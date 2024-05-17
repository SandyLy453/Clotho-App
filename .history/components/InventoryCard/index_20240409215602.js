import Image from "next/image";
import { inventory } from "@/Data/inventory";
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
                <div>
                    <Image/>
                    <p>{title}</p>
                </div>
                
            </fieldset>
        </>
    )

}