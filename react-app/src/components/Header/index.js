import './Header.css'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';

function Header(){
    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(logout());
    };
    const user = useSelector(state => state.session.user);


    return(
        <div className='header'>

            <div className='logo'>
                <Link to={user ? '/dashboard' : '/login'}>
                    <img src='/favicon.ico' alt='not found'></img>
                </Link>
            </div>

            <div className='head__search-bar'>
                <SearchBar />

            </div>

            <div className='links'>


                {user ? <Link to='/dashboard' className='sp__login-link'>Dashboard</Link> : ""}
                {user ? <Link to='/account' className='sp__login-link'>Account</Link> : ""}
                {user ? <Link to='/' onClick={onLogout} className='sp__signup-link'>Log Out</Link> : ""}
                {(!user) ? <Link to='/login' className='sp__login-link'>Log In</Link> : ""}
                {(!user) ? <Link to='/sign-up' className='sp__signup-link'>Sign Up</Link> : ""}

            </div>
        </div>
    )
}


export default Header;
