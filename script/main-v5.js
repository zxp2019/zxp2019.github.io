/* Base Functions */
function parseKeyWord(key) {
    var s = "";
    var arr = new Array();
    for(pkwi = 0; pkwi < key.length; pkwi++) {
        if(key[pkwi] == ' ') {
            if(s != "") {
                arr.push(s);
            }
            s = "";
        }
        else {
            s += key.substr(pkwi, 1);
        }
    }
    if(s != "") {
        arr.push(s);
    }
    return arr;
}


/* Hide and Show Articles */
function showArticle(idx) {
    arc = articles[idx];
    buf = "";
    a = document.createElement("a");
    document.getElementById("blogList").appendChild(a);
    a.href = "/blog/article/" + arc.url + "/index.html";

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
    for(sai = 0; sai < arc.knowledges.length; sai++) {
        knowText += arc.knowledges[sai];
        if(sai != arc.knowledges.length - 1) {
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
function showArticles(l, r) {
    for(sasi = l; sasi <= r; sasi++) {
        showArticle(sasi);
    }
}
function showArticlesR(l, r) {
    for(sasi = r; sasi >= l; sasi--) {
        showArticle(sasi);
    }
}
function showFirstNArticles(n) {
    showArticles(1,n);
}
function showNewNArticles(n) {
    showArticlesR(articles.length-n,articles.length-1);
}
function showAllArticles() {
    showArticles(1,articles.length-1);
}
function showAllArticlesR() {
    showArticlesR(1,articles.length-1);
}
function articleSum() {
    return articles.length-1;
}
function addArticle(ttitle, uurl, ttags, kknowledges, ppostDate, uupdateDate, llanguage, ddescription) {
    newArc = {
        title : ttitle, 
        url : uurl, 
        tags : ttags, 
        knowledges : kknowledges, 
        postDate : ppostDate, 
        updateDate : uupdateDate, 
        language : llanguage, 
        description : ddescription
    }
    articles.push(newArc);
}
function clearList() {
    document.getElementById("blogList").innerHTML="";
}

/* Search */
function searchKeywords(arr) {
    var vis=new Array(),q=new Array();
    for(var i=1;i<=articleSum();i++) {
        vis.push(false);
    }
    for(var i=0;i<arr.length;i++) {
        for(var j=1;j<=articleSum();j++) {
            if(articles[j].title.toLowerCase().indexOf(arr[i].toLowerCase())!=-1) {
                if(!vis[j]) {
                    vis[j]=true;
                    q.push(j);
                }
            }
        }
        for(var j=1;j<=articleSum();j++) {
            if(articles[j].description.toLowerCase().indexOf(arr[i].toLowerCase())!=-1) {
                if(!vis[j]) {
                    vis[j]=true;
                    q.push(j);
                }
            }
        }
    }
    for(var i=0;i<q.length;i++) {
        showArticle(q[i]);
    }
}
function ssearch() {
    clearList();
    var key=document.getElementById("searchT").value;
    var a = parseKeyWord(key);
    searchKeywords(a);
}
function showAll() {
    clearList();
    showAllArticles();
}

/* Reminder */
function showReminder() {
    document.getElementById("reminder").style="";
}
function closeReminder() {
    document.getElementById("reminder").style="display:none;";
}
function remind(word) {
	document.getElementById("ok").innerHTML=word;
	showReminder();
}
