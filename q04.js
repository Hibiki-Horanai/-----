
// n cm , m人
let n = 100;
let m = 5;
let cnt = 1;

function cutbar(x,y,z){
    console.log(x + " " + y + " " + z);
    if(x<y){
        z++;
        console.log("answer is " + z);
        return;
    }else{
        z++;
        cutbar(x-y,y,z);
    }
}

cutbar(n,m,cnt);