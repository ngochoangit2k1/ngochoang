var headers = document.getElementById('header');
console.log(headers)
var mobileBar = document.getElementById('mobile-bar');
console.log(mobileBar)
var overView = document.getElementById('overview');
console.log(overView)
var flexMenu = document.getElementById('flex-menu');

mobileBar.onclick = function(){
    var isClose = headers.clientHeight === 60;
    if (isClose){
        headers.style.height = '200px';
        flexMenu.style.opacity = '1';
    }else{
        headers.style.height = '60px';
        flexMenu.style.opacity = '0';
    }
}
overView.onclick = function(){
    headers.style.height = '60px';
}