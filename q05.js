// 力ずくでの解決はできたが、再帰を使うとエラーでうまく動作しない。
//再帰2回目の配列がpropertyエラーで止まる

let coins = [10,50,100,500];
let cnt = 0;
let target = 1000;
let usable = 15;

for(i=0;i<=2;i++){
    for(j=0;j<=10;j++){
        for(k=0;k<=15;k++){
            for(l=0;l<=15;l++){
                if(i+j+k+l <= 15 && 500*i + 100*j + 50*k + 10*l == 1000){
                    cnt++;
                }            
            }
        }
    }
}

let ans = document.getElementById("ans").textContent = cnt;
//