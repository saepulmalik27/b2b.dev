import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Navbar from '../../molecules/navbar'
import { PROFILE_ITEM } from '@/utils/constants'
import Logout from '@/containers/components/Logout'

const Profile = props => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_head}>
                <div className={styles.profile_cover}>
                    {props.usercover ? (
                        <img src={props.usercover} alt="cover" />
                    ) : (
                        'S'
                    )}
                </div>
                <div>
                    <h5>{props.username}</h5>
                    {/* <p className="p2">
                        {props.userRole || 'Frontend Engineer'}
                    </p> */}
                </div>
            </div>
            <Navbar bgcolor={'white'} variant="column" navitem={PROFILE_ITEM} />
            <div className={styles.cta}>
                <Logout />
            </div>
        </div>
    )
}

Profile.propTypes = {
    background: PropTypes.string,
    username: PropTypes.string,
    usercover: PropTypes.string,
    userRole: PropTypes.string,
}

export default Profile
