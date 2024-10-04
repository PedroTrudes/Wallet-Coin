import "./style.css"

function NewsList({newslatterItens}) {
    console.log(newslatterItens.length)
    let currentPage = 0;
    let limitOfPage = newslatterItens.length;
    console.log(limitOfPage)
    //criar um JSON para mostrar essa informações no JS e fazer o scroll

    return(
        <>
        {
            newslatterItens[currentPage].map((item, index) => (
            <div className="cardNews" key={index}>
                <span className="cardNewsData">{item.dataPost}</span>
                <span className="cardNewsTitulo">{item.tituloPost}</span>
                <p className="cardNewsDescription">{item.descriptionPost}</p>
            </div>

            ))
        }
        <button>mais</button>
        {
            
        }
        <button>menos</button>
        </>
    )
}

export default NewsList;