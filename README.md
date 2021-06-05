# Sandeadry Client

Search through 10K+ MCQs scrapped off [Sanfoundry](https://sanfoundry.com/). Filter for particular MCQ by Degree, Subject or Topic.

![GIF that showcases sandeadry](public/sandeadry.gif)

# Backend

- The MCQs are indexed into [Meilisearch](https://meilisearch.com/) which provides near instant search experience.
- MCQs are scrapped by [Sandeadry-backend](https://github.com/smartclash/Sandeadry). It's written purely in [golang](https://golang.org/).

# Contributing

This project uses [`instantsearch-react`](https://github.com/algolia/react-instantsearch/) and custom widgets built upon it. And it's also a basic NextJS App. Check out it's [documentation](https://nextjs.org/) to get started
