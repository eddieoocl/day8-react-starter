import ProductItem from "./ProductItem";

const ProductCategory = () => {
    const productItems = [
        {
            name: "Football",
            price: 49.99,
            status: false,
        },
        {
            name: "Football",
            price: 49.99,
            status: true,
        },
        {
            name: "Football",
            price: 49.99,
            status: false,
        },
        {
            name: "Football",
            price: 49.99,
            status: true,
        },
        {
            name: "Football",
            price: 49.99,
            status: false,
        },
    ];

    return (
        <div>
            {productItems.map((productItem, index) => (
                <ProductItem key={index} productItem={productItem} />
            ))}
        </div>
    );
};

export default ProductCategory;
