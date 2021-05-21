import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav className="navbar is-link">
            <div className="container is-fluid">
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button
                                className="button is-info is-inverted"
                                onClick={_ => {
                                    const theHeight = document.body.scrollHeight
                                    window.scrollTo({ top: theHeight , behavior: 'smooth' })
                                }}
                            >
                                <span className="icon">
                                    <FontAwesomeIcon icon={["fab", "github"]} />
                                </span>
                                <span>Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
