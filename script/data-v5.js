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
        description : "出现了一些错误 qwq 请联系博主解决问题。错误代码：ERR_ARTICLE_0_INDEX。"
    }, 
    {
        title : "关于我", 
        url : "aboutme", 
        tags : ["杂项"], 
        knowledges : ["杂项"],
        postDate : "2020-03-01 08:00",
        updateDate : "2020-03-01 08:00", 
        language : "",
        description : "我是谁？我在干什么？"
    },
    {
        title : "「题解」洛谷 P2440 木材加工", 
        url : "solution-p2440", 
        tags : ["题解"], 
        knowledges : ["二分答案"],
        postDate : "2020-04-13 13:57",
        updateDate : "2020-04-13 13:57", 
        language : "C++",
        description : "二分。"
    },
    {
        title : "差分与前缀和", 
        url : "note-diff", 
        tags : ["笔记"], 
        knowledges : ["差分","前缀和","树","LCA"],
        postDate : "2020-05-18 14:18",
        updateDate : "2020-05-18 14:18", 
        language : "C++",
        description : "两种对于序列的常见操作，以及它们扩展在树上的情况。"
    },
    {
        title : "How to use Github well?", 
        url : "use-github", 
        tags : ["指南"], 
        knowledges : ["Github"],
        postDate : "2020-05-19 8:44",
        updateDate : "2020-05-19 8:44", 
        language : "",
        description : "帮助你快速了解 Github！"
    },
    {
        title : "「题解」洛谷 P1503 鬼子进村", 
        url : "solution-p1503", 
        tags : ["题解"], 
        knowledges : ["平衡树","Treap","栈"],
        postDate : "2020-05-29 12:24",
        updateDate : "2020-05-29 12:24", 
        language : "C++",
        description : "平衡树 + 栈维护。"
    },
    {
        title : "「题解」洛谷 P3377【模板】左偏树（可并堆）", 
        url : "solution-p3377", 
        tags : ["题解"], 
        knowledges : ["可并堆","左偏树"],
        postDate : "2020-06-13 15:43",
        updateDate : "2020-06-13 15:43", 
        language : "C++",
        description : "可并堆模板题。我遇到的一些 bug 及解决思路。"
    },
    {
        title : "矩阵", 
        url : "note-matrix", 
        tags : ["笔记"], 
        knowledges : ["矩阵"],
        postDate : "2020-07-06 20:18",
        updateDate : "2020-07-06 20:18", 
        language : "",
        description : "矩阵的基础知识。"
    },
    {
        title : "ACSL 2019-2020 游记", 
        url : "acsl-2019-2020-note", 
        tags : ["游记"], 
        knowledges : ["ACSL"],
        postDate : "2020-07-10 11:18",
        updateDate : "2020-07-10 11:18", 
        language : "",
        description : "ACSL 考些啥？这个比赛又是什么样？"
    },
    {
        title : "「题解」USACO2006NOV-Gold Corn Fields", 
        url : "solution-p1879", 
        tags : ["题解"], 
        knowledges : ["状压DP"],
        postDate : "2020-07-11 22:23",
        updateDate : "2020-07-11 22:23", 
        language : "C++",
        description : "状态压缩动态规划。降低维度。"
    },
    {
        title : "使用 Gitalk 实现评论功能", 
        url : "use-gitalk", 
        tags : ["指南"], 
        knowledges : ["Github","建站"],
        postDate : "2020-07-15 14:32",
        updateDate : "2020-07-15 14:32", 
        language : "JavaScript",
        description : "帮助你快速了解 Gitalk！"
    },
    {
        title : "火车头优化", 
        url : "optimization", 
        tags : ["杂项"], 
        knowledges : ["优化与卡常"],
        postDate : "2020-07-15 18:29",
        updateDate : "2020-07-15 18:29", 
        language : "C++",
        description : "传说中的卡常神器，但是..."
    },
    {
        title : "「图册」什么是“打表出奇迹”", 
        url : "picture-make-table", 
        tags : ["杂项"], 
        knowledges : ["打表","优化与卡常"],
        postDate : "2020-07-17 16:48",
        updateDate : "2020-07-17 16:48", 
        language : "",
        description : "暴力出奇迹，骗分过样例；数学先打表，DP看运气。"
    },
    {
        title : "「转载」北极冻土里的代码，是GitHub的终极浪漫”", 
        url : "github-save-code", 
        tags : ["新闻"], 
        knowledges : ["杂项"],
        postDate : "2020-07-20 16:45",
        updateDate : "2020-07-20 16:45", 
        language : "",
        description : "两千年后的历史学家们，如何发现我们的代码"
    },
    {
        title : "「题解」NOIP1997 棋盘问题",
        url : "solution-p1549", 
        tags : ["题解"], 
        knowledges : ["搜索","DFS"], 
        postDate : "2020-08-06 18:52", 
        updateDate : "2020-08-06 18:52", 
        language : "C++", 
        description : "搜索题。"
    }, 
    {
        title : "「题解」CSP2019 格雷码",
        url : "solution-p5657", 
        tags : ["题解"], 
        knowledges : ["分治"], 
        postDate : "2020-08-17 18:30", 
        updateDate : "2020-08-17 18:30", 
        language : "C++", 
        description : "臭名昭著卡变量类型题。"
    }, 
    {
        title : "封装一棵线段树",
        url : "segment-tree-class", 
        tags : ["瞎搞"], 
        knowledges : ["线段树","面向对象"], 
        postDate : "2020-09-08 21:39", 
        updateDate : "2020-09-08 21:39", 
        language : "C++", 
        description : "有新鲜出炉立即取用的源码哦"
    }, 
    {
        title : "【刷题日记】2020-09-10",
        url : "solution-2020-09-10", 
        tags : ["笔记"], 
        knowledges : ["字符串","搜索","BFS"], 
        postDate : "2020-09-17 21:49", 
        updateDate : "2020-09-17 21:49", 
        language : "C++", 
        description : "NOI Online 3 P 最急救助（洛谷 P6565）；NOI Online #3 P 观星（洛谷 P6566）；USACO10OCT S Lake Counting（洛谷 P1596）"
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
