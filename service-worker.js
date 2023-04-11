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
    "revision": "97cff374b030cd0912d6aa289b310419"
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
    "url": "assets/js/15.980eb426.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.8c417bdc.js",
    "revision": "77d86646973db802dec199f749183516"
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
    "url": "assets/js/app.e410b5a1.js",
    "revision": "aee2fe9f966eccf0bdb15912f8210074"
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
    "revision": "e18e2558c9ca6c96818ea14fe6dc1fc0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "784cd7739249fc512cd7daa17a8c17a8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2876d8fcfc63fa3ff6a4cce5ba6fc346"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cff5024f383386b5ee08df992d936cfd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9b80cfad92cf2a468399482e947a6f25"
  },
  {
    "url": "css/style.css",
    "revision": "e0e7f0bb49f69b195678b18c82cef187"
  },
  {
    "url": "guide/index.html",
    "revision": "9f788e3173dcb8fa798036294cedaaf3"
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
    "revision": "505ab08bbb7aa17216b9279a6579971e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ba35c9fcdb4160c2dae7674b6c30e7df"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "dce7d3a2aa84c6f278b2b49b783268fb"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7b05da551619469231411bcef4ff9b3e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ba6a4995eacf49ed9e7401e89e99c854"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "cb0d57ec2dae7bf83ae74cb51d686af3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c364cde315e7505620e389a4bbde8de5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2ea7d91666f7ed0cf67e537e407b0bc4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c685bdd1fe5cc54c1b29bbaa2a0476b5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "72c430ae569954cab8e52d87ad79c7ed"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e2ae6f08a88c33e8e9b30a3e21c7abf1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2d6d3eca19448542f5f1a1a666204838"
  },
  {
    "url": "timeline/index.html",
    "revision": "8b5988764aaa598c2dc705189372c1a7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "754f27169ed3200d761ecd183f94fcb3"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "155f1409d2ba4afba99fd44c71881ec0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8ed6e9e43b28934a089ffeb574e211fc"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3ef61d7a7447d58b86b4fbb36241d53b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8e9609fe4b2ff7ff9f6bce35cd1cd6e7"
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
