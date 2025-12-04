import Link from "next/link";

type CartItem = {
  name: string;
  price: number;
  qty: number;
};

const mockItems: CartItem[] = [
  {
    name: "Infra Starter Pack",
    price: 8999,
    qty: 1,
  },
  {
    name: "DevOps CI/CD Toolkit",
    price: 4999,
    qty: 1,
  },
];

export const metadata = {
  title: "Cart | ShopSphere",
};

export default function CartPage() {
  const subtotal = mockItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return (
    <section className="section">
      <header className="section-header">
        <h1>Your cart</h1>
        <p className="muted">Demo cart with static items you can style and extend.</p>
      </header>

      <div className="cart-layout">
        <div className="cart-items">
          {mockItems.map((item) => (
            <article key={item.name} className="cart-row">
              <div>
                <h3>{item.name}</h3>
                <p className="muted-small">Qty: {item.qty}</p>
              </div>
              <p>₹{item.price.toLocaleString()}</p>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h3>Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>GST (18%)</span>
            <span>₹{gst.toLocaleString()}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <Link href="/checkout" className="btn btn-primary btn-block">
            Continue to checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
