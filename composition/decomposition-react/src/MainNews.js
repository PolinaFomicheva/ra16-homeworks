//Создается компонет для работы с новостной сводуой на основе полученных данных
function MainNews(props) {
    return(
        <>
            <div className="heder-conteiner">
                <ul className="nav_news">
                    <li className="nav_news__item"><a href="#">Сейчас в СМИ</a></li>
                    <li className="nav_news__item"><a href="#">В Германии</a></li>
                    <li className="nav_news__item"><a href="#">Рекомендуем</a></li>
                </ul>
                <span className="today_date"></span>
                <div className="stocks">
                    <a href="#" className="stocks_item"></a>
                    <a href="#" className="stocks_item"></a>
                    <a href="#" className="stocks_item"></a>
                </div>
            </div>
            {props.array.map(item => <NewsItem key={item.id} img={item.img} title={item.title}/>)}
            
        </>
    )
}

function NewsItem(props) {
    return(
        <li key={props.key}>
            <img src={props.img} alt="Ошибка"/>
            <span>{props.title}</span>
        </li>
    );
}
export default MainNews;