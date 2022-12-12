//ボタン、コンソール、表示などの定義
const button_get = document.querySelector('#gators_num_get');
// const button_doki = document.getElementsByClassName('button dokidoki');
const gators_num_in = document.querySelector('#gators_num');
const num_out_msg = document.querySelector('#num_out_msg');
const gators_img = document.querySelector('#gators_img');

//ボタンクラスの取得　グローバル変数
const buttonClass = document.querySelector('#gators_num_get');

//console.log("gators_img: ",gators_img)

//クリック時のコールバック
button_get.addEventListener('click', updateButton);

//ボックスに入力された時のコールバック
gators_num_in.addEventListener('change', updateform);

//ボタンが押された時の挙動
function updateButton() {
    //ボックスの値を id =#gators_num_out_msgに入力
    gators_num_out_msg = document.getElementById('gators_num').value;
    num_out_msg.innerText = "Summon gators number:" +gators_num_out_msg;
    console.log("gators_num_out_msg: ",gators_num_out_msg);
    gators_img.innerText = "🐊".repeat(gators_num_out_msg) ;
}

//ボックスに入力された時の挙動
//動的にclassを割り当て、適応するcssを変える。
//https://1-notes.com/javascript-operate-class-name/#
function updateform(){
    gators_num_in_msg = document.getElementById('gators_num').value;
    console.log("gators_num_in_msg: ",gators_num_in_msg);
    console.log("buttonClass: ",buttonClass);
    if(gators_num_in_msg >=10){
        console.log("Class change");
        buttonClass.classList.replace('button1','button1_dokidoki');
    }else{
        console.log("Class No change");
        buttonClass.classList.replace('button1_dokidoki','button1');
    }
}
