import "./productItem.css";

const ProductItem = (props) => {
    const { productItem } = props;

    return (
        <div className="product-item-wrapper">
            <span>{productItem.name}</span>
            <span>{productItem.price}</span>
            <span>{productItem.status ? "In stock" : "Out of stock"}</span>
        </div>
    );
};

export default ProductItem;
