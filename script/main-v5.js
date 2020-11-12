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
    for(sai = 0; sai < arc.knowledges.length; sai++) {
        knowText += arc.tags[sai];
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
