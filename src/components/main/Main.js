import hello from '../../assets/hello.svg';
import Chart from '../charts/Chart';
import './Main.css';

const Main = () => {
    return (
      <main>
        <div className='main__container'>
            <div className='main__title'>
              <img src={hello} alt='hello'/>
              <div className='main__greeting'>
                <h1>Olá Qlt !</h1>
                <p>Bem vindo seu painel</p>
              </div>
            </div>
            <div className='main__cards'>
                <div className='card'>
                  <i className='fa fa-file-text fa-2x text-lightblue'></i>
                  <div>
                    <p className='text-primay-p'>Numeros de Maquinas</p>
                    <span className='font-bold title-text'>578</span>  
                  </div>  
                </div>

                <div className='card'>
                <i className='fa fa-money fa-x2 text-red'></i>
                <div className='card_inner'>
                  <p className='text-primay-p'>Custo estimado</p>
                  <span className='font-bold text-title'>R$15.467</span>  
                </div>  
              </div>
              
              <div className='card'>
                <i className='fa fa-archive fa-x2 text-yellow'></i>
                <div className='card_inner'>
                  <p className='text-primay-p'>Números de Usuarios logados</p>
                  <span className='font-bold text-title'>70</span>  
                </div>  
              </div>
              
              <div className='card'>
                <i className='fa fa-bars fa-x2 text-green'></i>
                <div className='card_inner'>
                  <p className='text-primay-p'>Categorias</p>
                  <span className='font-bold text-title'>R$2.467</span>  
                </div>  
              </div>   
         </div>

         <div className='charts'>
            <div className='charts__left'>
              <div className='charts_left_title'>
               <div>
                 <h1>Daily Reports</h1>
                 <h1>Ubatuba, São Paulo, BR</h1>
               </div>
               <i className='fa fa-usd'></i>
              </div>
              <Chart />
            </div>

           <div className='charts__right'>
              <div className='charts_right_title'>
                <div>
                 <h1>Daily Reports</h1>
                 <h1>Ubatuba, São Paulo, BR</h1>
                </div>
                <i className='fa fa-area-chart'></i>
              </div>

              <div className='charts__right__cards'>
                <div className='card1'>
                    <h1>Lucro</h1>
                    <p>R$2500</p>
                </div>

                <div className='card2'>
                    <h1>Pagamentos</h1>
                    <p>R$250,00</p>
                </div>

                <div className='card3'>
                    <h1>Custo de Hospedagem</h1>
                    <p>R$150,00</p>
                </div>

                <div className='card4'>
                    <h1>Banco de Dados</h1>
                    <p>R$180,00</p>
                </div>
             </div>  
           </div>            
         </div>  
        </div>
      </main>       
    );
};

export default Main;