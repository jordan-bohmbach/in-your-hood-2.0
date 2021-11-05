import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOneWatchlist } from "../../store/watchlist"
import './Dashboard.css'

const CreateWatchlistForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const ownerId = useSelector(state => state.session.user.id)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const reset = () => {
        setName('')
        setDescription('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name,
            description,
            balance: 0,
            owner_id: ownerId,
            createdat: new Date()
        }

        let createdWatchlist = await dispatch(createOneWatchlist(payload))
        if (createdWatchlist) {
            history.push('/dashboard')
            reset()
        }

    }




    return (
        <div className='create__watchlist-container'>
            <form
                className='create-watchlist-form'
                onSubmit={handleSubmit}
            >
                <h2>Create a new Watchlist</h2>
                <label className='newPort__input'>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label className='newPort__input'>
                    Description
                    <input
                        type='text'
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
                <div className='watchlist__buttons'>
                    <button className="newWatchlist__submit"
                        type="submit"
                    >
                        Create Watchlist
                    </button>
                    <Link to='/dashboard/' className='cancel-watchlist-button cancelPort__container'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default CreateWatchlistForm
