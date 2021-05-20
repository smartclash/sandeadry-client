import { connectHighlight } from 'react-instantsearch-dom'

export const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
    const parsedHit = highlight({
        highlightProperty: '_highlightResult',
        attribute,
        hit,
    });

    return (
        <div>
            {parsedHit.map((part, index) => (
                part.isHighlighted ? (
                    <span key={index} className="has-background-danger-light p-1">{part.value}</span>
                ) : (
                    <span key={index}>{part.value}</span>
                )
            ))}
        </div>
    )
})
