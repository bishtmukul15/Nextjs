import Link from "next/link";

export default function ProductsPage() {
  const products = [];

  for (let i = 1; i <= 10; i++) {
    products.push(
      <li key={i}>
        <Link href={`/products/${i}`}>Product {i}</Link>
      </li>
    );
  }

  return (
    <div>
      <h1>Products Page</h1>

      <ul>{products}</ul>
    </div>
  );
}
