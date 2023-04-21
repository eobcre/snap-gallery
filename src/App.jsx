import { imgData } from './imgData';

const App = () => {
  return (
    <>
      <h1># Snap Gallery</h1>
      <div className='img-container'>
        {imgData.map(({ src }, index) => (
          <img
            key={src}
            src={src}
            alt={`Image ${index}`}
            width='320'
            height='240'
          />
        ))}
      </div>
    </>
  );
};

export default App;
