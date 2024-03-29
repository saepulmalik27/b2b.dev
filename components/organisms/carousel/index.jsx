import React, { useRef } from 'react'
import cx from 'classnames'
import styles from './style.module.scss'
import PropTypes from 'prop-types'
import * as colors from '@/styles/App.module.scss'
import { ArrowLeft, ArrowRight } from '@/utils/icons'

const Carousel = ({ children, className, title }) => {
    const ref = useRef(null)
    const scroll = scrollOffset => {
        ref.current.scrollLeft += scrollOffset
    }

    return (
        <div>
            <div className={styles.header_container}>
                <h3 className={styles.header_container__title}>{title}</h3>
            </div>
            <div className={styles.body_container}>
                <div
                    className={cx(
                        styles.carousel,
                        children.length < 3 ? styles.center : '',
                        className
                    )}
                    ref={ref}>
                    {children}
                </div>
                {children.length > 1 ? (
                    <div
                        className={styles.navigation__left}
                        onClick={() => scroll(-200)}>
                        {ArrowLeft(colors.white, null, 1)}
                    </div>
                ) : null}

                {children.length > 1 ? (
                    <div
                        className={styles.navigation__right}
                        onClick={() => scroll(200)}>
                        {ArrowRight(colors.white, null, 1)}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

Carousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
}

Carousel.defaultProps = {
    children: [],
}

export default Carousel
