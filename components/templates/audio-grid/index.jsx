import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/function'

const AudioGrid = ({ podcast, fetchPodcast }) => {
    useEffect(() => {
        fetchPodcast()
    }, [])

    const renderLink = (link = null) => {
        if (link) {
            window.open(link, '_blank')
        }
    }

    const renderAudioCard = () => {
        return podcast.map((c, i) => (
            <div key={i} className={styles.object}>
                <img
                    src={c.cover}
                    alt={c.title}
                    onClick={() => renderLink(c.deeplink)}
                />
                <div>
                    <h6>{maxTitlesLength(c.title)}</h6>
                    <p className={'p2'}>{c.author}</p>
                </div>
            </div>
        ))
    }

    return <div className={styles.audio}>{renderAudioCard()}</div>
}

AudioGrid.propTypes = {
    podcast: PropTypes.array,
    fetchPodcast: PropTypes.func,
}

export default AudioGrid
