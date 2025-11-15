// /app/products/page.js
import Link from "next/link";

export const revalidate = 10; // revalidate every 10 sec

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div>
      <h1>Products List</h1>

      <ul>
        {data.products.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <Link href={`/products/${p.id}`}>
              {p.title} — ₹{p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
