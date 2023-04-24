import Images from './components/Images';
import Footer from './components/Footer';
import { imgData } from './imgData';

const App = () => {
  return (
    <>
      <h1>
        <span className='title-color1'>#</span>
        <span className='title-color2'>Snap Gallery</span>
      </h1>
      <Images images={imgData} />
      <Footer />
    </>
  );
};

export default App;
