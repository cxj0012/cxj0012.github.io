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
    "revision": "caee6a3ca5c3922d4a26fc1525644a5f"
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
    "url": "assets/js/13.665ce0ec.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.48f7337f.js",
    "revision": "1ea838ee1f3e2e4ac5f94e14fb2800b2"
  },
  {
    "url": "assets/js/15.fd6a517a.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.60f506c7.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.42482b2c.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.1ea1d894.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
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
    "url": "assets/js/app.91914cc8.js",
    "revision": "82a8f1e464c441d66558206bceca8294"
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
    "url": "avatar1.png",
    "revision": "d7e7f36bff4cb73152ccf58704040d13"
  },
  {
    "url": "categories/index.html",
    "revision": "bbc0c38ff6d899c596848d4299ac8860"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8f6cabc419283e385fd314a8ea05ad80"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "60fcf3d920000e77bbb0a01b6239929f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "20e0362bbc73f9d92244f75ee1de4ee1"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2338e829471c3fdbf667727d03ddac00"
  },
  {
    "url": "css/style.css",
    "revision": "e0e7f0bb49f69b195678b18c82cef187"
  },
  {
    "url": "guide/index.html",
    "revision": "fcf0298c1531d99498e56a7fe7ed5d27"
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
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/logo1.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
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
    "revision": "e306c8397e82863d82043ba1db04e983"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e7af31d0865c65ff536341adc7b42ad9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b3675b3803da7759ec114f00bd0b9b6e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b754fb37d624da1c9dc3fbe15ce2bb71"
  },
  {
    "url": "tags/js/index.html",
    "revision": "aec518d55facd8d3ffce158952486318"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "62b73d887efdbe53be86385f3ae13a49"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9872adf5b50f3c8c4d0c0e28c103b4ac"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "961e1aafa6d74895ff356cb45052bfdd"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "510fe2c9cc5924699cc49f3a531bf883"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6d3ccb2a2077b8ec0e006d657728e3e0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "35dceb6dd2e82d04280f2fb53055a231"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e4fedb738fd500ec4817c0db0a1bf5c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "b86f24a75a26d20ed84a1b0c4e5766eb"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "53701195378962cba74dfdbdd61302b8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "232a2bc82fbed344d8b535d9fb47fb6b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "477406a9c4a37bdb045e3889c1c278f0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4a8d004311ac70a4728743c1c402a3cc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8e9839e3d68fac010859e15e402af899"
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
