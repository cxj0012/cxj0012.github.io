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
    "revision": "5f9ec0f4aec8e5943143534b63aa2686"
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
    "url": "assets/js/12.cfdc75b2.js",
    "revision": "1523ab2e9237d015413223374b0b45be"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.5a741e9e.js",
    "revision": "116203cd3252e03bc40acb4af122a2dc"
  },
  {
    "url": "assets/js/16.8659b153.js",
    "revision": "d033044aaec6b34224e8ed3d4b86549a"
  },
  {
    "url": "assets/js/17.4d1b88c1.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
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
    "url": "assets/js/app.9c852911.js",
    "revision": "78f8303ab2bf2ff1218da1ea784ee859"
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
    "revision": "cd2f158d6adc0acb32fd75b4aad8dc75"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c755355237997eaac0ef77f70be4cf25"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "21521d05921c277bbde59363ecbe793c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6fbea5f86e8184b1aa8ed4ad69676f1f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2815d460918ef6d3ddc6a92a6d5c9362"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f38c51e23223309e8162be94c55bac40"
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
    "revision": "51d68bb476f63ff7b9aaaa8d22d92d52"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8d0946c8b0f53f95922676d1f1b9e6a5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fb2a3a0c0b2e887398290d4c864a3324"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "451224913e55a7f7f9380de1644d7e45"
  },
  {
    "url": "tags/js/index.html",
    "revision": "fa7f6c72b44d93edb9deae6b7757c34d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "08f61ff323f03056ab339a033c842c40"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b1af184817d223a7322761a893eda0ba"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ede12b1c39f20247d5910a75d4b14edb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8bd03ca26b103fceb86669b39094fff5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d0514f5d30836c0c91f5445f6fb6e369"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "686c7d7f07786d0e1272ba62cd212908"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "305ee6023d8cfcdf7d7aa575e4c0cc0d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c55d23683fecb247f1d0fe7fa0dbc84"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5d21e37236ebf366ed5443aace6f397f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "be855db18017e8e1b5f83a97380a282f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "cfea803cb54c91d093d13bce918d998d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a5d8c10733e0b046d4166fdd23030c90"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6bcd0dc22db9c2330f015fbe5fe68ce4"
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
