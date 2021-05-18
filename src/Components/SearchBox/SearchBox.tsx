import cx from 'classnames'
import { connectSearchBox } from 'react-instantsearch-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBox = connectSearchBox(({ currentRefinement, refine, isSearchStalled }) => {
    return (
        <div className={cx("control has-icons-left has-icons-right", {'is-loading is-medium': isSearchStalled})}>
            <input 
                type="search" 
                className="input is-medium" 
                placeholder="Enter something"
                value={currentRefinement}
                onChange={ev => refine(ev.currentTarget.value)} />
            <span className="icon is-left">
                <FontAwesomeIcon icon={["fas", "search"]} />
            </span>
        </div>
    )
})

export default SearchBox
