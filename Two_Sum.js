const target = 20
const num = [2,7,11,9]

let [numAtIndex] = num

const sampleNum = []

const recursion = () => {
    for(let i = 0 ; i< num.length ; i++){
        if(numAtIndex + num[i+1] === target){
            sampleNum.push(num.indexOf(numAtIndex),num.indexOf(num[i+1]))
          
        }
        else{
            numAtIndex = num[i+1]
        }
    }
}


recursion()
console.log(sampleNum)
