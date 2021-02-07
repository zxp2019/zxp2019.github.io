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

/* Show People */
function showPeople(id, faDivId) {
    // console.log(faDivId);
    // console.log(document.getElementById(faDivId));
    var pinc = document.createElement("div");
    document.getElementById(faDivId).appendChild(pinc);
    pinc.className = "leftLine peopleInfoContainer";

    var pic = document.createElement("div");
    pinc.appendChild(pic);
    pic.className = "peopleImgContainer";

    var im = document.createElement("img");
    pic.appendChild(im);
    im.src = peoples[id].img;
    im.className = "circle";

    var poc = document.createElement("div");
    pinc.appendChild(poc);
    poc.className = "peopleOtherContainer";

    var pocb = document.createElement("b");
    poc.appendChild(pocb);
    var pocbt = document.createTextNode(peoples[id].name);
    pocb.appendChild(pocbt);

    var br1 = document.createElement("br");
    poc.appendChild(br1);

    var pocs = document.createElement("span");
    poc.appendChild(pocs);
    var pocst = document.createTextNode(peoples[id].description);
    pocs.appendChild(pocst);

    var pc = document.createElement("div");
    document.getElementById(faDivId).appendChild(pc);
    pc.style = "font-size:16px;";

    var tb = document.createElement("table");
    pc.appendChild(tb);
    tb.className = "people";

    if(peoples[id].mail != "") {
        var trmail = document.createElement("tr");
        tb.appendChild(trmail);
        var tdmail1 = document.createElement("td");
        trmail.appendChild(tdmail1);
        var iMail = document.createElement("i");
        tdmail1.appendChild(iMail);
        iMail.className = faicons["mail"];
        var tdmail2 = document.createElement("td");
        trmail.appendChild(tdmail2);
        var aMail = document.createElement("a");
        tdmail2.appendChild(aMail);
        aMail.href = "mailto:" + peoples[id].mail;
        var tMail2 = document.createTextNode(peoples[id].mail);
        aMail.appendChild(tMail2);
    }
    
    if(peoples[id].website != "") {
        var trwebs = document.createElement("tr");
        tb.appendChild(trwebs);
        var tdwebs1 = document.createElement("td");
        trwebs.appendChild(tdwebs1);
        var iWebs = document.createTextNode("Website");
        tdwebs1.appendChild(iWebs);
        var tdwebs2 = document.createElement("td");
        trwebs.appendChild(tdwebs2);
        var aWebs = document.createElement("a");
        tdwebs2.appendChild(aWebs);
        aWebs.href = peoples[id].website;
        var tWebs2 = document.createTextNode(peoples[id].website);
        aWebs.appendChild(tWebs2);
    }
    
    if(peoples[id].qq != "") {
        var trqq = document.createElement("tr");
        tb.appendChild(trqq);
        var tdqq1 = document.createElement("td");
        trqq.appendChild(tdqq1);
        var iQq = document.createTextNode("QQ");
        tdqq1.appendChild(iQq);
        var tdqq2 = document.createElement("td");
        trqq.appendChild(tdqq2);
        var aQq = document.createElement("a");
        tdqq2.appendChild(aQq);
        var tQq2 = document.createTextNode(peoples[id].qq);
        aQq.appendChild(tQq2);
    }
    
    if(peoples[id].wechat != "") {
        var trwc = document.createElement("tr");
        tb.appendChild(trwc);
        var tdwc1 = document.createElement("td");
        trwc.appendChild(tdwc1);
        var iWc = document.createTextNode("微信");
        tdwc1.appendChild(iWc);
        var tdwc2 = document.createElement("td");
        trwc.appendChild(tdwc2);
        var aWc = document.createElement("a");
        tdwc2.appendChild(aWc);
        var tWc2 = document.createTextNode(peoples[id].wechat);
        aWc.appendChild(tWc2);
    }

    if(peoples[id].luoguUser != "") {
        var trlg = document.createElement("tr");
        tb.appendChild(trlg);
        var tdlg1 = document.createElement("td");
        trlg.appendChild(tdlg1);
        var iLg = document.createTextNode("洛谷");
        tdlg1.appendChild(iLg);
        var tdlg2 = document.createElement("td");
        trlg.appendChild(tdlg2);
        var aLg = document.createElement("a");
        tdlg2.appendChild(aLg);
        aLg.href = "https://www.luogu.com.cn/user/" + peoples[id].luoguUid + "/";
        var tLg2 = document.createTextNode(peoples[id].luoguUser);
        aLg.appendChild(tLg2);
    }

    if(peoples[id].libreojUser != "") {
        var trlb = document.createElement("tr");
        tb.appendChild(trlb);
        var tdlb1 = document.createElement("td");
        trlb.appendChild(tdlb1);
        var iLb = document.createTextNode("LOJ");
        tdlb1.appendChild(iLb);
        var tdlb2 = document.createElement("td");
        trlb.appendChild(tdlb2);
        var aLb = document.createElement("a");
        tdlb2.appendChild(aLb);
        aLb.href = "https://loj.ac/u/" + peoples[id].libreojUser;
        var tLb2 = document.createTextNode(peoples[id].libreojUser);
        aLb.appendChild(tLb2);
    }

    if(peoples[id].codeforces != "") {
        var trcf = document.createElement("tr");
        tb.appendChild(trcf);
        var tdcf1 = document.createElement("td");
        trcf.appendChild(tdcf1);
        var iCf = document.createTextNode("Codeforces");
        tdcf1.appendChild(iCf);
        var tdcf2 = document.createElement("td");
        trgh.appendChild(tdcf2);
        var aCf = document.createElement("a");
        tdcf2.appendChild(aCf);
        aCf.href = "https://codeforces.ml/profile/" + peoples[id].codeforces;
        var tCf2 = document.createTextNode(peoples[id].codeforces);
        aCf.appendChild(tCf2);
    }

    if(peoples[id].githubUserName != "") {
        var trgh = document.createElement("tr");
        tb.appendChild(trgh);
        var tdgh1 = document.createElement("td");
        trgh.appendChild(tdgh1);
        var iGh = document.createElement("i");
        tdgh1.appendChild(iGh);
        iGh.className = faicons["github"];
        var tdgh2 = document.createElement("td");
        trgh.appendChild(tdgh2);
        var aGh = document.createElement("a");
        tdgh2.appendChild(aGh);
        aGh.href = "https://github.com/" + peoples[id].githubUserName;
        var tGh2;
        if(peoples[id].githubName != "") {
            tGh2 = document.createTextNode(peoples[id].githubName);
        }
        else {
            tGh2 = document.createTextNode(peoples[id].githubUserName);
        }
        aGh.appendChild(tGh2);
    }

    if(peoples[id].bilibiliId != "") {
        var trbb = document.createElement("tr");
        tb.appendChild(trbb);
        var tdbb1 = document.createElement("td");
        trbb.appendChild(tdbb1);
        var iBb = document.createTextNode("Bilibili");
        tdbb1.appendChild(iBb);
        var tdbb2 = document.createElement("td");
        trbb.appendChild(tdbb2);
        var aBb = document.createElement("a");
        tdbb2.appendChild(aBb);
        aBb.href = "https://space.bilibili.com/" + peoples[id].bilibiliId;
        var tBb2 = document.createTextNode(peoples[id].bilibiliUser);
        aBb.appendChild(tBb2);
    }

    if(peoples[id].zhihuURL != "") {
        var trzh = document.createElement("tr");
        tb.appendChild(trzh);
        var tdzh1 = document.createElement("td");
        trzh.appendChild(tdzh1);
        var iZh = document.createTextNode("知乎");
        tdzh1.appendChild(iZh);
        var tdzh2 = document.createElement("td");
        trzh.appendChild(tdzh2);
        var aZh = document.createElement("a");
        tdzh2.appendChild(aZh);
        aZh.href = "https://www.zhihu.com/people/" + peoples[id].zhihuURL;
        var tZh2 = document.createTextNode(peoples[id].zhihuUser);
        aZh.appendChild(tZh2);
    }
}
function showMyself(faDivId) {
    showPeople(myself, faDivId);
}
function peopleSum() {
    return peoples.length - 1;
}
function showAllFriends(ffDivId) {
    for(var safi = 1; safi <= peopleSum(); safi++) {
        if(safi == myself) {
            continue;
        }
        var rd = document.createElement("div");
        document.getElementById(ffDivId).appendChild(rd);
        rd.className = "rightdiv";
        var pc = document.createElement("div");
        rd.appendChild(pc);
        pc.id = "peopleContainer" + safi.toString();
        showPeople(safi, pc.id);
    }
}

/* Website */
function websiteSum() {
    return websites.length-1;
}
function showWebsite(faDiv) {
    var websiteContainer = document.getElementById(faDiv);
    websiteContainer.style = "margin-top:10px;"

    var websiteLink = document.createElement("a");
    websiteContainer.appendChild(websiteLink);
    websiteLink.id = "websiteLink";

    var imgToShow = document.createElement("img");
    websiteLink.appendChild(imgToShow);
    imgToShow.id = "imgToShow";

    var br1 = document.createElement("br");
    websiteContainer.appendChild(br1);
    
    var websiteText = document.createElement("p");
    websiteContainer.appendChild(websiteText);
    websiteText.id = "websiteText";
    websiteText.style = "text-indent : 0px;";

    var showWebsiteButton = document.createElement("button");
    websiteContainer.appendChild(showWebsiteButton);
    showWebsiteButton.type = "button";
    showWebsiteButton.onclick = showWebsiteText;
    showWebsiteButton.className = "newBigButton";

    var iShow = document.createElement("i");
    showWebsiteButton.appendChild(iShow);
    iShow.className = faicons["show"];

    var showWebsiteButtonText = document.createTextNode("显示网站");
    showWebsiteButton.appendChild(showWebsiteButtonText);

    var br2 = document.createElement("br");
    websiteContainer.appendChild(br2);

    var randWebsiteButton = document.createElement("button");
    websiteContainer.appendChild(randWebsiteButton);
    randWebsiteButton.type = "button";
    randWebsiteButton.onclick = randomWebsite;
    randWebsiteButton.className = "newBigButton";

    var iRand = document.createElement("i");
    randWebsiteButton.appendChild(iRand);
    iRand.className = faicons["random"];

    var randWebsiteButtonText = document.createTextNode("再来一个");
    randWebsiteButton.appendChild(randWebsiteButtonText);

    var jumpWebsiteButton = document.createElement("button");
    websiteContainer.appendChild(jumpWebsiteButton);
    jumpWebsiteButton.type = "button";
    jumpWebsiteButton.onclick = jumpToWebsite;
    jumpWebsiteButton.className = "newBigButton";

    var iFlash = document.createElement("i");
    jumpWebsiteButton.appendChild(iFlash);
    iFlash.className = faicons["flash"];

    var jumpWebsiteButtonText = document.createTextNode("手气不错");
    jumpWebsiteButton.appendChild(jumpWebsiteButtonText);

    var notice = document.createElement("pre");
    websiteContainer.appendChild(notice);
    notice.className = "small";
    notice.style = "background-color : rgba(0,0,0,0);";

    var noticeText = document.createTextNode("以上信息仅供娱乐！");
    notice.appendChild(noticeText);
}
function randomWebsite() {
    var index = Math.floor(Math.random() * websiteSum()) + 1;
    document.getElementById("imgToShow").src = websites[index].img;
    document.getElementById("websiteLink").href = websites[index].url;
    document.getElementById("websiteText").style = "display : none;";
}
function showWebsiteText() {
    document.getElementById("websiteText").style = "text-indent : 0px";
    document.getElementById("websiteText").innerHTML = document.getElementById("websiteLink").href;
}
function jumpToWebsite() {
    randomWebsite();
    window.location.href = document.getElementById("websiteLink").href;
}

/* Functions */
function homePage() {
    showNewNArticles(5);
    showMyself("peopleContainer");
    showWebsite("websiteContainer");
    randomWebsite();
    showAllFriends("friendList");
}
function blogHomePage() {
    showAllArticles();
}
