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
    "revision": "1ce761508d3f85c68416bbe4d1d09e19"
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
    "url": "assets/js/12.11f666ba.js",
    "revision": "0d5b62cf017b0d6de424cab34acf803a"
  },
  {
    "url": "assets/js/13.724e1b31.js",
    "revision": "19bb03ba2ea6c4cf011edc45b1c17e4c"
  },
  {
    "url": "assets/js/14.1abddaa6.js",
    "revision": "1e8f977bb3928785748810b9d1b42196"
  },
  {
    "url": "assets/js/15.1167f616.js",
    "revision": "959fa4b111ffc24ca81d2f0c2d97c308"
  },
  {
    "url": "assets/js/16.c59d4de9.js",
    "revision": "dfaaa4836d36b702cfcf5a45c90bec44"
  },
  {
    "url": "assets/js/17.0b5a7009.js",
    "revision": "ef4be9e7d3a7f496e307fa9f6979393a"
  },
  {
    "url": "assets/js/18.6d40581e.js",
    "revision": "d52f5529e32a0f6c03e7c644f6a010af"
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
    "url": "assets/js/app.72403e9a.js",
    "revision": "7e8cdb237235813b7a13f7afdea9f3ba"
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
    "revision": "5460e42df38b6f68ddf6184761bcc5e1"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "90c9ec50a62d961bc6a66018b47d87f6"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "d5dd3eaddc9047450971612e5f68cb28"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "521a4b4bb7521dabab4e1653a35badee"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3d61deea8f7b5f71a5f9c768dbe3729b"
  },
  {
    "url": "css/style.css",
    "revision": "e0e7f0bb49f69b195678b18c82cef187"
  },
  {
    "url": "guide/index.html",
    "revision": "de10ffdea99983e66ceacf44c0195e62"
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
    "revision": "506ecf30f2f152e01b67ecbdc4f325b1"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7836c3fe42172d2cf34f6c05bdd16ed6"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "d36e11514793dd1693cfb8ab6420a4ef"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "74165bf4e60322449278c54ef1495026"
  },
  {
    "url": "tags/JavaScrpit基础/index.html",
    "revision": "2ca3fb47b3833669cc233310485d83fb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "edfc00923ef256b228a404728ba1c437"
  },
  {
    "url": "tags/JS进阶/index.html",
    "revision": "9c641c55b08f3bd9d20004b4ba5516a4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "84cda36a9bb21e61127f54791acad8ad"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "fd907d7eb556c76d6f0e6b1c7ca1ba21"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d1247cf6c677ba5177a443b2260b43e5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7f734bfb7845ae3b04902db0745d66f9"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c0720bfb01779f920c4fd950f4703ce9"
  },
  {
    "url": "timeline/index.html",
    "revision": "794684633c80f1eb11e270650de15a6b"
  },
  {
    "url": "技术文章/index.html",
    "revision": "69b0c814211dee576c5a9b4b22e72e48"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bc3048e12d9286e6fccc8699c0ed5659"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "311086d6cf27473727081d8b40f7292d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1251432b774d4fa6d1c7b9e2f9373706"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f64e17a85b9546f530be90c4d6926040"
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
