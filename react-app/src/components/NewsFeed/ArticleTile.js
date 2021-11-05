
import './ArticleTile.css'
const ArticleTile = ({article}) => {

    const formatDate = (date) => {
        let newDate= new Date(Date(date))
        let day = newDate.getDate()+1
        let month = newDate.getMonth()+1
        let year = newDate.getFullYear()
        let hour = newDate.getHours()
        if(hour < 10) hour= '0'+hour
        let minutes = newDate.getMinutes()
        if (minutes < 10) minutes = '0' +minutes

        let appender
        if(hour>12){
            hour-=12
            appender='PM'
        } else {
            appender='AM'
        }
        return `${month}/${day}/${year} ${hour}:${minutes} ${appender}`
    }


    return (
        <div className = 'article-tile'>
            {/* <h1>Hello from the Article Tile</h1> */}
            {/* <p>{article.category}</p> */}
            {/* <p>{article.id}</p> */}
            {/* <p>{article.related}</p> */}

            <a className='headline' href={article.url}><h1>{article.headline}</h1></a>

            <p className='date'>{formatDate(article.datetime)}</p>

            <img className='image' src={article.image} alt="not found"></img>
            <div className='article__summary'>
                <p className='summary_txt'>{article.summary}</p>
            </div>




            {/* {format data and time ^} */}
            <p> Source: {article.source}</p>






        </div>
    )
}

export default ArticleTile
