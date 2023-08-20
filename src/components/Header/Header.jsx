function Header() {
    //aqui vai ser feito um map quando for consumir 
    //a api e listar as moedas
    return(
        <div className="containerHeader">
            <div className="containerHeaderCoins">
                <div className="containerCoinsImage">
                    <img src="#" alt="Coin" />
                    <span>BTC</span>
                </div>
                <div className="containerCoinsValues">
                    <span>$1.00</span>
                    <span>^0.10%</span>
                </div>
            </div>
        </div>  
    )
}

export default Header;