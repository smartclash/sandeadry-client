import { InstantSearch, Stats } from 'react-instantsearch-dom'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import SearchBox from './Components/SearchBox/SearchBox'
import HitsComponent from './Components/Hit/HitComponent'
import CustomPagination from './Components/Pagination/Pagination'
import Navbar from './Components/SideNav/Navbar'

const searchClient = instantMeiliSearch(
    process.env.REACT_APP_MEILISEARCH_HOST || "",
    process.env.REACT_APP_MEILISEARCH_KEY || ""
)

const App = () => {
    return (
        <InstantSearch indexName="mcqs" searchClient={searchClient}>
            <section className="hero is-small is-link">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Sandeadry</h1>
                        <h2 className="subtitle">Search through all sanfoundry's MCQ in milliseconds</h2>
                        <SearchBox />
                        <div className="mt-4">
                            <Stats />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container is-fluid">
                <section className="section">
                    <div className="columns">
                        <div className="column is-2">
                            <Navbar />
                        </div>
                        <div className="column is-10">
                            <section className="block">
                                <HitsComponent />
                            </section>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="footer">
                <div className="columns is-mobile is-centered is-vcentered">
                    <div className="column is-narrow">
                        <CustomPagination />
                    </div>
                </div>
                <div className="content has-text-centered mt-5">
                    <p>
                        <strong>Sandeadry</strong>, an open source software by <a href="https://alphaman.me">Karan Sanjeev</a>.
                    </p>
                    <p>
                        Data in this website is solely owned by <a href="https://sanfoundry.com/">Sanfoundry</a>
                    </p>
                    <p>
                        <a href="https://github.com/smartclash/Sandeadry">Backend Code</a> | {' '}
                        <a href="https://github.com/smartclash/Sandeadry-client">Client Code</a> | {' '}
                        <a href="https://github.com/smartclash/">GitHub</a> | {' '}
                        <a href="https://twitter.com/xXAlphaManXx">Twitter</a>
                    </p>
                </div>
            </footer>
        </InstantSearch>
    );
}

export default App;
