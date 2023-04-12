/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5dbb7ca0a28b8d5f5f83f23c60e763c7"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.63162e66.js",
    "revision": "d1de682ba3239bb1d4f4136cce1626ce"
  },
  {
    "url": "assets/js/11.ef68694e.js",
    "revision": "200f5de98addd1b89586b23512a09ef6"
  },
  {
    "url": "assets/js/12.40e7e1a5.js",
    "revision": "33f08b5756c7ceca65eacb4d87e3a45f"
  },
  {
    "url": "assets/js/13.64a253dc.js",
    "revision": "721b8eaa7ef08fa7bcbc35971cddd376"
  },
  {
    "url": "assets/js/14.8c72b659.js",
    "revision": "c3111a15a1bc73e89d8a5c14bc44bad4"
  },
  {
    "url": "assets/js/15.0db60dde.js",
    "revision": "12d63e0923267836939b04b416cefaaa"
  },
  {
    "url": "assets/js/16.b3ccf0ab.js",
    "revision": "52db2f2b018dce6d580e29e75037485c"
  },
  {
    "url": "assets/js/17.69a056ae.js",
    "revision": "59b60da17e0a40787abd1ec190920174"
  },
  {
    "url": "assets/js/18.6ce5213a.js",
    "revision": "60206fbbc02945cf76aa16908052edf9"
  },
  {
    "url": "assets/js/4.24a4d416.js",
    "revision": "e6d83c90380994d23182b50fd7c9b0d2"
  },
  {
    "url": "assets/js/5.e6fd5cd4.js",
    "revision": "41a832bb16ecade0d0c6c66cbad1ac73"
  },
  {
    "url": "assets/js/6.451ac923.js",
    "revision": "a7cf14e9735cf5d363d0662a4350bbd3"
  },
  {
    "url": "assets/js/7.f23ec827.js",
    "revision": "83f5d24198e168b319735aed66a704f5"
  },
  {
    "url": "assets/js/8.e87d8a3d.js",
    "revision": "e33b839b5b91d90d942bc6c105d8c6a8"
  },
  {
    "url": "assets/js/9.a091b8c4.js",
    "revision": "90933cd99dd5539e25651bfe998a3db9"
  },
  {
    "url": "assets/js/app.b2dbf437.js",
    "revision": "65711766b8ccad0f284073d387dd13df"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.101baafc.js",
    "revision": "602a659b662b0171a26cfd4dfb1deda6"
  },
  {
    "url": "avatar1.png",
    "revision": "d7e7f36bff4cb73152ccf58704040d13"
  },
  {
    "url": "categories/index.html",
    "revision": "9f05c52f519301654b2b719d7d139123"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "9d26bad6737429db958209577955bad9"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "95399d7446df20b580d03c514fccfe19"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e351408b03a91bda9ba79f87b117377e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "500ccfaab92d52e27b6cf0a17a30f41a"
  },
  {
    "url": "css/style.css",
    "revision": "e0e7f0bb49f69b195678b18c82cef187"
  },
  {
    "url": "guide/index.html",
    "revision": "4504346f1a256be79c9769306cc98bf8"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/55.jpg",
    "revision": "d4008d9aad4dbee36b7b4a6e2f4f492d"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo1.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
  },
  {
    "url": "index.html",
    "revision": "1a137ef50dba5c5869f93e386d5f2a12"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1f7aa519d6d622e76fc1846a70de6d9d"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "887adf9549653b1eae8a2a0123328a80"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "ee79c77af46b33f902464694f938a21b"
  },
  {
    "url": "tags/JavaScrpit基础/index.html",
    "revision": "95715616679200fad4e28d13a7aaae13"
  },
  {
    "url": "tags/js/index.html",
    "revision": "76996a5bc0bb2acfaab0771fe7497d52"
  },
  {
    "url": "tags/JS进阶/index.html",
    "revision": "f1eeb686066a3291b628ed3ef2a29405"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4bd55bf1b07354def8609c35d3454640"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "39cf5d77840c77d44ed9c7a7d92267f1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ef4ebf6eb42a9c590331b475372789be"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2e2a9d7f03a5c8cac44a0d3aa55fcf6f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1b471c8db4048f672274daf233dc6449"
  },
  {
    "url": "timeline/index.html",
    "revision": "e996d47c1c4fdcd32555c3388f7218bf"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ed403dc39b31715bd6e261cd9d81f45a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bac32bcb02c173aa5742c2502a7533e3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a6b7d540be8145b48e1f1bd1601412a1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "13f68698d819621575514d1021f4744f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "64ac48fbf34803e3c919966545dcde6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
