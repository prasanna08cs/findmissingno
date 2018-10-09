
let array =[1,2,3,4,,6];
let n= array.length;
 let sum = n *(n+1)/2;
console.log(sum);

for (a of array){
  console.log(sum);
   if(a)
   sum= sum-a;
}
console.log(sum);
