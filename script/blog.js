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
