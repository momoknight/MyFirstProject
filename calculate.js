/*输入框中显示计算过程*/
function get(num){
    var shownums=document.getElementById("display");
    shownums.value+=num;
}
/*清除输入框中的内容*/
function clear(){
    document.getElementById("display").value="";
}
var cb=document.getElementById("clear");
cb.addEventListener("click",clear,false);
/*删除功能*/
function backspace(){
    var shownums=document.getElementById("display");
    shownums.value=shownums.value.substring(0,shownums.value.length-1);
}
var db=document.getElementById("delete");
db.addEventListener("click",backspace,false);
/*计算功能*/
var re=document.getElementById("cal");
function calculate(){
    var result=document.getElementById("display").value;
    document.getElementById("display").value=eval(result);
}
re.addEventListener("click",calculate,false);
/*显示时间 */
function showTime(){
    var today=new Date();
    var y=today.getFullYear();
    var M=today.getMonth()+1;
    var d=today.getDay();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    var week=d;
    var w=["星期天","星期一","星期二","星期三","星期四","星期五","星期六",];
    document.getElementById("time").innerHTML=y+"年"+M+"月"+d+"日"+"<br>"+h+":"+m+":"+s+":"+w[week];
    /*等待1秒后调用showTime函数*/
    setTimeout("showTime()",1000);
}
/*分和秒的数字小于10，则在前面加上0 */
function checkTime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}
showTime();