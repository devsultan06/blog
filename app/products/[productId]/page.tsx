type ProductPageProps = {
    params: {
      productId: string;
    };
  };
  
  export default async function ProductPage({ params }: ProductPageProps) {
    const { productId } = params;
    return (
      <div>
        <h1>Product {productId}</h1>
        <p>This is the product page.</p>
      </div>
    );
  }
  