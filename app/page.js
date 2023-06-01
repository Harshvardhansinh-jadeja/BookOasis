import ListProduct from "@components/products/ListProduct";
import axios from "axios";
const getProducts = async () => {
  const {data} = await axios.get(`${process.env.AXIOS_URL}/api/products`);
  return data;
};

const Home = async () => {
  // const products = await getProducts();

  return <ListProduct />;
};

export default Home;
