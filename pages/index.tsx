import Head from 'next/head'
import { Stats, Configure } from 'react-instantsearch-dom'
import Navbar from '../Components/Sidenav/Navbar'
import { withInstantSearch } from 'next-instantsearch'
import SearchBox from '../Components/Searchbox/Searchbox'
import HitsComponent from '../Components/Hit/HitComponent'
import Pagination from '../Components/Pagination/Pagination'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

const searchClient = instantMeiliSearch(
    process.env.NEXT_PUBLIC_MEILISEARCH_HOST || 'http://127.0.0.1:7700', 
    process.env.NEXT_PUBLIC_MEILISEARCH_KEY || ''
)

export function Home() {
    return (
        <div>
            <Head>
                <meta name="theme-color" content="#3273DC" />
                <meta name="description" content="Search through all sanfoundry's MCQ in milliseconds. Filter through subjects, topics and even degrees" />
                <title>Choicez | Search through 10 thousand MCQs in seconds</title>
                {process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? (
                    <script async defer src="https://owo.alphaman.me/latest.js"></script>
                ) : ''}
            </Head>
            <Configure hitsPerPage={10} />
            <section className="hero is-small is-link">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">{process.env.NEXT_PUBLIC_NAME}</h1>
                        <h2 className="subtitle">Search through all sanfoundry's MCQ in milliseconds</h2>
                        <SearchBox />
                        <div className="mt-4">
                            <Stats />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container is-fluid">
                <div className="columns mt-5">
                    <div className="column is-2 is-hidden-touch">
                        <Navbar />
                    </div>
                    <div className="column is-10">
                        <HitsComponent />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container is-fluid">
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-narrow-desktop">
                            <Pagination />
                        </div>
                    </div>
                </div>
                <div className="content has-text-centered mt-5">
                    <p>
                        <strong>{process.env.NEXT_PUBLIC_NAME}</strong>, an open source software by <a href="https://alphaman.me">Karan Sanjeev</a>.
                    </p>
                    <p>
                        Data in this website is solely owned by <a href="https://sanfoundry.com/">Sanfoundry</a>
                    </p>
                    <p>
                        <a href={process.env.NEXT_PUBLIC_BACKEND_GITHUB}>Backend Code</a> | {' '}
                        <a href={process.env.NEXT_PUBLIC_FRONTEND_GITHUB}>Client Code</a> | {' '}
                        <a href="https://github.com/smartclash/">GitHub</a> | {' '}
                        <a href="https://twitter.com/xXAlphaManXx">Twitter</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default withInstantSearch({
    indexName: 'mcqs',
    //@ts-ignore
    searchClient
})(Home)
