// 11以上で回文数

String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}

// 11から探索開始
let num = 11;
while(true){
    if((num.toString() == num.toString().reverse()) && 
        (num.toString(8) == num.toString(8).reverse()) &&
        (num.toString(2) == num.toString(2).reverse())
    ){
        console.log(num);
        break;
    }
    num+=2;
}