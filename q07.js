let cnt = 0;
let start_str = "1964/10/10";
let end_str = "2030/07/24";
let target = start_str;

while(target != end_str){
    convert_rev(target);
    target = nextDate(target);
}



function convert_rev(str){
    // 日付け文字列から逆順日付文字列を出力する関数
    // 日付けを整数に変換
    let temp1 = parseInt(str.replaceAll("/",""));
    // 整数を2進数に変換
    let temp2 = temp1.toString(2);
    // 2進数の逆順に変換
    let temp2_rev = temp2.split("").reverse().join("");
    // 2進数から10進数に戻す
    let temp3 = parseInt(temp2_rev,2);
    
    if(temp2 == temp2_rev){
        console.log(temp3);
    }
    return toDate(temp3);
}

function toDate(num){
    //8桁整数から日付へ変換する関数
    let text = num.toString().substring(0,4)+"/"+num.toString().substring(4,6)+"/"+num.toString().substring(6,8);
    let date_text = new Date(text);
    return date_text.getFullYear() + "/" + (date_text.getMonth()+1).toString().padStart(2,"0") + "/" + date_text.getDate().toString().padStart(2,"0");
}

function nextDate(dt){
    // 日付け文字列から次の日の日付文字列を出力する関数
    let this_date = new Date(dt);
    this_date.setDate(this_date.getDate() + 1);
    return this_date.getFullYear() + "/" + (this_date.getMonth() + 1).toString().padStart(2,"0") + "/" + this_date.getDate().toString().padStart(2,"0");

}



let ans = document.getElementById("ans").textContent = convert_rev(target);