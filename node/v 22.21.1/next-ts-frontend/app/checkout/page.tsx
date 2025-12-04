export const metadata = {
  title: "Checkout | ShopSphere",
};

export default function CheckoutPage() {
  return (
    <section className="section">
      <header className="section-header">
        <h1>Checkout</h1>
        <p className="muted">This is a UI-only demo checkout form.</p>
      </header>

      <form className="checkout-grid">
        <div className="checkout-column">
          <h2>Billing details</h2>
          <div className="form-grid">
            <label>
              Full name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Company (optional)
              <input type="text" placeholder="Company name" />
            </label>
            <label>
              GSTIN (optional)
              <input type="text" placeholder="GST number" />
            </label>
          </div>
        </div>

        <div className="checkout-column">
          <h2>Payment</h2>
          <div className="form-grid">
            <label>
              Card number
              <input type="text" placeholder="4242 4242 4242 4242" />
            </label>
            <label>
              Name on card
              <input type="text" placeholder="Cardholder name" />
            </label>
            <div className="form-row-inline">
              <label>
                Expiry
                <input type="text" placeholder="MM/YY" />
              </label>
              <label>
                CVV
                <input type="password" placeholder="•••" />
              </label>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-block">
            Place order (demo)
          </button>
          <p className="muted-small">
            This is just frontend UI. Plug in Razorpay, Stripe, or your gateway here.
          </p>
        </div>
      </form>
    </section>
  );
}
