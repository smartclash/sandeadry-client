import Head from "next/head";
import Sidenav from "../Components/Sidenav/Sidenav";
import SearchBox from "../Components/Searchbox/Searchbox";
import HitsComponent from "../Components/Hit/HitComponent";
import Pagination from "../Components/Pagination/Pagination";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Stats, Configure, InstantSearch } from "react-instantsearch-dom";

const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILISEARCH_HOST || "http://127.0.0.1:7700",
  process.env.NEXT_PUBLIC_MEILISEARCH_KEY || ""
);

export function Home() {
  return (
    <InstantSearch indexName="mcqs" searchClient={searchClient}>
      <Head>
        <meta name="theme-color" content="#3273DC" />
        <meta
          name="description"
          content="Search through all sanfoundry's MCQ in milliseconds. Filter through subjects, topics and even degrees"
        />
        <title>Choicez | Search through 10 thousand MCQs in seconds</title>
        {process.env.NEXT_PUBLIC_VERCEL_ENV == "production" ? (
          <script async defer src="https://owo.alphaman.me/latest.js"></script>
        ) : (
          ""
        )}
      </Head>
      <Configure hitsPerPage={10} />
      <section className="hero is-small is-link">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">{process.env.NEXT_PUBLIC_NAME}</h1>
            <h2 className="subtitle">
              Search through all sanfoundry's MCQ in milliseconds
            </h2>
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
            <Sidenav />
          </div>
          <div className="column is-10">
            <HitsComponent />
          </div>
        </div>
      </div>
      <div className="container is-fluid mt-5">
        <div className="columns is-centered is-vcentered">
          <div className="column is-narrow-desktop">
            <Pagination />
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}

export default Home;
