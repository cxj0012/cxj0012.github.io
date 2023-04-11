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
    "revision": "ca964e06f6b3d0883a1114e7643436ff"
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
    "url": "assets/js/14.0836d1de.js",
    "revision": "29caddda94c39050b9c6de50a8bc1382"
  },
  {
    "url": "assets/js/15.0db60dde.js",
    "revision": "12d63e0923267836939b04b416cefaaa"
  },
  {
    "url": "assets/js/16.e90968f3.js",
    "revision": "e4a5fde92efa75d17372922eac9d24f1"
  },
  {
    "url": "assets/js/17.0b5a7009.js",
    "revision": "ef4be9e7d3a7f496e307fa9f6979393a"
  },
  {
    "url": "assets/js/18.b2d81c47.js",
    "revision": "08f91d7ca5a5eb78e4597bd5dfbde0fa"
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
    "url": "assets/js/app.ce329602.js",
    "revision": "cb323403bc7c2d2147179bdaa71bbc80"
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
    "revision": "c3fa3e1db0e429238aa8e0a5477e2efc"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "d56d791257b105b735e6020461477c8c"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "8a3e8f87bd2ec6f1b8c6657d7c7212dd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "899ce0025ec011e978f9194d194418d8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6302674f0e2cc3be6b79a3e28c03db9b"
  },
  {
    "url": "css/style.css",
    "revision": "e0e7f0bb49f69b195678b18c82cef187"
  },
  {
    "url": "guide/index.html",
    "revision": "74f5fc954976f4bb6223c49b104d9799"
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
    "revision": "c8298fe2075525cc92f2f4cb51381edb"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "264ca48d2f5a40e9f31955f6a527446e"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "6dfe7e0c0f79ef88e1365077ee581778"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "637374f922c200b141b851ee6ad54c91"
  },
  {
    "url": "tags/JavaScrpit基础/index.html",
    "revision": "538ee9eed745dc3a1944a34c1c5ee604"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6ed0d0411e389ee8ff96feda84300254"
  },
  {
    "url": "tags/JS进阶/index.html",
    "revision": "440942fb7ab949002cc679809765aa1a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d15669d3e9a50c928c4a28b6d69cd106"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "bd717b4d662b1da9b058891ae2f0c4a6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "14fdde90dd214b4aab38184b87196aff"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "35d8d6fe33a92162381f1ca06e945e8d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1ee6a4feda9dadba9a215ead2162a708"
  },
  {
    "url": "timeline/index.html",
    "revision": "e49c0e93919e9c85fd27746259cf4546"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6bd0b8d7f88967af48838d789d7a6ae2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "78c1f37dd8ff87f1b3a170b79029cdaa"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "736ef297a0658b91a7433b3bfd91fb42"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e85145e158d311fe2d7a3a415cb6d3d9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bdfd7acea2694c05297e9ae778c0c50a"
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
