import './css/styles.css';

export const Search = ( { busca } ) => {
    return (
        <input 
        className="text-input"
        type="search" 
        value={busca}
        placeholder="Digite alguma coisa"
        />
    )
}