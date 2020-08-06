const num = [1,2,3,4,5,6,7,8,9,10];

//Using a for-loop
const pagination1 = ( page, quantityPerPage = 3 ) => {
  const startingIndex = (page - 1) * quantityPerPage;
  const endingIndex = (startingIndex + quantityPerPage) - 1; 
  const pageArr = [];
  
  for( let i = startingIndex; i <= endingIndex; i++ ) {
    if( num[i] === undefined ) break;
    pageArr.push(num[i]);
  }
  return pageArr;
}

pagination1(2, 3); 

//Using slice
const pagination2 = ( page, quantityPerPage = 3 ) => {
  const startingIndex = (page - 1) * quantityPerPage;
  const endingIndex = startingIndex + quantityPerPage;
  return num.slice(startingIndex, endingIndex);
}


pagination2(2, 3); 


