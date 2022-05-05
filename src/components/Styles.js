import styled from "styled-components";

//NavBar
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;


//ItemCount
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const ProductAmount = styled.div`
    font-size: 18px;
    margin: 5px;
`;


//ItemList
const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

//Item
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    diplay: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const ProductContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    font-size: 12px;
    color: #997564;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.3);
    }
`;


//ItemDetail
const MainContainer = styled.div`

`;

const BoxDetail = styled.div`
    padding: 50px;
    display: flex;
`;

const ImageBox = styled.div`
    flex: 1;

`;

const ImageDetail = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const DetailContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
`;

//Cart
const BoxCart = styled.div`
    padding: 20px;
`;

const TitleCart = styled.h1`
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    color: gray;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
`;

const Product = styled.div`
  display: flex;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
`;


export { 
    Wrapper, Logo, MenuItem, Left, Center, Right, 
    ProductAmountContainer, ProductAmount, 
    ProductsContainer, ProductContainer,
    Circle, Image, Info, Icon,
    MainContainer, BoxDetail, ImageBox, ImageDetail, DetailContainer, Title, Desc, Price,
    BoxCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice,
}