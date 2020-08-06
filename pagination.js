const num = [1,2,3,4,5,6,7,8,9,10];

const pagination = ( page, quantityPerPage = 3 ) => {
  const startingIndex = (page - 1) * quantityPerPage;
  const endingIndex = (startingIndex + quantityPerPage) - 1; 
  const pageArr = [];
  
  for( let i = startingIndex; i <= endingIndex; i++ ) {
    if( num[i] === undefined ) break;
    pageArr.push(num[i]);
  }
  return pageArr;
}

pagination(2, 3); 
