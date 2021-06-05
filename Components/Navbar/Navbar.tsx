import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar is-link">
      <div className="container is-fluid">
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a
                className="button is-info is-inverted"
                href={process.env.NEXT_PUBLIC_FRONTEND_GITHUB}
                target="_newtab"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </span>
                <span>Github</span>
              </a>
            </div>
            <div className="navbar-item">
              <a
                className="button is-danger is-inverted"
                href="https://www.buymeacoffee.com/xXAlphaManXx"
                target="_newtab"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={["fas", "donate"]} />
                </span>
                <span>Donate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
