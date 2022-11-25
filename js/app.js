

//string method used odd and even number printed

var input = "kmugesh12345678910@gmail.com"

var num = input.match(/[0-9]/g).join("");
console.log(num);
for(let i=0; i<num; i++){
   let rem = num%10;
    num = (num-rem)/10;
  if(rem%2==0){
    console.log("its even number",rem);
  }else{
    console.log("its odd number",rem);
  }
}
