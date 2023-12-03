

//alert("Warning！");  //彈出式視窗
/* 
document.querySelector("html").onclick = function () {  
    alert("不要點我!");		//視窗被點擊時 且可重複觸發
    };                          
*/


var myImages = document.querySelectorAll("img");

myImages.forEach(function(myImage) 
{
  myImage.onclick = function() 
  {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/backgroundN.jpg") {
      myImage.setAttribute("src", "images/backgroundW.jpg");
    }
    if (mySrc === "images/backgroundW.jpg") {
      myImage.setAttribute("src", "images/backgroundN.jpg");
    }
  };
});


// 点击按钮时返回顶部
function scrollToTop() {
    document.body.scrollTop = 0; // 兼容旧版本浏览器
    document.documentElement.scrollTop = 0; // 现代浏览器
}








