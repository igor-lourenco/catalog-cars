import './styles.css';
import CarImg from 'assets/images/car-card 1.png';

const CarCard = () => {
  return (
    <>

      <div className="car-card">
        <div className="card-top">
          <img src={CarImg} alt="nome do produto" />
        </div>
        <div className="car-bottom">
          <h6>Audi Supra TT</h6>
          <p>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </i>
          </p>
          <button>
            <h6>COMPRAR</h6>
          </button>
        </div>
      </div>
    </>
  );
};
export default CarCard;
