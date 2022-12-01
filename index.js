function roll(max, min, floatflag) {
    let r = Math.random() * (max - min) + min;
    return floatflag ? r : Math.floor(r);
  }
  
  let userName = ["Sara", "Lisa", "Raha", "Meer"];
  
  //ages between 12 and 64
  //Heights between 5.1 and 6
  
  let user = {
    name: userName[roll(0, userName.length)],
    age: roll(12, 65),
    height: roll(5.1, 6.1, 1).toFixed(1),
  };
  console.log(user);
  pit 