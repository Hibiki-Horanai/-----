let boy = 20;
let girl = 10;
boy++;
girl++;

let arr = new Array(girl);
for(i=0;i<girl;i++){
    arr[i] = new Array(boy);
    for(j=0;j<boy;j++){
        arr[i][j] = 0;
    }
}
arr[0][0] = 1;
for(i=0;i<girl;i++){
    for(j=0;j<boy;j++){
        if((i != j) && (boy-j != girl-i)){
            if(i>0){
                arr[i][j] += arr[i-1][j];
                // console.log(arr[i][j]);
            }
            if(j>0){
                arr[i][j] += arr[i][j-1];
            }
        }
    }
}


 console.log(arr[10][19]);