       //  1-masala
// function topuvchiSon(topishUchunSon, karraliSon1, karraliSon2) {
//     for (let i = 1; i <= topishUchunSon; i++) {
//         if (i % karraliSon1 === 0 && i % karraliSon2 === 0) {
//             console.log(i);
//         }
//     }
// }
// topuvchiSon(100, 3, 7);

  // 2-masala

//   function juftSonlarYigindisi(n) {
//     let yigindi = 0;
//     for (let i = 2; i <= n; i += 2) {
//       yigindi += i;
//     }
//     return yigindi;
//   }

//   console.log(juftSonlarYigindisi(10)); // 30

       // 3-masala
// function yigindi(n) {
// let yigindi = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0 && i % 7 !== 0) {
//       yigindi += i;
//     }
//   }
//   return yigindi;
// }
// let n = 100; 
// console.log(yigindi(n));

     // 4-masala 

    //  function manfiySonlarYigindisi(a, b) {
    //     let yigindi = 0;
    
    //     for (let i = a; i <= b; i++) {
    //         if (i < 0) {
    //             yigindi += i;
    //         }
    //     }
    
    //     return yigindi;
    // }
    
    // let a = -5;
    // let b = 10;
    // let natija = manfiySonlarYigindisi(a, b);
    // console.log(${a}, {b});
        
      // 5-masala

//  function faktorial(n) {
//  if (n === 0 || n === 1) {
//  return 1;
//  } else {
//   return n * faktorial(n - 1);
//   }
//  }
//  let son = 5;
// let natija = faktorial(son);
// console.log(`${son} = ${natija}`);

      // 6-masala

// function boluvchilar(son) {
//   let boluvchilarArray = [];
    
//    for (let i = 1; i <= son; i++) {
//            if (son % i === 0) {
//               boluvchilarArray.push(i);
//             }
//         }
    
//         return boluvchilarArray;
//     }
    
//     let berilganSon = 12;
//     let boluvchilarNatija = boluvchilar(berilganSon);
//     console.log(`${berilganSon} sonining boluvchilari: ${boluvchilarNatija}`);

//   7-masala

// function boluvchilarSoni(son) {
//     let boluvchiSoni = 0;

//     for (let i = 1; i <= son; i++) {
//         if (son % i === 0) {
//             boluvchiSoni++;
//         }
//     }

//     return boluvchiSoni;
// }

// let berilganSon = 24;
// let boluvchiSoniNatija = boluvchilarSoni(berilganSon);
// console.log(`${berilganSon} sonining boluvchilar soni: ${boluvchiSoniNatija}`);

//  8-masala

// function tubSonmi(son) {
//     if (son <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(son); i++) {
//         if (son % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// let berilganSon = 13;
// if (tubSonmi(berilganSon)) {
//     console.log(`${berilganSon} tub son.`);
// } else {
//     console.log(`${berilganSon} tub emas.`);
// }

//  9-masala 

// function kvadratYigindisi(n) {
//     let yigindi = 0;

//     for (let i = 1; i <= n; i++) {
//         yigindi += i * i;
//     }

//     return yigindi;
// }
// let n = 5;
// let natija = kvadratYigindisi(n);
// console.log(`1 dan ${n} gacha bo'lgan sonlar kvadratlarining yig'indisi: ${natija}`);

// 10-masala 

function tubSonlarYigindisi(n) {
    function tubSonmi(x) {
        if (x <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return true;
    }

    let yigindi = 0;

    for (let i = 2; i <= n; i++) {
        if (tubSonmi(i)) {
            yigindi += i;
        }
    }

    return yigindi;
}


let n = 10;
let natija = tubSonlarYigindisi(n);
console.log(`1 dan ${n} gacha bo'lgan tub sonlar yig'indisi: ${natija}`);