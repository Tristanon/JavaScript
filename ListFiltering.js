//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function filter_list(l) {
  let result = [];
  for ( let i = 0; i < l.length; i++){
    if( typeof l[i] == "number"){
      result.push(l[i]);
    }
  }
  return result;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
function filter_list(l) {
  return l.filter(word => typeof word == "number")
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//