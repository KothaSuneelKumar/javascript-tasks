//Question 1
const numbers=[1,2,3,4];
const doubled=numbers.map(num=>num*2);
console.log(doubled);

//Question 2
const mixedvalues=[1,"hello",true,"world",42];
const strings=mixedvalues.filter(item=>typeof item==="string");
console.log(strings);

//Question 3
const obj= { name: "suneel", age: 25, city: "Hyderabad" , phone: 9876543210 }
const count1=Object.keys(obj).length;
console.log(count1);

//Question 4
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const mergedobj={...obj1,...obj2};
console.log(mergedobj);

//Question 5
const nested= { user: { profile: { name: "chintu", age: 25 } } };
const path ="user.profile.name";
const value=path.split(".").reduce((acc,key)=>acc[key],nested);
console.log(value);

//Question 6
const str ="suneel";
let reversed="";
for(let i=str.length-1;i>=0;i--){
    reversed+=str[i];
}
console.log(reversed);

//Question 7
const string ="aaabbbccc";
let compressed="";
let count =1;
for(let i=0;i<string.length;i++){
    if(string[i]===string[i + 1]){
        count ++;
    }else{
        compressed+=count+string[i];
        count=1;
    }
}
const result=compressed.length < string.length ? compressed:string;
console.log(result);

//Question 8
const array=[5,10,15,20];
let filtered= array.filter(num=>num>=10);
let double=filtered.map(num=>num*2);
const sum=double.reduce((total,num)=>total+num,0);
console.log(sum);

//Question 9
const date = new Date();
const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
console.log(formattedDate);

//Question 10
const min=2;
const max=5;
const random=Math.floor(Math.random()*(max-min+1))+min;
console.log(random);