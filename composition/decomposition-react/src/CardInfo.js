//Создается компонент с информационными карточками на основе переданных данных
function CardInfo(props) {
    return(
        <>
            <div className="card card-weather">
                <h2>{props.array.weather.title}</h2>
                <div>
                    <img src={props.array.weather.img} alt="..."></img>
                    <div>
                        <span>{props.array.weather.morning}</span>
                        <span>{props.array.weather.evening}</span>
                    </div>
                </div>
            </div>
            <div className="card card-visited">
                <h2>{props.array.visited.title}</h2>
                <div>
                    {props.array.visited.data.map(item => <span>{item.text}</span>)}
                </div>
            </div>
            <div className="card card-country">
                <h2>{props.array.germany.title}</h2>
                <div>
                    {props.array.germany.text}
                </div>
            </div>
            <div className="card card-tv__program">
                <h2>{props.array.tv.title}</h2>
                {props.array.tv.data.map(item => {
                    <div>
                        <span>{item.time}</span>
                        <span>{item.name}</span>
                        <span>{item.channel}</span>
                    </div>
                })}
            </div>
            <div className="card card-broadcast">
                <h2>{props.array.broadcast.title}</h2>
                {props.array.broadcast.data.map(item => {
                    <div>
                        <button></button>
                        <span>{item.name}</span>
                        <span>{item.channel}</span>
                    </div>
                })}
            </div>
        </>
    );
}

export default CardInfo;
