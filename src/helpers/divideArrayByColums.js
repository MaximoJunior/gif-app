export const divideArrayByColums = (arr = [], cols = 1 ) => {
    const length = arr.length;
    const copyArr = [...arr];
    const newArr = [];
     
    const itemsByColums = Math.ceil( length / cols );

    for( let i = 0; i < cols; i++ ) {
        newArr.push( copyArr.splice( 0, itemsByColums ) );
    }
    return newArr;
}
