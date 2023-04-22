const Images = () => {
  return (
    <div>
      <label htmlFor='category'>Select the location</label>
      <select>
        <option value='all'>Show all</option>
        <option value='category1'>Hawaii</option>
        <option value='category2'>Los Angeles</option>
      </select>
    </div>
  );
};

export default Images;
