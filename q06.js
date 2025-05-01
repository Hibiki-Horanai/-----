//答えが合わない…

let cnt = 0;


function corats(n,x){
    //console.log(n + " " + x);
    if(n==1){
        return;
    }else if(n==x){
        cnt++;

        return;
    }else if(n%2 == 0){
        corats(n/2,x);
    }else if(n%2 == 1){
        corats(3*n + 1,x);
    }
}

for(i=0;i<=10000;i+=2){
    input = i*3 + 1;
    corats(input,i);

}
console.log(cnt);
let ans = document.getElementById("ans").textContent = cnt;
