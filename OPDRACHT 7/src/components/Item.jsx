const Item = ({category, title, price, image, desc}) => {
    return ( 
        <>
        <h2>{title}</h2>
        <img src={image} alt="" />
        <p>{desc}</p>
        <h3>{price}</h3>
        </>
     );
}
 
export default Item;