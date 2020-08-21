function hideList()
{
    document.getElementById("divlist").style="display:none;"
}
function showList()
{
    document.getElementById("divlist").style=""
}
function hideTag()
{
    var arr=document.getElementsByClassName("ttag")
    for(i=0;i<arr.length;i++)
    {
        arr[i].style="display:none;"
    }
}
function showTag()
{
    var arr=document.getElementsByClassName("ttag")
    for(i=0;i<arr.length;i++)
    {
        arr[i].style=""
    }
}
function hideToolBox()
{
    document.getElementById("toolBox").style="display:none;"
    document.getElementById("toolBoxHide").style=""
}
function showToolBox()
{
    document.getElementById("toolBox").style=""
    document.getElementById("toolBoxHide").style="display:none;"
}
function refresh()
{
    window.location.reload(true)
}
function showBgImg()
{
    document.getElementById("container").style="display:none;"
    document.getElementById("needChange").innerHTML='<i class="fa fa-compress"></i>'
    document.getElementById("needChange").setAttribute("onclick","hideBgImg()")
    document.getElementById("needChange").title="退出全屏显示"
}
function hideBgImg()
{
    document.getElementById("container").style=""
    document.getElementById("needChange").innerHTML='<i class="fa fa-expand"></i>'
    document.getElementById("needChange").setAttribute("onclick","showBgImg()")
    document.getElementById("needChange").title="喜欢这张背景图？点击全屏显示"
}
