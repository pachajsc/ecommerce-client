import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";
import { updateTotal } from "./features/basketSlice";

function App() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <>
      <h1 className="text-center text-3xl font-medium mt-2 py-4">
        Hello world!
      </h1>
      <Navbar />
      <BasketProducts />
    </>
  );
}

export default App;
