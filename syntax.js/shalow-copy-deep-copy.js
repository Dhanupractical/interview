const company = {
    name: 'Publicis Sapient',
    location: {
      city: 'New Delhi',
    }
  };
  // const copy = { ...company };
  const copy = company;
  copy.location.city = 'Bangalore';
  copy.name = "Sapient";   // rem changes reference property value and interited property name both
  console.log('original: ', company.location); // {city: 'New Delhi}'
  console.log('copy:', copy.location); // {city : 'Bangalore'};
  console.log(copy.name); // "Sapient"
  console.log(company.name); //  'Publicis Sapient'