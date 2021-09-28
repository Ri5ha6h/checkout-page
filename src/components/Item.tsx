import { FC, useState } from 'react';
import {
  FiMinusSquare,
  FiPlusSquare,
} from 'react-icons/fi';

interface ItemProps {
  img: string;
  alt: string;
  title: string;
  price: number;
  discountPrice: number;
}

const Item: FC<ItemProps> = ({
  img,
  alt,
  title,
  price,
  discountPrice,
}) => {
  const [count, setCount] = useState(1);

  const updateCount = (e: any) => {
    const x = +e.target.value;
    setCount(x);

    // if (e.target.value === '') {
    //   setCount(1);
    // }
  };

  const handleMinus = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className='flex flex-col mt-2 sm:mt-4 sm:flex-row'>
      <div className='mt-2 sm:mt-0'>
        <img
          className='rounded-lg w-44 h-44 sm:w-60 sm:h-60'
          src={img}
          alt={alt}
        />
      </div>
      <div className='sm:px-6 '>
        <div>
          <h4 className='mt-3 text-xl font-semibold text-gray-600 sm:mt-0'>
            {title}
          </h4>

          <div className='flex items-center mt-2'>
            <span className='text-lg text-yellow-500'>
              ${discountPrice}
            </span>
            <span className='ml-3 text-gray-600 line-through'>
              ${price}
            </span>
          </div>
        </div>

        <div className='flex items-center justify-around p-4 mt-12 border-2 border-gray-400 rounded-md w-44'>
          <FiMinusSquare
            className='text-gray-400 w-7 h-7'
            onClick={handleMinus}
          ></FiMinusSquare>

          <input
            className='w-8 h-6 text-lg font-semibold text-gray-700 bg-gray-200 border-0 outline-none'
            value={count}
            onChange={updateCount}
          />

          <FiPlusSquare
            className='text-gray-400 w-7 h-7'
            onClick={handlePlus}
          ></FiPlusSquare>
        </div>
      </div>
    </div>
  );
};

export default Item;
