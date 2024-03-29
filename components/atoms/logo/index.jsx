import Link from 'next/link'
import React from 'react'
import { inspirationBlue } from '@/styles/App.module.scss'
import PropTypes from 'prop-types'
import { InspigoLogo } from '@/utils/icons'

const Logo = ({ link }) => {
    return (
        <Link href={`/${link}`}>
            <a>{InspigoLogo(inspirationBlue, null, 1)}</a>
        </Link>
    )
}

Logo.propTypes = {
    link: PropTypes.string,
}

export default Logo
