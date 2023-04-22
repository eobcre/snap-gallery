const Images = () => {
  return (
    <div>
      <div className='dropdown'>
        <label htmlFor='category' className='dropdown-title'>
          Select the location
        </label>
        <select>
          <option value='all'>Show all</option>
          <option value='category1'>Hawaii</option>
          <option value='category2'>Los Angeles</option>
        </select>
      </div>
    </div>
  );
};

export default Images;
