import { connectMenu } from 'react-instantsearch-dom'
import cx from 'classnames'
import { CustomHighlight } from '../Hit/HighlightComponent'

const CustomMenu = connectMenu(({items, refine, isFromSearch, currentRefinement}) => {
    return (
        <div className="tabs is-centered is-boxed">
            <ul>
                {items.map(item => (
                    <li key={item.value} className={cx({'is-active': item.isRefined})}>
                        <a
                            href="#"
                            onClick={e => {
                                e.preventDefault()
                                refine(item.value)
                            }}
                        >
                            {isFromSearch ? (
                                <CustomHighlight attribute="label" hit={item} />
                            ) : item.value}
                            {item.value.length > 0 ? '' : currentRefinement}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default CustomMenu
