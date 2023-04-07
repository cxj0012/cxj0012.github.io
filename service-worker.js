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
    "revision": "c3f311d98d0a2e6d7336f2f8f7ed3a51"
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
    "url": "assets/js/13.2788b439.js",
    "revision": "19fac4ae71a59ad8fcf576ef66d30eeb"
  },
  {
    "url": "assets/js/14.3ff36ed1.js",
    "revision": "730e4139a30d67ea051dc58189e3abeb"
  },
  {
    "url": "assets/js/15.50a7b002.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.172ea8bd.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.42482b2c.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.e46068ae.js",
    "revision": "2f98574d23998e4192e127bcb7188b70"
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
    "url": "assets/js/app.6316a3d7.js",
    "revision": "7dd4293d0ae6036d7f77033f298b775c"
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
    "revision": "8afa7669e7efd5128090f3118a1a4711"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7e910ee696908bf4a0edde7dc3461e3c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "727eda01e46c29d90ca2061db98e5730"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "db68cb98497f1ca8a87fb67fcd970e55"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b739029693c55855f7c330a32cc1b1aa"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3e84111d25d9a205a18a1eae23742cbc"
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
    "revision": "c3cd6db2ebd9f3d34c2908fc1c268c05"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9dbbbe0239ebbff6a8577a8e05c62467"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5a97ba643ba675340b5c6cb856a4879d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "08944b8240dd08309d18d3b893387d5d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3ffeb530dd80cdc9b9d32bf1ab301000"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f328805aa4ba78380ea56333e674bb8a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0a08183fb8e780cead67ccad8479b7d5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d653b1811aa662e286d8c36dfedab19b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b02e68544b235adfcebd2e7a52b806c7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8ebedf668b41ffa89169c248e14bf4e2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bcab52c8ca60cfb5487b0e7c4ee473d8"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f960039dee1b3c2f8a090b85bfc181aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "954089d6f454a25d4b23ed2e4445465d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1ff0048b1f9663c1878beb7854e60a6f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "42285179bc6bf03c8616eb5ba03216c2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "65121699ae5167304a8a581e6c0a3871"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cbf7ce43baa8a6c1d9ba150ce19acae0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8cf2457639ce5fb66156ed72bb38a426"
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