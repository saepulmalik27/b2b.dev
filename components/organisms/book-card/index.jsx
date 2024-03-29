import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/helpers'
import { useRouter } from 'next/router'
import routes from '@/utils/routes'

const BookCard = ({ book, path }) => {
    const router = useRouter()
    const renderLink = (link = null) => {
        if (link) {
            router.push(routes.audioplaybook(path.path, link))
            // window.open(link)
        }
    }
    return (
        <div className={styles.object}>
            <img
                src={book.image}
                alt={book.title}
                onClick={() => renderLink(book.alias)}
            />
            <div>
                <h6>{maxTitlesLength(book.title)}</h6>
                <p className={'p2'}>{book.author}</p>
            </div>
        </div>
    )
}

BookCard.propTypes = {
    book: PropTypes.shape({
        cover: PropTypes.string,
        title: PropTypes.string,
        alias: PropTypes.string,
        author: PropTypes.string,
        deeplink: PropTypes.string,
        image: PropTypes.string,
    }).isRequired,
    path: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default BookCard
