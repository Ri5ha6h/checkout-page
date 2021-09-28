import Form from './components/Form';

const App = () => {
  return (
    <div className='px-4 pt-4 pb-4 sm:pt-10 sm:px-10 2xl:px-48'>
      <h1 className='text-5xl font-semibold tracking-wider text-gray-700'>
        Checkout
      </h1>
      <Form />
      <div className='text-center mt-14'>
        <p className='text-gray-400'>
          created by{' '}
          <a
            className='border-b-2'
            href='https://devchallenges.io/portfolio/Ri5ha6h'
            target='_blank'
          >
            Rishabh Malik
          </a>{' '}
          - devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default App;
