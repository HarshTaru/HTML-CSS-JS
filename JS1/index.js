// let i = 1;
// console.log(i);


// for (let i =1;i<=5;i++)
// {
//     let temp ='';
//     for(let j=1;j<=i;j++)
//     {
//         temp+=j;
//     }
//     console.log(temp);
    
// }
// let i1=1;
// while(i1<=5)
//     {
//         let temp ='';
//         let j1=1;
//         while(j1<=i1)
//         {
//             temp+=j1;
//             j1++;
//         }
//         console.log(temp);
//     i1++;
//     }


// function sumofnumbers(numbers){
//     let sum1=0
//     numbers.forEach(function(number){
//         sum1+=number;
//     });
//     console.log(numbers);
//     for(let number of numbers)
//         {   
//             console.log(number);
//             sum1+=Number(number);
//         }
//     return sum1;
// }
function functionName(parameter1,parameter2){
    return parameter1+parameter2;
}

const ouput=(parameter1,parameter2)=>{
    return parameter1+parameter2;
}


// const output = (numbers)=>{
//     let sum1=0;
//     numbers.forEach(function(number){
//         sum1+=number;
//     });
//     return sum1;

// }
// console.log(output([1,2,3,4,5]));

// console.log(sumofnumbers([1,2,3,4,5]));

console.log(functionName(1,2));
console.log(ouput(1,2))
