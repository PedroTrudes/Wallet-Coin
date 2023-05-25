import { useEffect, useState } from "react";
import api from "../../service/api/api";

function ListCoins () {
    const [coins, setCoins] = useState([]);
    const getCoins = async() => {
        try {
            const response = await api.get('/coins/list');
            const data = response.data;
            setCoins(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getCoins();
        }, 100)
    }, [])

    return(
        <>
        {coins.length === 0 ? (
            <div>Não a registros</div>
        ) : (
            <div>{
            coins.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))
            }</div>
        )}
        </>
    )
}

export default ListCoins