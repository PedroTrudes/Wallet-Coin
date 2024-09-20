import "./style.css"

function NewsList({newslatterItens}) {

    //criar um JSON para mostrar essa informações no JS e fazer o scroll

    return(
        <>
        {
            newslatterItens.map((item) => (
            <div className="cardNews">
                <span className="cardNewsData">{item.dataPost}</span>
                <span className="cardNewsTitulo">{item.tituloPost}</span>
                <p className="cardNewsDescription">{item.descriptionPost}</p>
            </div>

            ))
        }
        </>
    )
}

export default NewsList;