//一個目の写真の入れ替わり
function imageChange() {
    document.getElementById("album").innerHTML = "<img src='img17.jpg'>";
}
function imageNew() {
    document.getElementById("album").innerHTML = "<img src='img12.jpg'>";
}
function imageMoreNew() {
    document.getElementById("album").innerHTML = "<img src='img2.jpg'>";
}
function imageMoreMore() {
    document.getElementById("album").innerHTML = "<img src='img19.jpg'>";
}
function imageReturn() {
    location.reload();
}
//２個目の写真の入れ替わり
function imageChange2() {
    document.getElementById("album2").innerHTML = "<img src='img6.jpg'>";
}
function imageNew2() {
    document.getElementById("album2").innerHTML = "<img src='img19.jpg'>";
}
function imageMoreNew2() {
    document.getElementById("album2").innerHTML = "<img src='img18.jpg'>";
}
function imageMoreMore2() {
    document.getElementById("album2").innerHTML = "<img src='img13.jpg'>";
}
function imageReturn2() {
    document.getElementById("album2").innerHTML = "<img src='img11.jpg'>";
}

//実行
setTimeout(imageReturn, 39000), setTimeout(imageChange, 8000), setTimeout(imageNew, 16000), setTimeout(imageMoreNew, 24000)
,setTimeout(imageMoreMore, 32000)//リロードしてまた最初からアニメーションをループ
setTimeout(imageReturn2, 39000), setTimeout(imageChange2, 8000), setTimeout(imageNew2, 16000), setTimeout(imageMoreNew2, 24000)
, setTimeout(imageMoreMore2, 32000)//リロードしてまた最初からアニメーションをループ




