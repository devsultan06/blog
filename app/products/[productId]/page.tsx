export default async function ProductPage({
    params
}: { params: { productId: string } }) {
    const { productId } = params;
    return (
        <div>
            <h1>Product {productId}</h1>
            <p>This is the product page.</p>
        </div>
    );
}