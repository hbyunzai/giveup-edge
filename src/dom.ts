
export function insertCSS(): void {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.innerHTML = "* {\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "            font-family: \"微软雅黑\";\n" +
        "        }\n" +
        "\n" +
        "        ul li {\n" +
        "            list-style: none;\n" +
        "        }\n" +
        "\n" +
        "        a, a:link, a:hover, a:focus, a:active {\n" +
        "            text-decoration: none;\n" +
        "            background: none;\n" +
        "            outline: none;\n" +
        "        }\n" +
        "\n" +
        "        a:hover {\n" +
        "            cursor: pointer;\n" +
        "        }\n" +
        "\n" +
        "        b, i {\n" +
        "            font-weight: normal;\n" +
        "            font-style: normal;\n" +
        "        }\n" +
        "\n" +
        "        img {\n" +
        "            border: none;\n" +
        "            outline: none;\n" +
        "        }\n" +
        "\n" +
        "        html {\n" +
        "            /*background: #f4f4f4;*/\n" +
        "        }\n" +
        "\n" +
        "        body {\n" +
        "            font-size: 16px;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert {\n" +
        "            width: 1200px;\n" +
        "            padding: 0 50px;\n" +
        "            margin: 0 auto;\n" +
        "            background: #fff;\n" +
        "        }\n" +
        "\n" +
        "        .title-tip {\n" +
        "            font-size: 16px;\n" +
        "            text-align: left;\n" +
        "            padding: 16px 24px;\n" +
        "            line-height: 30px;\n" +
        "            border: 1px solid #1990fc;\n" +
        "            border-radius: 5px;\n" +
        "            background: #e6f7ff;\n" +
        "            color: #0086ff;\n" +
        "            margin: 56px auto 0;\n" +
        "        }\n" +
        "\n" +
        "        .title-tip a {\n" +
        "            font-weight: bold;\n" +
        "            color: #2196ff;\n" +
        "        }\n" +
        "\n" +
        "        .title-tip a:hover, .title-tip a:focus, .title-tip a:active {\n" +
        "            color: #0673d6;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-list {\n" +
        "            margin: 40px auto;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-list ul {\n" +
        "            overflow: hidden;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-list ul li {\n" +
        "            list-style: none;\n" +
        "            float: left;\n" +
        "            width: 20%;\n" +
        "            height: 82px;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-list ul li a {\n" +
        "            display: block;\n" +
        "            height: 40px;\n" +
        "            line-height: 40px;\n" +
        "            overflow: hidden;\n" +
        "            width: 86%;\n" +
        "            margin: 6px auto;\n" +
        "            padding: 15px 5%;\n" +
        "            box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-list ul li:hover a {\n" +
        "            box-shadow: 0 0 5px 1px rgba(0, 0, 0, .18);\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-download img.browser-logo {\n" +
        "            width: 40px;\n" +
        "            height: 40px;\n" +
        "            float: left;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-download img.recommend {\n" +
        "            width: 24px;\n" +
        "            height: 24px;\n" +
        "            float: left;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-list ul li span {\n" +
        "            float: left;\n" +
        "            margin: 0 0 0 10px;\n" +
        "            color: #444;\n" +
        "            font-size: 14px;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-doc {\n" +
        "            clear: both;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-doc h2 {\n" +
        "            font-size: 23px;\n" +
        "            margin: 0 0 16px;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-doc ul li {\n" +
        "            list-style: none;\n" +
        "            margin-bottom: 24px;\n" +
        "            padding-bottom: 16px;\n" +
        "            border-bottom: 1px solid #f4f4f4;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-doc ul li:last-child {\n" +
        "            border-bottom: none;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-doc ul li h3 {\n" +
        "            font-size: 18px;\n" +
        "            line-height: 32px;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-doc ul li p {\n" +
        "            font-size: 15px;\n" +
        "            line-height: 48px;\n" +
        "        }\n" +
        "\n" +
        "        .browser-alert-doc img {\n" +
        "            width: 100%;\n" +
        "            /*margin: 16px 0;*/\n" +
        "        }";
    head.appendChild(style);

}

export function insertDOM(): void {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = "<div class=\"browser-alert\">\n" +
        "    <div class=\"browser-alert-download\">\n" +
        "        <div class=\"title-tip\">\n" +
        "            该网站不支持IE、Edge、浏览器兼容模式浏览。\n" +
        "            如果您的浏览器是：<a href=\"#map1\">QQ浏览器</a>、<a href=\"#map2\">360安全浏览器</a>、<a href=\"#map3\">360极速浏览器</a>、<a\n" +
        "                href=\"#map4\">UC浏览器</a>、<a href=\"#map5\">搜狗浏览器</a>，请查看以下文档，选择极速模式下浏览该网站。\n" +
        "        </div>\n" +
        "        <div class=\"browser-alert-list\">\n" +
        "            <ul>\n" +
        "                <li>\n" +
        "                    <a href=\"https://www.google.cn/intl/zh-CN/chrome/\" target=\"_blank\">\n" +
        "                        <img class=\"browser-logo\" src=\"https://v100.yunzainfo.com/policy/image/chrome-logo.svg\" alt=\"\"/>\n" +
        "                        <span>谷歌Chrome</span>\n" +
        "                        <img class=\"recommend\" src=\"https://v100.yunzainfo.com/policy/image/recommend.svg\" alt=\"\">\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"https://www.mozilla.org/zh-CN/firefox/new/\" target=\"_blank\">\n" +
        "                        <img class=\"browser-logo\" src=\"https://v100.yunzainfo.com/policy/image/filrefox-logo.png\"\n" +
        "                             alt=\"\"/>\n" +
        "                        <span>火狐浏览器</span>\n" +
        "                        <img class=\"recommend\" src=\"https://v100.yunzainfo.com/policy/image/recommend.svg\" alt=\"\">\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"https://browser.qq.com/\" target=\"_blank\">\n" +
        "                        <img class=\"browser-logo\" src=\"https://v100.yunzainfo.com/policy/image/qq-logo.jpeg\" alt=\"\"/>\n" +
        "                        <span>QQ浏览器(极速模式)</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"https://www.uc.cn/\" target=\"_blank\">\n" +
        "                        <img class=\"browser-logo\" src=\"https://v100.yunzainfo.com/policy/image/uc-logo.png\" alt=\"\"/>\n" +
        "                        <span>UC浏览器(极速模式)</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"https://ie.sogou.com/\" target=\"_blank\">\n" +
        "                        <img class=\"browser-logo\" src=\"https://v100.yunzainfo.com/policy/image/sougou-logo.jpeg\"\n" +
        "                             alt=\"\"/>\n" +
        "                        <span>搜狗浏览器(极速模式)</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"browser-alert-doc\">\n" +
        "        <h2>使用说明</h2>\n" +
        "        <ul>\n" +
        "            <li id=\"map1\">\n" +
        "                <h3>QQ浏览器</h3>\n" +
        "                <p>1.选择极速模式</p>\n" +
        "                <img src=\"https://v100.yunzainfo.com/policy/image/qq.png\" alt=\"\"/>\n" +
        "                <p>2.重新输入地址，或者 -> 刷新。</p>\n" +
        "            </li>\n" +
        "            <li id=\"map2\">\n" +
        "                <h3>360安全浏览器</h3>\n" +
        "                <p>1.选择极速模式</p>\n" +
        "                <img src=\"https://v100.yunzainfo.com/policy/image/360.png\" alt=\"\"/>\n" +
        "                <p>2.重新输入地址，或者 -> 刷新。</p>\n" +
        "            </li>\n" +
        "            <li id=\"map3\">\n" +
        "                <h3>360极速浏览器</h3>\n" +
        "                <p>1.选择极速模式</p>\n" +
        "                <img src=\"https://v100.yunzainfo.com/policy/image/360_2.png\" alt=\"\"/>\n" +
        "                <p>2.重新输入地址，或者 -> 刷新。</p>\n" +
        "            </li>\n" +
        "            <li id=\"map4\">\n" +
        "                <h3>UC浏览器</h3>\n" +
        "                <p>1.选择极速模式</p>\n" +
        "                <img src=\"https://v100.yunzainfo.com/policy/image/uc.png\" alt=\"\"/>\n" +
        "                <p>2.重新输入地址，或者 -> 刷新。</p>\n" +
        "            </li>\n" +
        "            <li id=\"map5\">\n" +
        "                <h3>搜狗浏览器</h3>\n" +
        "                <p>1.选择极速模式</p>\n" +
        "                <img src=\"https://v100.yunzainfo.com/policy/image/sougou.png\" alt=\"\"/>\n" +
        "                <p>2.重新输入地址，或者 -> 刷新。</p>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "    </div>\n" +
        "</div>";

}

