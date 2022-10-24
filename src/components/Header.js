import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'

const Header = ({ title, onAdd, showAdd, user, setUser, getTasks }) => {

    const clearUser = () => {
        setUser('');
        localStorage.removeItem('todouser');
    }

    return (
        <div>
            <header className="header">
                <h1>@{user}</h1>
                <Button color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
                <Button color={'red'} text={'Logout'} onClick={() => clearUser()}/>
            </header>
            <h4 className='ongoing'>Your ongoing tasks</h4>
        </div>
    )
}

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color:'red',
    backgroundColor:'black',
}

export default Header