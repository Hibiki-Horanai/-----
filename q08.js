//一度リセット    ///////////give up////////
// let N =3;

// let move_direction = [[0,1],[0,-1],[1,0],[-1,0]];
// let position = [];
 
// position[0] = [0,0];

// let cnt = 1;
// let cnt_rep = 0;
// let cnt_ans = 0;



// function judge_move(arr,dir){
//     let temp = [arr[arr.length-1][0]+dir[0],arr[arr.length-1][1]+dir[1]];
    
//     // if(arr.includes(temp)){
//     //     return false;
//     // }else{
//     //     return true;
//     // }
//     for(i=0;i<arr.length;i++){
//         if(arr[i][0] == temp[0] && arr[i][1] == temp[1] ){
//             return false;
//         }else{
//             continue;
//         }
//     }
//     return true
// }

// function move(arr,n){
//     //再帰関数で12回移動した場合の座標配列を出力
//     //途中で同一経路を通った場合は終了
    
//     // 右に行く場合
//     if(n==12){
//         console.log("end");
//         return;
//     }
//     // まずjudge_moveで判断してtrueなら次へ
//         if(judge_move(arr,move_direction[0])){
//             arr[arr.length] =  [0,0];
//             arr[arr.length][0] = arr[arr.length-1][0];
//             arr[arr.length][1] = arr[arr.length-1][1]+1;
//             console.log(arr);
//             move(arr,n+1);
//         }
//     // 左に行く場合

//     // 上に行く場合
    
//     // 下に行く場合


//     // arr[arr.length] = [arr[arr.length-1][0]+next[0],arr[arr.length-1][1]+next[1]];
//     return;
// }
// console.log(move(position,1));

let limit = 3;
let position = ["x0y0"];

move(position);
function judge(arr,dir){
    //output : true or false
    let temp = arr[arr.length-1].replace("x","").replace("y",",").split(",");
    let x = parseInt(temp[0]);
    let y = parseInt(temp[1]);
    if(dir == 0){
        //右に行く処理
        x++;
    }else if(dir == 1){
        //左に行く処理
        x--;
    }else if(dir == 2){
        //上に行く処理
        y++;
    }else if(dir == 3){
        //下に行く処理
        y--;
    }

    let compare = "x"+x+"y"+y;

    for(i=0;i<arr.length;i++){
        if(arr[i] == compare){
            return false;
        }
    }
    return true;
}

function move(arr){

    let temp = arr[arr.length-1].replace("x","").replace("y",",").split(",");
    let x = parseInt(temp[0]);
    let y = parseInt(temp[1]);
    console.log(arr);
    if(judge(arr,0) == true){
        //右に行く処理
        x++;
        let compare = "x"+x+"y"+y;
        let arr_temp = arr; 
        arr_temp[arr_temp.length] = compare;
        console.log(arr_temp);
        x--;
    }
    if(judge(arr,1) == true){
        //左に行く処理
        x--;
        let compare = "x"+x+"y"+y;
        let arr_temp1 = arr; 
        arr_temp1[arr_temp1.length] = compare;
        console.log(arr_temp1);
    }
    console.log(arr);
    if(judge(arr,2) == true){
        //上に行く処理
        y++;
        let compare = "x"+x+"y"+y;
        let arr_temp = arr; 
        arr_temp[arr_temp.length] = compare;
        console.log(arr_temp);
    }
    if(judge(arr,3) == true){
        //下に行く処理
        y--;
        let compare = "x"+x+"y"+y;
        let arr_temp = arr; 
        arr_temp[arr_temp.length] = compare;
        console.log(arr_temp);
    } 
    return arr;
    

}