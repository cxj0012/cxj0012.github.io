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
    "revision": "afa8213a0a01e495e0037981ee09c06e"
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
    "url": "assets/js/14.3f2cd54f.js",
    "revision": "d0183b0568c0d016c973cb75863fa22f"
  },
  {
    "url": "assets/js/15.0db60dde.js",
    "revision": "12d63e0923267836939b04b416cefaaa"
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
    "url": "assets/js/app.ef0a9be5.js",
    "revision": "5249fad99d6d66392fd6dc0bcb764a11"
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
    "revision": "ce67d09d2457bd10edb549ae3feadfb4"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "10b90020005a03b0bde82a3303ca969b"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c5cb2dea0c3bfd745dd548971eaff050"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "aaceaaf24dabaae292b275801e5733a4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0e3634e2a2875184dd07447bc5dfd468"
  },
  {
    "url": "css/style.css",
    "revision": "e0e7f0bb49f69b195678b18c82cef187"
  },
  {
    "url": "guide/index.html",
    "revision": "a2f519d2d41c0724993fa0c7f88e4b00"
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
    "revision": "a603789ca7610da42d04f0ea0568f8f9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "21b97a455028dd4ef6528780d6bf9bf3"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "b761563fd30ca5a4d4416833046148ac"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "1801e2c8d6a3cd548702f4672a1bfcc3"
  },
  {
    "url": "tags/JavaScrpit基础/index.html",
    "revision": "ccff27f99171da3617ebceec2e4892a8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "559b2cdf6aa0e422f115434e94e73a94"
  },
  {
    "url": "tags/JS进阶/index.html",
    "revision": "2bd804807f071e0a8e3313fb89b8e774"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "72b8ec8b969d33558d48b16844f9b5bf"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "34ebbc7dee4a6a97a80eff4ae7e84c7a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ab5c04e75a9a915c4bc6a03ade8d4d45"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "45b794dd1e724c60b36a83eedf436a56"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "03df348e6c2d429c259e431afc03fa14"
  },
  {
    "url": "timeline/index.html",
    "revision": "738c70ae7603316818fbd2e70bbae269"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ee664b632b6b7d391ef62e52046da07e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a28d56e04d162191955078ad3544ddfb"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e7b45b1a60c1d5dd121b24073ca25532"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3fa6c613b104c211edbbb67f2b155458"
  },
  {
    "url": "生活分享/life.html",
    "revision": "34e8e7b26f52d8e074f7a4e0296be9ff"
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
