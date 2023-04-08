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
    "revision": "0bc88cbd9a55a5507e32551c93bdc60e"
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
    "url": "assets/js/12.bd626a2b.js",
    "revision": "09f4af06baaf275b5ac2d6cae2b0c79d"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.ea616527.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.ed07ff7c.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.1f0e2f0a.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.285cfffd.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.391bc021.js",
    "revision": "1334fb5621eda16e76b3fb357b31dd46"
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
    "revision": "5fca0021510d9c852bb892513ef5814d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ce57322c2b1ca1411bdb986bf4bdb187"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "406a4dde611c5ea6475d43538750c724"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7c3c58882e370d3e0547462cc4d7db7e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "125e536ba25de89fbc02e6d8000d9d1a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ac540b81ed787a6b42256fb448c0cda3"
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
    "revision": "5b6be324d83fe5fcd3f6ef214a83853f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3c06684f60e05302f07873c09859febd"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2e579d0135481811139c2e6db831388d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7a41c1bd27a6f2d3e7667ae2b3c5411a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "889032bf4c60c91e0d9759731ca298cb"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e2db87d2047ffc20ddcbbb617d6b4987"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0ce5d29e83d97a98efd9bcf5c24a2707"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "63a20eb5fa3f6c9184c00d45c0c9d909"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7a5c0004d7418fa630151d9d780de242"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2e8aae0b969d33ad570edc2e853d9065"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cbc7835883bb79285aa0b7145cdffe31"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "201438c9d354b13395ea724294112e0c"
  },
  {
    "url": "timeline/index.html",
    "revision": "2391a7a46875cae227faedb1acb3d518"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "57e8f6da536ba4a3506227cc27a2b4ba"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e768333fdc830374c3e9c7298e260cdc"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f7ca2cf53219c542f855fa4dd6bae9c6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8792646b0522448d644730a722b4226b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1b92ec14f8dd8491f7c1447909c7b7b9"
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
