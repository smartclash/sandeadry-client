import cx from 'classnames'
import { connectSearchBox } from 'react-instantsearch-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEventHandler, useState } from 'react'

const SearchBox = connectSearchBox(({ currentRefinement, refine, isSearchStalled }) => {
    const [timer, setTimer] = useState<NodeJS.Timeout>(setTimeout(() => {}, 1))
    const [search, setSearch] = useState(currentRefinement)

    const controlSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.currentTarget.value

        clearTimeout(timer)
        setTimer(setTimeout(() => refine(value), 150))
        setSearch(value)
    }

    return (
        <div className={cx("control has-icons-left has-icons-right", {'is-loading is-medium': isSearchStalled})}>
            <input 
                type="search" 
                className="input is-medium" 
                placeholder="Enter something"
                value={search}
                autoFocus
                onChange={controlSearch} />
            <span className="icon is-left">
                <FontAwesomeIcon icon={["fas", "search"]} />
            </span>
        </div>
    )
})

export default SearchBox
