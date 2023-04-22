import Images from './components/Images';
import { imgData } from './imgData';

const App = () => {
  return (
    <>
      <h1>
        <span className='title-color1'>#</span>
        <span className='title-color2'>Snap Gallery</span>
      </h1>
      <Images images={imgData} />
    </>
  );
};

export default App;
