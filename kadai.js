const button = document.querySelector('#gators_num_get');
//console.log("button: ",button)
const paragraph = document.querySelector('#gators_num_out_msg');
const gators_img = document.querySelector('#gators_img');
//console.log("paragraph: ",paragraph)
console.log("gators_img: ",gators_img)

button.addEventListener('click', updateButton);

//ボタンが押された時の挙動
function updateButton() {
    //ボックスの値を id =#gators_num_out_msgに入力
    gators_num_out_msg = document.getElementById('gators_num').value;
    paragraph.innerText = "Summon gators number:" +gators_num_out_msg
    console.log("gators_num_out_msg: ",gators_num_out_msg)
    gators_img.innerText = "🐊".repeat(gators_num_out_msg) ;
    // for(let i =0; i<=gators_num_out_msg; i++){
    //     gators_img.innerText = "🐊" ;
    // }

}

//飛び跳ねるボタン
const button_jump = document.getElementById("button");
button_jump.addEventListener("mousedown", () => {button_jump.classList.add("jump");});
button_jump.addEventListener("animationend", () => {button_jump.classList.remove("jump");});
button_jump.addEventListener("animationcancel", () => {button_jump.classList.remove("jump");});



//文字をピョンピョンさせてみる
function randomCharactor(c) {
    //跳ねさせる要素をすべて取得
    var randomChar = document.getElementsByClassName(c);
    //for で総当たり
    for (var i = 0; i < randomChar.length; i++) {
        //クロージャー
        (function(i) {
            //i 番目の要素、テキスト内容、文字列の長さを取得
            var randomCharI = randomChar[i];
            var randomCharIText = randomCharI.textContent;
            var randomCharLength = randomCharIText.length;

            //何番目の文字を跳ねさせるかをランダムで決める
            var Num = ~~(Math.random() * randomCharLength);

            //跳ねさせる文字を span タグで囲む、それ以外の文字と合わせて再び文字列を作る
            var newRandomChar = randomCharIText.substring(0, Num) + "<span>" + randomCharIText.charAt(Num) + "</span>" + randomCharIText.substring(Num + 1, randomCharLength);
            randomCharI.innerHTML = newRandomChar;

            //アニメーションが終わったら再び関数を発火させる
            document.getElementsByClassName(c)[0].children[0].addEventListener("animationend", function() {
                randomCharactor(c)
            }, false)
        })(i)
    }
}
//クラス名が pyonpyon のクラスを跳ねさせる
randomCharactor("pyonpyon");