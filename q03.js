let card = [];
// 表：true,裏：false

for(i = 0 ; i < 100 ; i ++){
    card[i] = false;
}

for(k = 2 ; k <= 100 ; k++){
    for(j=0;(k * j + k -1)<100;j++){
        card[k * j + k -1] = !card[k * j + k -1];
    }
}

for(l = 0 ;l<100;l++){
    if(card[l] == false){
        console.log(l+1);
    }
}
