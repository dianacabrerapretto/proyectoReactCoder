import Item from "./Item";
import { ProductsContainer } from './Styles';
import { Container, Row, Carousel } from "react-bootstrap";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";


const ItemList = ({ items }) => {
  console.log(items);

  return (
    <ProductsContainer>
      <Container>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Row>
        {""}
        {items.length > 0
          ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image} stock={item.stock} />)
          : <div className="text-center mt-3">Cargando...</div>}{""}
      </Row>
    </ProductsContainer>
  );
};

export default ItemList;