import { connectCurrentRefinements, connectRefinementList } from 'react-instantsearch-dom'
import cx from 'classnames'

const CustomClearRefinement = connectCurrentRefinements(({ items, refine }) => {
    if (items.length) {
        return (
            <button className="button is-link is-fullwidth" onClick={() => refine(items)}>
                Clear Filters
            </button>
        )
    }

    return <div></div>
})

const CustomRefinement = connectRefinementList(({ items, refine, createURL }) => {
    return (
        <ul className="menu-list">
            {items.map(item => (
                <li key={item.label}>
                    <a href={createURL(item.value)} className={cx({'is-active m-2': item.isRefined})} onClick={e => {
                        e.preventDefault()
                        refine(item.value)
                    }}>
                        <div className="tag is-link is-light">
                            {item.count}
                        </div> {' '}
                        {item.label} 
                    </a>
                </li>
            ))}
        </ul>
    )
})

const Navbar = () => {
    return (
        <div className="menu">
            <CustomClearRefinement />
            <p className="menu-label has-text-weight-bold">
                Degrees
            </p>
            <CustomRefinement attribute="Degrees" />
            <hr className="has-text-link" />
            <p className="menu-label has-text-weight-bold">
                Subjects
            </p>
            <CustomRefinement attribute="Subject" showMore={true} />
            <hr />
            <p className="menu-label has-text-weight-bold">
                Topics
            </p>
            <CustomRefinement attribute="Topic" showMore={true} />
        </div>
    )
}

export default Navbar
