
import BlockStyles from "../styles/components/NewsBlock.module.css"




const NewsBlock = () => {

    return (
        <section className={BlockStyles.news_component}>
            <h2>News Section</h2>
            <div className={BlockStyles.card_container}>
                <div className={BlockStyles.news_card}>

                </div> 
                <div className={BlockStyles.news_card}>

                </div>
                <div className={BlockStyles.news_card}>

                </div>
                <div className={BlockStyles.news_card}>

                </div>
            </div>

        </section>
    )
}

export default NewsBlock
