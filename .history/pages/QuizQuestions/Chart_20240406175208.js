import styles from "../../styles/Chart.module.css";


export default function Chart() {

    const data = [
        {name: "Casual", value: "40&"},
        {name: "Formal", value: "25%"},
        {name: "Athletic", value: "20%"},
        {name: "Vintage", value: "10%"},
        {name: "Bohemian", value: "5%"}
    ]

    return(
        <>
            <PieChart>
                <Pie
                dateKey=""
                />
            </PieChart>
            <div className={styles.questionAnalysis}>
                <h1>Your Fashion Profile</h1>
                <h3>Approach to Fashion</h3>
                <p>Lean towards timeless and classic styles, indicating a preference for enduring elegance and versatility in your wardrobe choices.</p>
                <h3>Priority When Shopping for Clothes</h3>
                <p>Comfort and fit are your primary concerns, suggesting a practical approach to fashion that prioritizes ease of wear.</p>
                <h3>Types of Events for Dressing Up</h3>
                <p>Dress up for casual outings with friends, indicating a preference for relaxed and informal settings where comfort and style can coexist effortlessly.</p>
                <h3>Wardrobe Organization</h3>
                <p>Organizes their wardrobe primarily by clothing type approaches to organizing Your fashion essentials.</p>
                <h3>Challenges in Choosing Outfits</h3>
                <p>Finding the right fit and balancing comfort with fashion, suggesting comfortable wearing.</p>
            </div>
            <div>
                <h2>Fashion Trend Recommendations</h2>
                <ul>
                    <li className={styles.bulletPointJean}>Invest in timeless pieces: tailored blazers, crisp button-down shirts, and well-fitted denim jeans</li>
                    <li className={styles.bulletPointDress}>Choose comfortable dress-ups: relaxed-fit trousers, oversized knitwear, and flowy midi dresses</li>
                    <li className={styles.bulletPointTShirt}>Prepare versatile essentials: striped tops, camel coats, and black ankle boots</li>
                    <li className={styles.bulletPointShoes}>Incorporate personalized touches: custom monogramming, and handmade jewelry</li>
                </ul>
            </div>
        </>
    )
}