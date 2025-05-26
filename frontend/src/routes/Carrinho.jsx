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
      
    </div>
  )
}

export default Carrinho
