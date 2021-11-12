function imageChange() {
    document.getElementById("album").innerHTML = "<img src='img17.jpg'>";
}
function imageReturn() {
    document.getElementById("album").innerHTML = "<img src='img14.jpg'>";
}
function imageChange2() {
    document.getElementById("album2").innerHTML = "<img src='img6.jpg'>";
}
function imageReturn2() {
    document.getElementById("album2").innerHTML = "<img src='img11.jpg'>";
}
function imageChange3() {
    document.getElementById("album3").innerHTML = "<img src='img8.jpg'>";
}
function imageReturn3() {
    document.getElementById("album3").innerHTML = "<img src='img3.jpg'>";
}
function imageChange4() {
    document.getElementById("album4").innerHTML = "<img src='img7.jpg'>";
}
function imageReturn4() {
    document.getElementById("album4").innerHTML = "<img src='img10.jpg'>";
}
setInterval(imageReturn,8000)
setInterval(imageChange,5000)
setInterval(imageReturn2,7000)
setInterval(imageChange2,5000)
setInterval(imageReturn3,8000)
setInterval(imageChange3,6000)
setInterval(imageReturn4,9000)
setInterval(imageChange4,7000)



