export const metadata = {
  title: "Contact | Sample Next.js App",
};

export default function ContactPage() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>
        This is a simple static contact page. Replace this with a real form
        or integrate with your backend / API.
      </p>
      <form className="form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows={4} placeholder="Type your message..." />
        </label>
        <button type="button">Submit (demo only)</button>
      </form>
    </section>
  );
}
