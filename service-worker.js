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
    "revision": "cf08e522650dddd97159e709dff2c2c6"
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
    "url": "assets/js/12.06ef4276.js",
    "revision": "05b38751e842897cc6c68a24d7c5732c"
  },
  {
    "url": "assets/js/13.788a1208.js",
    "revision": "acdcfff7a63349420d91f87c801a48fc"
  },
  {
    "url": "assets/js/14.f1c8e62b.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.8659b153.js",
    "revision": "d033044aaec6b34224e8ed3d4b86549a"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
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
    "url": "assets/js/app.14312e7c.js",
    "revision": "b12af2ad68a87405e3150bd986bdb1ed"
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
    "revision": "bee8ab518faca6887ac2ae74cd3b88b4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e041c2c964469200754151fb4ab93220"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7dcdb13c641d2bb722549ee24dedacc3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c8d303d8e3e7584848035519ccf3114e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "95f03e08030926e7a9d302b65ab3991d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9a38b6db5b7676797dedbe401d96618a"
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
    "revision": "e4d132643627a0ec2efc1025696691ab"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0e43a44b8b3892f9f6fec418521d95b8"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "23ee6bf9121e19b2a055d52d3990152b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1c6dfc7fc9496b1058ac711dc02ce215"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3038359256cc66650067c69e008d7f3f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "eba8df42e832a3a8df220fdc0da1aaf7"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "05ab275d2b3a0971144674ca3f380b59"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9191e9ae3fa4c09a989e6399357f97f6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "cf85326bcea42c084ac029628c5f449c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4dad3067823707709575370bdf5d3ae8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4b9340c7bc3df817e8cc5ddd7ad361e1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "19c68680326d08d04aefc504b6e999cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "1c8bb42ea2f38a88c979d2735599a171"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "dd37ab5bcbe6f665779266a6992fbcda"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4a23b322bdfe581932da9d1a66d27e31"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d15ccff19042a0fe90216e778cf5f06c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c4ac543de841b1086c72ded420293840"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b9779f8736664e33e9c0f9844b8d2d4e"
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
