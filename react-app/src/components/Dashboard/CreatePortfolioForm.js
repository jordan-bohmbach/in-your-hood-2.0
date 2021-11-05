import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOnePortfolio } from "../../store/portfolio"
import { getPortfolios } from "../../store/portfolio"

const CreatePortfolioForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const ownerId = useSelector(state => state.session.user.id)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [initialDeposit, setInitialDeposit] = useState(0)

    const reset = () => {
        setName('')
        setDescription('')
        setInitialDeposit(0)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name,
            description,
            current_cash_balance: initialDeposit,
            starting_cash_balance: initialDeposit,
            owner_id: ownerId,
            createdat: new Date()
        }

        let createdPortfolio = await dispatch(createOnePortfolio(payload))
        if (createdPortfolio) {
            getPortfolios()
            reset()
            history.push('/dashboard')
        }

    }

    return (
        <div className='create-portfolio-form'>
            <form
                className='portfolio-form'
                onSubmit={handleSubmit}
            >
                <h2 className='newPort__label'>Create a new Portfolio</h2>
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
                <label className='newPort__input'>
                    Initial Deposit
                    <input
                        type='number'
                        name='initialDeposit'
                        value={initialDeposit}
                        onChange={e => setInitialDeposit(e.target.value)}
                    />
                </label>
                <button
                    className="newPort__submit"
                    type="submit"
                >
                    Create Portfolio
                </button>
            </form>
            <div className='cancelPort__container'>
                <Link to='/dashboard/' className='cancel-portfolio-button'>Cancel</Link>
            </div>
        </div>
    )
}

export default CreatePortfolioForm
