function openOrSenior(data){
    // ...
    console.log(data);

    let arr = []

    for (let x = 0; x < data.length; x++) {

        (data[x][0] >= 55 && data[x][1] > 7) ? arr.push("Senior"): arr.push("Open")
    }

    /*
    BEST SOLUTION:

    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');

    */

    console.log(arr)
  }
  
  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])