var headers = document.getElementById('header');
console.log(headers)
var mobileBar = document.getElementById('mobile-bar');
console.log(mobileBar)

mobileBar.onclick = function(){
    var isClose = headers.clientHeight === 60;
    if (isClose){
        headers.style.height = '200px';

    }else{
        headers.style.height = '60px';
    }
}