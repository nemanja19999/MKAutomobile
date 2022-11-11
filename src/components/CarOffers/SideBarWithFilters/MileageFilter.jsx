import React from 'react';
import Select from 'react-select';

const MileageFilter = ({ array, handleMileageChange, colourStyles }) => {
  const distinctBy = (arr, f) => {
    return arr.filter((a, i) => arr.findIndex(b => f(a) === f(b)) === i);
  };

  const options = array.map(car => {
    return {
      value: car.mileage,
      label: car.mileage,
    };
  });

  const distinctOptions = distinctBy(options, car => car.value);

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        placeholder='Kilometer'
        className='select-placeholder'
        styles={colourStyles}
        options={distinctOptions}
        onChange={handleMileageChange}
        isSearchable={false}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'grey',
            primary: 'grey',
          },
        })}
      />
    </>
  );
};

export default MileageFilter;
