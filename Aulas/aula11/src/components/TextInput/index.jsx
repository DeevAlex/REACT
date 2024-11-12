import './styles.css'

export const TextInput = ( { searchValue, handleChange } ) => {
    return (
        <input className='textInput' value={searchValue} onChange={handleChange} placeholder='Informe o titulo do post' type="search" />
    )
}