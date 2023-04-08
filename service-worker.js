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
    "revision": "6a9c0a146cf7c69e6af5034431361088"
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
    "url": "assets/js/12.cae49bf6.js",
    "revision": "8fb8403e6dd68de6f04d667160685a4d"
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
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.172ea8bd.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
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
    "url": "assets/js/app.25d97dfd.js",
    "revision": "c74322615a2121ed5fe5ccc19928715e"
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
    "revision": "6768eb513d334d1ea539c089b24e65c3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9c91e2ee29aba6774ac8a6dcf77339b2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "93727587a9ed49476a9323df05c7a8f8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "33eb076e4368fa5e5a93d801938df111"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4adcd577b07623ca54831e5e73d22191"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ff6d4386bd1a82aeb049e55527387142"
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
    "revision": "65c1339ed52380faa27d88b3da451657"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "302a7cedb467a0a29d95f4475e8c8c63"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0d04d09e8089902977a01f462da70a5e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2fa69ec83c8aafe91b97048356cb0d2d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "38808a3e45508e7779dc01b07c131749"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8e320f5ceab1d249277282a35871c738"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "878259e9257c118b5461c251a65bcab8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6c691d551c380860b1d053e080344fb7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "da6b6d551ce0985c1187c55e035f1a5e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7e63f870919665a4c827637ee2169c28"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5976abd02b0a1e1ea1e1eddcc1c69908"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "becd524be83f1776f06b7e8df411856f"
  },
  {
    "url": "timeline/index.html",
    "revision": "694f38d69020ed8c6253c8b570ac3929"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7ce681b2cba96588a48e8c80d9936fba"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e333276826851b6371117757da7216e3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "33732ab68b3a058a9ef76aa36edfbd0d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "557d01af43b97a414617bb0ec1cabcae"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4a3dd34994724473c727bf9ff19ec826"
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
