import { LoadProdutos } from './../utils/loadProdutos';

export const PostCard = () => {

    const produtos = LoadProdutos();

    return (

        <div className="post_grid">
            {produtos.map(item => (
                <div key={item.id} className="post">
                    <img src={item.urlImage} alt={item.description}/>
                    <div className="postcontent">
                        <h2>Descrição: {item.description}</h2>
                        <p>Valor: R${item.value}</p>
                        <p>ID: R${item.id}</p>
                        <p>Stock: {item.stock}</p>
                        <p>Stock: {item.reference}</p>
                    </div>
                </div>
            ))}
        </div>

   )
}