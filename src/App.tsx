import { InstantSearch, Stats } from 'react-instantsearch-dom'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import SearchBox from './Components/SearchBox/SearchBox'
import HitsComponent from './Components/Hit/HitComponent'
import CustomPagination from './Components/Pagination/Pagination'
import CustomMenu from './Components/Menu/Menu'

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
            <section className="section">
                <div className="container">
                    <CustomMenu attribute="Degrees" />
                </div>
            </section>
            <section className="block">
                <div className="container">
                    <HitsComponent />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <CustomPagination />
                </div>
            </section>
        </InstantSearch>
    );
}

export default App;
