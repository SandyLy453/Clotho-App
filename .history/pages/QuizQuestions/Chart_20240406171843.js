import styles from "../../styles/Chart.module.css";


export default function Chart() {
    return(
        <>
            <div className={styles.questionAnalysis}>
                <h1>Your Fashion Profile</h1>
                <h3>Approach to Fashion</h3>
                <p>The user's approach to fashion seems to lean towards timeless and classic styles, indicating a preference for enduring elegance and versatility in their wardrobe choices.</p>
                <h3>Priority When Shopping for Clothes</h3>
                <p>Comfort and fit are the user's primary concerns when shopping for clothes, suggesting a practical approach to fashion that prioritizes ease of wear.</p>
                <h3>Types of Events for Dressing Up</h3>
                <p>The user tends to dress up for casual outings with friends, indicating a preference for relaxed and informal settings where comfort and style can coexist effortlessly.</p>
                <h3>Wardrobe Organization</h3>
                <p>The user organizes their wardrobe primarily by clothing type, reflecting a functional approach to organizing their fashion essentials.</p>
                <h3>Challenges in Choosing Outfits</h3>
                <p>Finding the right fit and balancing comfort with fashion appear to be the user's main challenges when selecting outfits, indicating a desire for clothing that not only looks good but also feels comfortable to wear.</p>
            </div>
            <div>
                <h2>Fashion Trend Recommendations</h2>
                <p>Invest in timeless pieces: tailored blazers, crisp button-down shirts, and well-fitted denim jeans</p>
                <p>Choose comfortable dress-ups: relaxed-fit trousers, oversized knitwear, and flowy midi dresses</p>
                <p>Prepare versatile essentials: striped tops, camel coats, and black ankle boots</p>
            </div>
        </>
    )
}