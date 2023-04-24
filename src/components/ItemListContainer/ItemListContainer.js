/* import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
    return(
        <div>
            <ItemList/>
        </div>
    )
}
export default ItemListContainer */

import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../AsyncMock/AsyncMock"
import { useParams } from "react-router-dom"
import { DotWave } from '@uiball/loaders'

const ItemListContainer = ({ tittleItemList }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        document.title = "Pampa Macramé | Productos"
    })

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return (
            <div className="uiball_loader">
                <DotWave size={110} speed={1} color="#7B3F02"/>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h1 className="tittleItemList">{tittleItemList} </h1>
                <ItemList products={products} />
            </div>
        </div>
    )
}
export default ItemListContainer
