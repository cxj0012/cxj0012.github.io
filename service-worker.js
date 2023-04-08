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
    "revision": "466716982daf2ecd560dae8bac9e8efd"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
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
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.3e13c370.js",
    "revision": "9eadd58d925ae4924dce61e1811b9ae0"
  },
  {
    "url": "assets/js/13.b9771bf6.js",
    "revision": "e5a5ae4e374b0c7ac5b4dc09d0ab8947"
  },
  {
    "url": "assets/js/14.3ff36ed1.js",
    "revision": "730e4139a30d67ea051dc58189e3abeb"
  },
  {
    "url": "assets/js/15.ed07ff7c.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.b757b28b.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.8faa0753.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.ce4df536.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.7be661e8.js",
    "revision": "214934ee97fc037f58d59448340f55a8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "3f041e13704ee0e9bc3558fe40d57a14"
  },
  {
    "url": "categories/java/index.html",
    "revision": "29737e2a831f24f7696176a3e98d3f8b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "dae862e5e8bc5ceca00ede87c877922b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "83ba3292bc23daf33563dc526feca9ef"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "985d5f9bb64580400a9f85fb90606257"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a0ef1f1641e48a5de5e21ff3104c8480"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "638a91315a42be2f742379f0def0f049"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "98ad00e391a4a9acb73a757b09686d02"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "57b4bedf1ef60d01555bc253cbe2c0a0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "87cba0a9480f3e7ad3ba4ac025316c18"
  },
  {
    "url": "tags/js/index.html",
    "revision": "97ce9ae965cfc462120f89089fc0fcd3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8d290bf9a2333d3e4883cbc00435d3db"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5cd3fedcb1162c10e17e2c79d584b51e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "290482403655ce84580bf9ba8b498b45"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d6c6b63d7059342473f57d68234c231a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "852e82fce4d7837cd4e8d70541088bc1"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "099bc624bdc563f023de426379bc9731"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8c91894345bc1d052992439500dec796"
  },
  {
    "url": "timeline/index.html",
    "revision": "060922307f15ad5b6e700ce88bf45b59"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e3652da32649cd0fe3817a547e89fee2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "17cb5a9f12a5583c0069a5d386b2531d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8d04646f8c19727fe71e199495deb437"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2462c4315e117c634e38322c91928784"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ceb19fbad59720babf22ae444b46473e"
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
