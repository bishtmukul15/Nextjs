// /app/products/[id]/page.js
import Link from "next/link";

export const revalidate = 10;

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>

      <img
        src={product.thumbnail}
        width={250}
        style={{ borderRadius: "10px", marginTop: "20px" }}
      />

      <br />
      <br />
      <Link href="/products">← Back to Products</Link>
    </div>
  );
}
