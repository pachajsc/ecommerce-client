import { useSelector } from "react-redux";
import Product from "./Product";
const BasketProducts = () => {
  const { products, total, amount } = useSelector((store) => store.basket);

  return (
    <>
      {amount > 0 ? (
        <>
          <div className="py-7">
            {products.map((item) => (
              <Product
                key={new Date().getTime + Math.random()}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-2xl text-gray-700 font-medium text-center py-10">
          Your Basket Is Empty😟
        </p>
      )}
      <div className="flex flex-row items-center justify-evenly py-10">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-medium">$ {total.toFixed(2)}</p>
      </div>
    </>
  );
};

export default BasketProducts;
