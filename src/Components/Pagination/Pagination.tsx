import cx from 'classnames';
import { connectPagination } from 'react-instantsearch-dom'

const CustomPagination = connectPagination(({ currentRefinement, nbPages, refine, createURL }) => {
    if (nbPages > 1) {
        return (
            <nav className="pagination">
                <ul className="pagination-list">                
                {new Array(nbPages).fill(null).map((_, index) => {
                    const page = index + 1;
    
                    return (
                        <li key={index}>
                            <a
                                href={createURL(page)}
                                className={cx("pagination-link", {'is-current': currentRefinement === page})}
                                onClick={event => {
                                    event.preventDefault();
                                    refine(page);
                                }}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}
                </ul>
            </nav>
        )
    }

    return <div></div>
})

export default CustomPagination
