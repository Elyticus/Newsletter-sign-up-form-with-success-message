export default function Header() {
  return (
    <div className="flex-container">
      <div className="left-side">
        <h1 className="title-header">Stay updated!</h1>
        <p className="subtitle-header">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li className="list-header">
            <img src="images/icon-list.svg" alt="Mark icon" />
            Product discovery and building what matters
          </li>
          <li className="list-header">
            <img src="images/icon-list.svg" alt="Mark icon" />
            Measuring to ensure updates are a success
          </li>
          <li className="list-header">
            <img src="images/icon-list.svg" alt="Mark icon" />
            And much more!
          </li>
        </ul>

        <form action="">
          <label htmlFor="email">Email address</label>
          <input
            className="input-email"
            id="email"
            type="email"
            placeholder="email@company.com"
            required
          />
          <button className="submit-btn" type="button">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      <div className="right-side">
        <picture>
          <source
            media="(max-width: 799px)"
            width="100%"
            srcSet="/images/illustration-sign-up-mobile.svg"
          />
          <source
            className=""
            media="(min-width: 1024px)"
            srcSet="/images/illustration-sign-up-desktop.svg"
          />
          <img
            className="hero-image-main"
            width="100%"
            src="/images/illustration-sign-up-desktop.svg"
            alt="A responsive website image with an oragne background and computer's statistics"
          />
        </picture>
      </div>
    </div>
  );
}
