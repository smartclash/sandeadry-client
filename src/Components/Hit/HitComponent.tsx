import { connectHits } from 'react-instantsearch-dom'
import { CustomHighlight } from './HighlightComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

interface HitHandlerProps {
    hit: any
}

const Options = ({ hit }: HitHandlerProps) => {
    const {OptionOne, OptionTwo, OptionThree, OptionFour, Answer} = hit
    const theAnswer = Answer.replace(' ', '')

    return (
        <div>
            {OptionOne ? (
                <a className={cx("panel-block", {'is-active': theAnswer === 'a'})}>
                    <span className="panel-icon">
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                    </span>
                    <span className={cx({'has-text-link': theAnswer === 'a'})}>
                        <CustomHighlight attribute="OptionOne" hit={hit} />
                    </span>
                </a>
            ) : ''}
            {OptionTwo ? (
                <a className={cx("panel-block", {'is-active': theAnswer === 'b'})}>
                    <span className="panel-icon">
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                    </span>
                    <span className={cx({'has-text-link': theAnswer === 'b'})}>
                        <CustomHighlight attribute="OptionTwo" hit={hit} />
                    </span>
                </a>
            ) : ''}
            {OptionThree ? (
                <a className={cx("panel-block", {'is-active': theAnswer === 'c'})}>
                    <span className="panel-icon">
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                    </span>
                    <span className={cx({'has-text-link': theAnswer === 'c'})}>
                        <CustomHighlight attribute="OptionThree" hit={hit} />
                    </span>
                </a>
            ) : ''}
            {OptionFour ? (
                <a className={cx("panel-block", {'is-active': theAnswer === 'd'})}>
                    <span className="panel-icon">
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                    </span>
                    <span className={cx({'has-text-link': theAnswer === 'd'})}>
                        <CustomHighlight attribute="OptionFour" hit={hit} />
                    </span>
                </a>
            ) : ''}
        </div>
    )
}

const HitHandler = ({ hit }: HitHandlerProps) => {
    return (
        <div key={hit.id} className="column is-half mt-5">
            <div className="card">
                <div className="card-content">
                    <div className="block">
                        <p className="title is-size-6">
                            Question
                        </p>
                        <CustomHighlight attribute="Question" hit={hit} />
                    </div>

                    <div className="block">
                        <p className="title is-size-6">
                            Explanation
                        </p>
                        <CustomHighlight attribute="Explanation" hit={hit} />
                    </div>

                    <div className="block">
                        <p className="title is-size-6">
                            Options
                        </p>
                        <Options hit={hit} />
                    </div>

                    <div className="block">
                        <div className="tags is-centered">
                            {hit.Degrees.map((degree: string) => (
                                <div className="tag">{degree}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <div className="card-footer-item">
                        <div className="tags has-addons">
                            <span className="tag is-link is-light">Subject</span>
                            <span className="tag">
                                <CustomHighlight attribute="Subject" hit={hit}  />
                            </span>
                        </div>
                    </div>
                    <div className="card-footer-item">
                        <div className="tags has-addons">
                            <span className="tag is-link is-light">Topic</span>
                            <span className="tag">
                                <CustomHighlight attribute="Topic" hit={hit}  />
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

const HitsComponent = connectHits(({ hits }) => {
    return (
        <div className="columns is-multiline">
            {hits.map(hit => (
                <HitHandler hit={hit} key={hit.objectID} />
            ))}
        </div>
    )
})

export default HitsComponent
