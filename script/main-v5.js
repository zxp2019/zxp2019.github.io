var faicons = {
    "tag" : "fa fa-tag", 
    "knowledge" : "fa fa-book",
    "postDate" : "fa fa-clock-o", 
    "updateDate" : "fa fa-check-square-o", 
    "language" : "fa fa-file"
};

var articles = [
    {
        title : "Not Found",
        url : "", 
        tags : ["Undefined"], 
        knowledges : ["Undefined"], 
        postDate : "Undefined", 
        updateDate : "Undefined", 
        language : "", 
        description : "出现了一些错误 qwq 请联系博主解决问题。错误代号：ERR_ARTICLE_0_INCLUDED。"
    }, 
    {
        title : "「置顶」新版博客测试",
        url : "blog-v4-test", 
        tags : ["GMQ", "AK", "IOI"], 
        knowledges : ["其它"], 
        postDate : "2020-05-16 14:32", 
        updateDate : "2020-05-16 14:32", 
        language : "C++", 
        description : "快来看看新版博客长什么样吧！"
    }, 
];

function showArticle(idx) {
    arc = articles[idx];
    buf = "";
    a = document.createElement("a");
    document.getElementById("blogList").appendChild(a);
    a.href = "/blog/" + arc.url + "/index.html";

    blogItem = document.createElement("div");
    a.appendChild(blogItem);
    blogItem.className = "blogItem";

    var title = document.createElement("span");
    title.className = "h";
    blogItem.appendChild(title);

    titleText = document.createTextNode(arc.title);
    title.appendChild(titleText);

    br1 = document.createElement("br");
    blogItem.appendChild(br1);

    br2 = document.createElement("br");
    blogItem.appendChild(br2);

    info = document.createElement("small");
    blogItem.appendChild(info);

    iTag = document.createElement("i");
    info.appendChild(iTag);
    iTag.className = faicons["tag"];

    tagText = "";
    for(i = 0; i < arc.tags.length; i++) {
        tagText += arc.tags[i];
        if(i != arc.tags.length - 1) {
            tagText += ", ";
        }
    }
    tagText += "  ";
    tTag = document.createTextNode(tagText);
    info.appendChild(tTag);

    iKnow = document.createElement("i");
    info.appendChild(iKnow);
    iKnow.className = faicons["knowledge"];

    knowText = "";
    for(i = 0; i < arc.knowledges.length; i++) {
        knowText += arc.tags[i];
        if(i != arc.knowledges.length - 1) {
            knowText += ", ";
        }
    }
    knowText += "  ";
    tKnow = document.createTextNode(knowText);
    info.appendChild(tKnow);

    iPDate = document.createElement("i");
    info.appendChild(iPDate);
    iPDate.className = faicons["postDate"];
    tPDate = document.createTextNode(arc.postDate+"  ");
    info.appendChild(tPDate);

    iUDate = document.createElement("i");
    info.appendChild(iUDate);
    iUDate.className = faicons["updateDate"];
    tUDate = document.createTextNode(arc.updateDate+"  ");
    info.appendChild(tUDate);

    if((arc.language.toLowerCase() != "None".toLowerCase()) && (arc.language != "")) {
        iLang = document.createElement("i");
        info.appendChild(iLang);
        iLang.className = faicons["language"];
        tLang = document.createTextNode(arc.language);
        info.appendChild(tLang);
    }

    br3 = document.createElement("br");
    blogItem.appendChild(br3);

    br4 = document.createElement("br");
    blogItem.appendChild(br4);

    descb = document.createElement("span");
    blogItem.appendChild(descb);
    tDescb = document.createTextNode(arc.description);
    descb.appendChild(tDescb);
}