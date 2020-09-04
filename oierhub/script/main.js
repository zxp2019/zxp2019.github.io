var menu=[
    {
        text:"首页",
        href:"https://zxp2019.github.io/oierhub/"
    },
    {
        text:"OIstream",
        href:"https://zxp2019.github.io/"
    }
]

function showMenu()
{
    document.write('<div id="menu">')
    document.write('<ul>')
    for(i=0;i<menu.length;i++)
    {
        document.write('<li><a href="'+menu[i].href+'">'+menu[i].text+'</a></li>')
    }
    document.write('</ul>')
    document.write('</div>')
}
