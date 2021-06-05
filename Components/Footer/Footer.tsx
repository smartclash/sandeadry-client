const Footer = () => {
  return (
    <footer className="footer mt-5 has-background-link-light">
      <div className="content has-text-centered mt-5">
        <p>
          <strong>{process.env.NEXT_PUBLIC_NAME}</strong>, an open source
          software by <a href="https://alphaman.me">Karan Sanjeev</a>.
        </p>
        <p>
          Data in this website is solely owned by{" "}
          <a href="https://sanfoundry.com/">Sanfoundry</a>
        </p>
        <p>
          <a href={process.env.NEXT_PUBLIC_BACKEND_GITHUB}>Backend Code</a> |{" "}
          <a href={process.env.NEXT_PUBLIC_FRONTEND_GITHUB}>Client Code</a> |{" "}
          <a href="https://github.com/smartclash/">GitHub</a> |{" "}
          <a href="https://twitter.com/xXAlphaManXx">Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
