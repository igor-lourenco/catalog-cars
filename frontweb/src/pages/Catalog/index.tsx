import CarCard from '../../components/CarCard';
import './styles.css';

const Catalog = () => (
  <div className="container my4">
    <div className="home-car-busca">


        <input
          className="form-control"
          type="email"
          placeholder="Digite sua busca"
        />


      <div className="car-button-busca">
        <button type="submit" className="btn btn-success busca-button">
          <h6>BUSCAR</h6>
        </button>
      </div>
    </div>


    
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <CarCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <CarCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <CarCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <CarCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <CarCard />
      </div>
      <div className="col-sm-6 col-lg-4">
        <CarCard />
      </div>
    </div>
  </div>
);
export default Catalog;
