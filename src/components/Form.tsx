import Input from './Input';
import {
  MdEmail,
  MdPhone,
  MdLocationCity,
} from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import {
  GoGlobe,
  GoLocation,
} from 'react-icons/go';
import { useState } from 'react';
import Cart from './Cart';

const Form = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(true);
  };
  return (
    <div className='relative flex flex-col items-center justify-center mt-10 xl:justify-between xl:flex-row'>
      {show && (
        <div className='absolute z-10 flex items-center justify-center w-64 h-40 text-xl text-green-400 bg-white border-2 rounded-md shadow-xl top-96 left-96'>
          <p>Validation Successful</p>
        </div>
      )}
      <form
        className='order-2 w-full mt-10 xl:w-1/3 xl:order-1'
        onSubmit={handleSubmit}
      >
        <div className=''>
          <h3 className='mb-5 text-xl font-semibold tracking-wider text-gray-600 '>
            Contact Information
          </h3>
          <Input
            inputClass='w-full'
            inputName='E-mail'
            placeholder='Enter your email...'
            type='email'
            autoComplete='email'
            name='email'
            Icon={MdEmail}
          />
          <Input
            inputClass='w-full'
            inputName='Phone'
            placeholder='Enter your phone...'
            type='tel'
            autoComplete='tel'
            name='tel'
            Icon={MdPhone}
          />
        </div>
        <div className='mt-8 '>
          <h3 className='mb-5 text-xl font-semibold tracking-wider text-gray-600 '>
            Shipping Address
          </h3>
          <Input
            inputClass='w-full'
            inputName='Full name'
            placeholder='Your full name...'
            type='full name'
            autoComplete='full name'
            name='full name'
            Icon={FaUserCircle}
          />
          <Input
            inputClass='w-full'
            inputName='Address'
            placeholder='Your address...'
            type='address'
            autoComplete='address'
            name='address'
            Icon={HiHome}
          />
          <Input
            inputClass='w-full'
            inputName='City'
            placeholder='Your city...'
            type='city'
            autoComplete='city'
            name='city'
            Icon={MdLocationCity}
          />
          <div className='flex flex-col w-full sm:flex-row sm:justify-between'>
            <Input
              inputClass='md:pr-1'
              inputName='Country'
              placeholder='Your country...'
              type='country'
              autoComplete='country'
              name='country'
              list='country'
              Icon={GoGlobe}
            />
            <datalist id='country'>
              <option value='India' />
              <option value='USA' />
              <option value='UK' />
              <option value='Australia' />
              <option value='Japan' />
            </datalist>
            <Input
              inputClass='md:pr-1'
              inputName='Postal Code'
              placeholder='Your postal code...'
              type='pin code'
              autoComplete='pin code'
              name='pin code'
              Icon={GoLocation}
            />
          </div>
          <div className='flex items-center mt-4'>
            <input
              className='w-5 h-5'
              type='checkbox'
              name='info'
              id='info'
            />
            <label
              htmlFor='info'
              className='ml-3 text-sm tracking-wide text-gray-500'
            >
              Save this information for next time
            </label>
          </div>
        </div>
        <div className='flex justify-end w-full mt-6'>
          <button
            className='px-10 py-3 text-lg tracking-wide text-white bg-yellow-500 rounded-xl'
            type='submit'
          >
            Continue
          </button>
        </div>
      </form>
      <Cart />
    </div>
  );
};

export default Form;
