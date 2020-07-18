if (!!window.ActiveXObject || "ActiveXObject" in window)
      {
          var r=confirm("您所使用的浏览器的部分特性导致本站网页在您的浏览器上显示会达不到预期的效果。建议您安装最新版本的 Firefox 或 Chrome 浏览器进行浏览。是否跳转至 Firefox 下载网页？")
          if(r==true)
          {
            window.location.href='http://www.firefox.com.cn/'
          }
      }