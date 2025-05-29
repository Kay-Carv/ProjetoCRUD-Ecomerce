import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { limparCarrinho, removerCarrinho } from '../store/cartSlice';

const Carrinho = () => {

  const carrinho = useSelector((state) => state.carrinho)
  const dispatch = useDispatch(); // É uma função do redux que serve para enviar as actions para a store
  const navigate = useNavigate()

  // Calcula o total de itens no carrinho
  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0)


  // Funções 
  const handleRemoverItem = (item) => {
    dispatch(removerCarrinho(item));
    // Alerta configurações
    Swal.fire({
      title: 'Produto Removido!',
      text: `${item.nome} foi removido do carrinho`,
      icon: 'success',
      confirmButtonText: 'ok',
    });
  }

  const hanldeLimparCarrinho = () => {
    dispatch(limparCarrinho());
    Swal.fire({
      title: 'Carrinho Limpo!',
      text: 'Todos os itens foram removidos do carrinho.',
      icon: 'success',
      confirmButtonText: 'OK',
    })
  }

  const handleContinuarCompra = () => {
    navigate('/');
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4'> Seu Carrinho </h2>
      <ul className='space-y-2'>
        {carrinho.map((item) =>(
          <li className='flex justify-between items-center border-b pb-2' key={item.id}>
            {/* Talvez deixar uma classname individual para cada um dos Span*/}
            <span className='text-lg'>
              {item.nome} - ${item.preco} x {item.quantidade}
            </span>
            <button
              className='bg-red-500 hover:bg-red-700'
              onClick={() => handleRemoverItem(item)}
            >
              Removem
            </button>
          </li>
        ))}
      </ul>
      <h3 className='text-xl font-semibold mt-4'>Total: ${total.toFixed(2)}</h3>

      <div className='flex justify-start mt-4 space-x-2'>
        <button
          className='bg-red-500 hover:bg-red-700 cursor-pointer text-white font-semibold py-2 px-4 rounded-md'
          onClick={hanldeLimparCarrinho}
        >
          Limpar Carrinho
        </button>

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-4 rounded-md'
          onClick={handleContinuarCompra}
        >
          Continuar Comprando
        </button>

      </div>

    </div>
  )
}

export default Carrinho
