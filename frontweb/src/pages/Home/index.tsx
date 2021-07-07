import './styles.css';
import { ReactComponent as CarMain } from 'assets/images/car-main.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <div className="home-card">
      <div className="home-content-container">
        <h1>O carro perfeito para você</h1>
        <p>
          Conheça nossos carros e dê mais um passo na realização do seu sonho
        </p>
      </div>

      <div className="home-image">
        <CarMain />
      </div>
    </div>

    <div className="home-button">
      <Link to="/catalog-cars">
      <Button />
      </Link>
      <p>Comece agora a navegar</p>
    </div>
  </div>
);
export default Home;
