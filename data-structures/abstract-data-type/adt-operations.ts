// ADT OPERATIONS: Example-1
const arr=[1, 2, 3, 4, 5];
// O(1)
console.log(arr[2]);

const arr2=new Array(5).fill(0);
// O(n)
for(let i=0; i<arr2.length; i++){
    arr2[i]=i+1;
}
console.log(JSON.stringify(arr2));
