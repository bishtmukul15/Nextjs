export const metadata = {
  title: "Product Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* ---------- HEADER ---------- */}
        <header
          style={{
            background: "#1a1a1a",
            color: "white",
            padding: "18px",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          Product Store
        </header>

        {/* ---------- PAGE CONTENT (children) ---------- */}
        <main style={{ padding: "20px", minHeight: "70vh" }}>{children}</main>

        {/* ---------- FOOTER ---------- */}
        <footer
          style={{
            background: "#f2f2f2",
            padding: "12px",
            textAlign: "center",
            fontSize: "14px",
            color: "#555",
          }}
        >
          © 2025 Product Store — All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
