import Item from './Item';
import Data from '../data.json';

const Cart = () => {
  const shippingPrice = 19;
  let total: number = 0;

  {
    Data.map(
      (d) => (total = total + +d.discountPrice)
    );
  }
  total = total + shippingPrice;

  return (
    <div className='order-1 w-full xl:w-1/3 xl:order-2'>
      <div className='p-5 bg-gray-200 rounded-lg '>
        {Data.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            alt={item.title}
            title={item.title}
            price={item.price}
            discountPrice={item.discountPrice}
          />
        ))}
        {/* {total === 0 ? (
          <></>
        ) : ( */}
        <div className='mt-10'>
          <div className='flex justify-between pt-3 border-t-2 border-gray-600'>
            <span>Shipping</span>
            <span>${shippingPrice}</span>
          </div>
          <div className='flex justify-between pt-3 mt-5 border-t-2 border-gray-600'>
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Cart;
