
//1 snacks

const zucchine= [
    {
        name: "Zucchino nero di Milano",
        peso:"10",
        lunghezza:"20"
    },
    {
        name: "Zucchina napoleta",
        peso:"15",
        lunghezza:"23"
    },
    {
        name: "Zucchina romana",
        peso:"8",
        lunghezza:"10"
    },
    {
        name: "Zucchin o ortolano",
        peso:"19",
        lunghezza:"25"
    },
    {
        name: "Zucchina lunga di fiorentina",
        peso:"15",
        lunghezza:"30"
    },
    {
        name: "Zucchina bianca",
        peso:"12",
        lunghezza:"14"
    },
    {
        name: "Zucchina rigata pugliese",
        peso:"15",
        lunghezza:"23"
    },
    {
        name: "Zucchino tondo di piacenza",
        peso:"10",
        lunghezza:"20"
    },
    
]
let peso = 0;

let pesoZucchinaBuona = 0;
const zucchineBuone = []

let pesoZucchinacattiva = 0;
const zucchineCattive = []

zucchine.forEach((element)=>{
    peso += element.peso
    if(element.lunghezza >= 15){
        zucchineBuone.push(element)
        pesoZucchinaBuona += element.peso
    } else{
        zucchineCattive.push(element)
        pesoZucchinacattiva += element.peso
    }
});

console.log(peso,zucchineBuone,zucchineCattive,pesoZucchinaBuona,pesoZucchinacattiva)








 //2 snacks

 console.log(reverse("buongiorno"))                                //per rigirare una stringa si usa split  e reverse
function reverse(string){
    return string.split("").reverse().join("");
}

function numbersInverse(number){                                    // un numereo come argomento e ritorna il suo opposto
    return -number
} 
console.log(numbersInverse(569))


const lista=[1,56,1,8,451,659,8454,848,659,5,
"buongriron","ajdfskasnfv","sedjfsajf","kkgjls","egfajef","sujdfs","skjfhks","slfkowekf","pslfkskf","knbfjbsf"];

const newlista = lista.map((element) =>(isNaN(parseInt(element))) ? reverse(element) : numbersInverse(element));

console.table(newlista)

// 3 snakcs


const arrayOne =["a","b","c","d","e","f"]
const arraytwo =[1,2,3,4,5,6]

function arrayFonder ( primoArray, secondoArray){
    const min = Math.min(primoArray.length, secondoArray.length);                                   // una funzione che ci restituisce il numero più piccolo tra tutti quelli che inseriamo
    const arrayUnito=[];                                                               
    for( let i= 0; i < min; i++){
        arrayUnito.push(primoArray[i],secondoArray[i])
    }
    return arrayUnito;
}
console.log (arrayOne, arraytwo)
console.table(arrayFonder(arrayOne, arraytwo))



//4 snacks

const newArray = ["ciao","buongirono","salve","buonasera"];
const numeroB = generateRandomInt(0, newArray.length - 1);
const numeroA = generateRandomInt(0, numeroB - 1);

function arraySplitter(newArray, numeroOne,numeroTwo){
    if(numeroOne >= newArray.length || numeroTwo >= newArray.length){
        return false;
    }else{
        const array =[];
         for ( let i = numeroTwo; i < numeroOne ; i++){
            array.push(newArray[i])
        }
        return array;
    }

}   

function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max - min +1)) +min);
}

console.log( newArray);
console.log(numeroB,numeroA)
console.table(arraySplitter(newArray,numeroB,numeroA));