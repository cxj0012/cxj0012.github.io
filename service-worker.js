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
    "revision": "f5285592726722f46a5bab9edaf19ce6"
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
    "url": "assets/js/13.64a253dc.js",
    "revision": "721b8eaa7ef08fa7bcbc35971cddd376"
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
    "url": "assets/js/16.5b0ccea6.js",
    "revision": "02968446bd3151f187d886d8027d8ef0"
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
    "url": "assets/js/app.f5f35821.js",
    "revision": "d939f6b73b2e531946df4410a86f271d"
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
    "revision": "a77265692866dbec94e0e1adf948571e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b5b6072a44cdf5a6db052ad95c646574"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "0068c1949b7904cff50934ee1af9d06d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "388e4c7579c78bc1de6969b0930f9f98"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c802166dc11016e4ced0b414a9971095"
  },
  {
    "url": "css/style.css",
    "revision": "e0e7f0bb49f69b195678b18c82cef187"
  },
  {
    "url": "guide/index.html",
    "revision": "01731bffd4c207a49f0f176edcac5cfe"
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
    "revision": "44a39ba402fe78084a6730710d2ef149"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "30fc503af63e60c6f9ac27dc3ebb6c25"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "f35585e5b7910581bb15f435d28e25df"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "976ece16f4ad521d67cfa61423cd896f"
  },
  {
    "url": "tags/JavaScrpit基础/index.html",
    "revision": "aa48e2596181534b7d0c28d8626a3d3c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6eebb6ef2fcf5a9ff4a3c5708bd47d96"
  },
  {
    "url": "tags/JS进阶/index.html",
    "revision": "108476f1cc7966cfc4680b6ff68da542"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fcc8a7aa3d7d3f7da73a800d4f7e20f0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "aef5ba196e35585d03a43bb4e39c691b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d561e7b5cc2d5e8297e4abb44d04ba91"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ad20e5c8f7e4236c9e7d7d92e370655c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0bc5e4ce6ce1bef61dac4cfb8d2544be"
  },
  {
    "url": "timeline/index.html",
    "revision": "05050e013bb2e01bf0f7a908cc53244f"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d0d90bb86e7915f156751379e3afeece"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8bbd4de9851db9748d209c7747869382"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1c731ced9ff4fe07a13dc2f8646d87c2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "73ab690908b84ed0c408b91528cf1619"
  },
  {
    "url": "生活分享/life.html",
    "revision": "96db02666ffa749b42ad4868860534a5"
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
