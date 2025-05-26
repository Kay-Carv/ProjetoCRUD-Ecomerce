import { useDispatch } from "react-redux" 
import { adicionarCarrinho } from "../store/cartSlice"
import Swal from "sweetalert2"


const Produto = ({produto}) => {

    const dispatch = useDispatch();

    const handleAddCarrinho = () => {
        dispatch(adicionarCarrinho(produto));
        Swal.fire({
            title: "Produto adicionado ao carrinho",
            text: `${produto.nome} foi adicionado ao carrinho`,
            icon:"success",
            confirmButtonText: "ok",
        })

    // função para pegar a requisição do servidor
    fetch(`http://localhost:3001/carrinho/adicionar`,{
        method:"POST",
        headers:{
            'Content-Type':'aplication/json',
        },
        body:JSON.stringify({produtoId:produto.id, quantidade:1}),
    })
    .then(response =>{
        if(!response.ok){
            console.log("Erro ao adicionar ao carrinho", response.status);
        } else {
            return response.json();
        }
    })
    .then(data =>{
        if(data && data.message) {
            console.log("Verificar a resposata do servidor", data.message)
        }
    })
    .catch(error => {
        console.logl("Erro ao enviar os dados para o servidor", error)
    })

}

  return (
    <div className="max-w-xs m-2 border rounded-md shadow-md font-sans">
        <img src={`http://localhost:3001${produto.image.replace('/public','')}`}
            alt={produto.nome}

            className="w-full h-56 object-cover"
        />
      
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{produto.nome}</h2>
            <p className="text-gray-500 font-bold mb-4">{produto.preco}</p>
            <button 
                className="bg-blue-500 hover:bg-blue-900 text-white rounded py-2 px-4" 
                onClick={handleAddCarrinho}>
                Adicionar ao Carrinho
            </button>
        </div>
    </div>

  )
}

export default Produto
