//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 1:
function isValidWalk(walk) {
  direction = {
    horizontal:0,
    vertical:0
  }
  if (walk.length != 10){
    return false;
  }
  for (i = 0; i < walk.length; i++ ){
    if(walk[i] == "w"){
      direction.horizontal -= 1;
    }else if(walk[i] == "e"){
      direction.horizontal += 1;
    }else if(walk[i] == "n"){
      direction.vertical += 1;
    }else if(walk[i] == "s"){
      direction.vertical -= 1;
    }
  }
  if (direction.horizontal == 0 && direction.vertical == 0){
    return true;
  }else{
    return false;
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Solution 2:
function isValidWalk(walk) {
  let dx = 0;
  let dy = 0;
  let step = walk.length;
  for (let i = 0; i < walk.length ; i++){
    switch(walk[i]){
        case "w":
          dx -= 1;
          break;
        case "e":
          dx += 1;
          break;
        case "n":
          dy += 1;
          break;
        case "s":
          dy -= 1;
          break;
    }
  }
  if(dx == 0 && dy == 0 && step == 10){
    return true;
  }else{
    return false;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
