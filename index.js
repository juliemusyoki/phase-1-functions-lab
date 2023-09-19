
function distanceFromHqInBlocks(pickupBlock) {
    const hqBlock = 42; 
    return Math.abs(pickupBlock - hqBlock); 
  }
  
  
  function distanceFromHqInFeet(pickupBlock) {
    const blocks = distanceFromHqInBlocks(pickupBlock);
    return blocks * 264; 
  }
  
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * 264; 
  }
  

  function calculatesFarePrice(startBlock, endBlock) {
    const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
  
    if (feetTravelled <= 400) {
      return 0; 
    } else if (feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02; 
    } else if (feetTravelled <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far'; 
    }
  }
  
  // Testing the functions
  console.log(distanceFromHqInBlocks(43)); 
  console.log(distanceFromHqInFeet(43)); 
  console.log(distanceTravelledInFeet(50, 60)); 
  console.log(calculatesFarePrice(34, 32)); 
  console.log(calculatesFarePrice(34, 24)); 
  console.log(calculatesFarePrice(34, 23)); 
  
