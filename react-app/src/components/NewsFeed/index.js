import { useEffect, useState } from "react"
import ArticleTile from "./ArticleTile"

const NewsFeed = () => {

    const [generalNews, setGeneralNews] = useState([])


    useEffect(()=> {
        getNews()
    }, [])

    const getNews = () => {
        const url = `https://finnhub.io/api/v1/news?category=general&token=c4uiisiad3ie1t1fvu90`
        fetch(url)
            .then((res)=> res.json())
            .then((res)=>setGeneralNews(res))
    }

    return(
        <div className="newsFeed__container">
            {generalNews.map(article => (


                <ArticleTile article={article} key={article.id}></ArticleTile>

            ))}
        </div>
    )
}

export default NewsFeed
