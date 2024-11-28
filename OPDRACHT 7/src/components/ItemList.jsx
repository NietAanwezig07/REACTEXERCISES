import { useState } from "react"; 
import data from "./data"
import Item from "./Item";

const ItemList = () => {

    const [items, setItems] = useState(data)

    return (
        <>
        {
            items.map((item) => (
                <Item
                category={item.category}
                title={item.title}
                price={item.price}
                desc={item.desc}
                image={item.image}
                />
            ))
        }
        </>
      );
}
 
export default ItemList;