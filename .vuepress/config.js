const path = require('path')
module.exports = {
  "mottos": [{
    "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
    "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
  },
    {
      "zh": "年轻就是无限的可能。",
      "en": "Youth means limitless possibilities."
    },
    {
      "zh": "真正的梦就是现实的彼岸。",
      "en": "Real dream is the other shore of reality."
    },
    {
      "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
      "en": "Don't worry about the vague future, just strive for the clear present."
    },
    {
      "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
      "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
    }, {
      "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
      "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
    },
    {
      "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
      "en": "Life without regret, we can only do our best to not to regret."
    }
  ],
 title:'开元',
 describe:'一个网页',
  "dest": "public",
  "plugins": [
   
   
    //离线访问和刷新
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
    
    //随心说说
    ['vuepress-plugin-boxx'],
    //背景丝带效果
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 2,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "random",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 6,
        // 添加笔划以及色带填充颜色
        strokeSize: 1,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
    //樱花效果
    ["sakura", {
      num: 20,  // 默认数量
      show: true, //  是否显示
      zIndex: -1,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }     
  }],
    //加载
    ["@vuepress-reco/vuepress-plugin-loading-page"],
    //评论
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'AL0nuY9ROi8d1BTXf1Dzg1wy-gzGzoHsz',// your appId
        appKey: '7mtNp1l26BjWu9UNjmzNNl3Q', // your appKey
      }
    }],
//打赏
[
  'vuepress-plugin-sponsor',
  {
    theme: 'simple',
    alipay: './public/img/alipay.jpg',
    wechat: './public/img/weixin.jpg',
    paypal: 'https://www.paypal.me/yokefellow',
    duration: 2000
  }
],
    //代码可写
    [ '@vuepress-reco/extract-code'],
    // 组件注册
    ['@vuepress/register-components'],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["shizuku"],
        clean: false,
        messages: {
          welcome: '我是你老婆 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    // 添加代码复制
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功"
      }
   }],
    //添加著作权！！
    [
      'copyright',
      {
        authorName: 'cidy', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],
//标题动态显示
[
  'dynamic-title',
  {
     showIcon: '/favicon.ico',
     showText: '(/≧▽≦/)咦！又好了！',
     hideIcon: '/failure.ico',
     hideText: '(●—●)你快回来',
     recoverTime: 2000,
  },
],
    //鼠标动态显示
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }],
    //分页
    [
      "@vuepress-reco/vuepress-plugin-pagation",
      {
        total:5,
        perPage:4,
        currentPage:1,
      }
    ],
    //弹窗
    [
      "@vuepress-yard/vuepress-plugin-window",
      {
        windowStyle:{right: '20px',top: '80px',width: '220px',},
        contentInfo:{title: '欢迎加入我们',imgUrl: 'http://api.btstu.cn/sjtx/api.php',needImg: true,content: 'ooo4', contentStyle: {height:"80px"}},
        bottomInfo:{btnText: '去官网',linkTo: 'https://v3.cn.vuejs.org/'}
      }
    ],
    //音乐
    ["@vuepress-reco/vuepress-plugin-bgm-player",
    {
      audios: [
        // 网络文件示例
        {
          name: '年轮',
          artist: '张碧晨',
          url: 'https://cdn.jsdelivr.net/gh/fudalijunyi/cdn/MP3/年轮.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200715154924.png'
        },{
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        }, {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ] ,
      // 自动缩小
      autoShrink:true ,
      // 悬浮窗模式，吸边
      shrinkMode: 'float' ,
      // 悬浮窗位置
      floatStyle:{ bottom: '10px', 'z-index': '999999' },

    }]

    ],
   
  
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    huawei: true,
    keyPage: {
      keys: ['827ccb0eea8a706c4c34a16891f84e7b'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    },
    "nav": [
      {
        "text": "Home",
        "link": "/docs/theme-reco/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/805720393",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "cidy",
    "authorAvatar": "http://api.btstu.cn/sjtx/api.php",
    "record": "coding",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}