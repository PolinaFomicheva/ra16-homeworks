//Создается компонент для добавления и редактирования рекламы страницы
function Ads(props) {
    let marking = null;
    if(props.name === "up-conteiner") {
        marking = 
            (<div>
                <img alt="..."></img>
                <h1></h1>
                <span></span>
            </div>);
    }
    if(props.name === "search-conteiner") {
        marking = 
            (<div>
                <img alt="..."></img>
            </div>);
    }
    return(
        marking
    );
}

export default Ads;