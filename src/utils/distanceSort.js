export const distanceSort = (calculatedAddresses) =>{
    return calculatedAddresses.sort((a,b)=> {return parseFloat(a.distance)-parseFloat(b.distance)});
}