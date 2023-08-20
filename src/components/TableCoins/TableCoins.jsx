function TableCoins() {
    return(
        <>
        <div className="containerCoinsInput">
            <input type="text" />
            <button>icon</button>
        </div>
        <div className="containerTableList">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Coin</th>
                        <th>price</th>
                        <th>1H</th>
                        <th>24H</th>
                        <th>7D</th>
                        <th>24H Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="#" alt="Logo coin" />
                            name coin
                        </td>
                        <td>
                            $11111
                        </td>
                        <td>
                            -0.0%
                        </td>
                        <td>
                            0.2%
                        </td>
                        <td>
                            -6.0%
                        </td>
                        <td>
                            $222222
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        </>
    )
}

export default TableCoins