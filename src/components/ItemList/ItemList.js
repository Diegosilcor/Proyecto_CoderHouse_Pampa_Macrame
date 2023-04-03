/* import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = () => {
    return (
        <div className="item_list">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    )
}

export default ItemList */

import Item from "../Item/Item"
import "./ItemList.css"
import "../AsyncMock/AsyncMock"

const ItemList = ({ products }) => {
    return (
        <div className="item_list">
            {products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} id={prod.id} description={prod.description} price={prod.price} />)}
        </div>
    )
}

export default ItemList