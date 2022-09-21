// 3.1 Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.

randomArray(300, 300);

function randomArray(arrLength, maxNumber) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.floor(Math.random() * maxNumber))
        if(arr[i] > 150)
        count++;

        for (let a = 0; a < arr.length; a++) {
        if (arr[a] > 275) {
          arr[a] = "["+ arr[a] +"]";
        }
    }
    }  

document.getElementById("row1").innerHTML = arr.join(" ");
document.getElementById("row2").innerHTML = "Kiekis skaiciu virs 150 yra: " + count;
console.log("Kiekis skaiciu virs 150 yra: " + count);
console.log(arr);    
}


// 3.2 Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.


let text2 = "";
for (let i = 0; i < 3001; i++) {
    if (i % 77 === 0) { text2 += i + ","

    }
    }
let text2comma = text2.slice (0, -1)
document.getElementById("row3.2").innerHTML = text2comma;

// 3.3 Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.

let hor =""
for (let a = 0; a < 101; a++) {
    for (let i = 0; i < 101; i++) {
        hor += "*";
    }
    hor += "<br>"; 
}

document.getElementById("row3.3").innerHTML = hor;


// 3.5 Metam monetą. Monetos kritimo rezultatą imituojam Math.random() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// A.Iškritus herbui;
// B.Tris kartus iškritus herbui;
// C.Tris kartus iš eilės iškritus herbui;


coinFlip("Skaicius", "Herbas")
 function coinFlip(result1, result2) {
    
    let y = (Math.floor(Math.random() * 2));
    let resultCoin 
    if (y == 1) { resultCoin = result1
        
    } else { resultCoin = result2
        
    }

    document.getElementById("row3.5").innerHTML = "Moneta atsiverte " + y + " " + resultCoin;
}


// Scenarijus A.Iškritus herbui;

let arrCoinA = [];
let countA = 0;

for (let i = 0; i < Infinity; i++) {
    let x = Math.floor(Math.random() * 2)
    let coin
    if (x == 1) { coin = " Skaicius"
        
    } else { coin = " Herbas"
        
    }
    arrCoinA.push(coin)
    
    if(arrCoinA[i] == " Herbas"){
    countA++;
}
    if (arrCoinA[i] == " Herbas") {
        break
        
    }

}

document.getElementById("row3.5.a").innerHTML = "Scenarijus A. Kiek iskrito kartu: " + countA + " . Monetos metimo seka: " + arrCoinA;


// Scenarijus B. Tris kartus iškritus herbui;

let arrCoinB = [];
let countB = 0;

for (let i = 0; i < Infinity; i++) {
    let x = Math.floor(Math.random() * 2)
    let coin
    if (x == 1) { coin = " Skaicius"
        
    } else { coin = " Herbas"
        
    }
    arrCoinB.push(coin)
    
    if(arrCoinB[i] == " Herbas")
    countB++;

    if (countB == 3) {
        break
        
    }

}

document.getElementById("row3.5.b").innerHTML = "Scenarijus B. Kiek iskrito kartu: " + countB + " . Monetos metimo seka: " + arrCoinB;

// Scenarijus C.Tris kartus iš eilės iškritus herbui;

let arrCoinC = [];
let countC = 0;

for (let i = 0; i < 100; i++) {
    let x = Math.floor(Math.random() * 2)
    let coin
    if (x == 1) { coin = " Skaicius"
        
    } else { coin = " Herbas"
        
    }
    arrCoinC.push(coin)
    
    if(arrCoinC[i] == " Herbas")
    countC++;
//    kaip padaryti tris kartus is eiles?
    if (arrCoinC[i] == " Herbas" && arrCoinC[i] == " Herbas" && arrCoinC[i] == " Herbas") {
        break
        
    }

    }

document.getElementById("row3.5.c").innerHTML = "KLAIDA. Scenarijus C. Kiek iskrito kartu: " + countC + " . Monetos metimo seka: " + arrCoinC;


// Klausymai 

// // ciklas ir skaiciuokle. Kodel nesuveikia jeigu vietoj Math.random idedam funkcija coinFlip("Skaicius", "Herbas")???
// {
// let arrCoin = [];
// let count = 0;
// for (let i = 0; i < 10; i++) {
//     arrCoin.push(Math.floor(Math.random() * 2))
//     if(arrCoin[i] == 0)
//     count++;
// }

// console.log(count + "<br>" + arrCoin);
// }

// function randomArray(arrLength, maxNumber) {
//     let arr = [];
//     let count = 0;
//     for (let i = 0; i < arrLength; i++) {
//         arr.push(Math.floor(Math.random() * maxNumber))
//         if(arr[i] > 150)
//         count++;

//         for (let a = 0; a < arr.length; a++) {
//         if (arr[a] > 275) {
//           arr[a] = "["+ arr[a] +"]";
//         }
//     }
// }
//     }  


// 3.6.Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​Math.random()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.

function playerP(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerK(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

chessPar("Petras", "Kazys")
function chessPar( player1, player2) {
    
    let P = playerP(10, 20);
    let K = playerK(5, 25);
    let win 

    if (P > K) { win = player1
        
    } 

    if (K > P) {  win = player2
        
    }

    if (P == K) { win = "Lygu"
        
    }

    document.getElementById("row3.6.1").innerHTML ="Partija: " + player2 + " " + K + " vs " + player1 + " " + P + ". " + '"Partiją laimėjo: ' + win + '"';

}


chessGame("Petras", "Kazys",222); 

function chessGame(player1, player2, maxPoints) { 
    
let PCont = 0;
let KCount = 0;
let winner;
while (true) {


    let P = playerP(10, 20);
    let K = playerK(5, 25);
    PCont += P;
    KCount += K;
    if (PCont >= maxPoints || KCount >= maxPoints) {
        if (PCont > KCount) {
            winner = player1;
    
        }else{
            winner = player2;
        }
    
        if (KCount == PCont) {
            winner = "Lygu";
        }
        break;
    }

    
}
document.getElementById("row3.6.2").innerHTML = "Žaidimas: " + "Kazys" + " " + KCount + " vs " + "Petras" + " " + PCont + ". " + '"Žaidimą laimėjo: ' + winner + '"';
}


// 3.8 Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// A. “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
// B. “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

// A:
{
let arrVinys = ["Vinis1","Vinis2","Vinis3","Vinis4","Vinis5"];
let count = 0;
let countArr = 0
let ikalimas = 0;

for (let i = 0; i < arrVinys.length; i++) {
    for (let a = 0; a < Infinity; a++) {
        let smugis = Smugis(5,20)
        ikalimas += smugis;
    
        if (ikalimas >= 850) {
            break
        }
        count++ ;
        
    }
    countArr+= count;
    
}
 console.log(ikalimas + " " + count + " " + countArr);
 document.getElementById("row3.8.a").innerHTML = " A variantas, bendras smugiu skaicius: " + countArr

}


// B
{
let arrVinys = ["Vinis1","Vinis2","Vinis3","Vinis4","Vinis5"];
let count = 0;
let countArr = 0
let ikalimas = 0;
let Prob;

for (let i = 0; i < arrVinys.length; i++) {
    for (let a = 0; a < Infinity; a++) {
        let smugis = Smugis(20,30);
        Prob = Math.floor(Math.random() * 2);
        if (Prob == 0) { smugis = 0
            
        } 
        
        ikalimas += smugis;
    
        if (ikalimas >= 850) {
            break
        }
        count++ ;
        
    }
    countArr+= count;
    
}
 console.log("B" + ikalimas + " " + count + " " + countArr);
 document.getElementById("row3.8.b").innerHTML = " B variantas, bendras smugiu skaicius: " + countArr
}

function Smugis(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// 1.
for (let i = 0; i < 10; i++) {
    console.log( "labas, ");
    
}

// 2
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// 3.
let arrAugalai = ["roze", "tulpe", "gvazdikas", "lelija", "ramunele", "gele6", "gele7", "gele8", "gele9", "gele10"]
// 4.      
for(let i = 0; i < arrAugalai.length; i++){
  console.log(arrAugalai[i]);
}
// 5.
arrAugalai.reverse();
for(let i = 0; i < arrAugalai.length; i++){
    console.log(arrAugalai[i]);
  }
// 6.
let NUM = 9  
for (let i = 0; i < 41; i++) {
    NUM+= 1
    if (NUM % 2 == 0) {
    console.log(NUM);        
    }
}
// 7.
{
let NUM = 9  
for (let i = 0; i < 41; i++) {
    NUM+= 1
    if (NUM % 10 == 0) {
        continue        
    }
    if (NUM % 2 == 0) {
    console.log(NUM);        
    }
}
}
// 8.
let count = 0
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
     count++
    }
    
}
 console.log(count);
//  9.
arrAugalai.reverse();
console.log(arrAugalai[0].length);

// Kaip veikai forEach funkcija siu atveju?

// let text = "";
// let cont = 0
// arrAugalai.forEach(myFunction);
// console.log(text);

// function myFunction(length) {
//   text += length + ", " ;
//   cont++

// }

let Kiekis = 0
for (let i = 0; i < arrAugalai.length; i++) {
    const element = arrAugalai[i];
    if (element.length < 5 || element.length > 7) {
        Kiekis++ 
        continue
    }
    console.log(element);
}
console.log(Kiekis);
console.log(arrAugalai);