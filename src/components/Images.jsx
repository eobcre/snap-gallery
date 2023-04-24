import { useState } from 'react';
import { imgData } from '../imgData';

const Images = () => {
  const [category, setCategory] = useState('all');

  const filterImages = imgData.filter((image) => {
    if (category === 'all') {
      return true;
    } else {
      return image.category === category;
    }
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className='dropdown'>
        <label htmlFor='category' className='dropdown-title'>
          Select the location
        </label>
        <select value={category} onChange={handleChange}>
          <option value='all'>Show all</option>
          <option value='category1'>Hawaii</option>
          <option value='category2'>Los Angeles</option>
        </select>
      </div>
      <div className='img-container'>
        {filterImages.map(({ src }, index) => (
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

export default Images;
