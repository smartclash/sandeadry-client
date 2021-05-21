import 'bulma'
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp
