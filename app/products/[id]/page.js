export default function ProductDetails({ params }) {
  const { id } = params;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",

        marginTop: "20px",
      }}
    >
      <h1>Product {id} details page — content coming soon!</h1>
    </div>
  );
}
