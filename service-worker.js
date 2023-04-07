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
    "revision": "557af8f07d6f3ea529d5f2c0a9d59d63"
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
    "url": "assets/js/13.b9771bf6.js",
    "revision": "e5a5ae4e374b0c7ac5b4dc09d0ab8947"
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
    "url": "assets/js/16.1f0e2f0a.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
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
    "url": "assets/js/app.72d82dae.js",
    "revision": "cedde2fab01bd86dbfd1f1f8e92d7ee5"
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
    "revision": "38ee8bfb18b9c588ce2a78aad633a237"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a2bfc49245cffdc924822257b7add3bd"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f13912830ad23bd8c809a3522e42cf47"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e4b160672a7eea53e82a71b1bb255644"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2401fe4be962cb8155b3dd75a6f0a53a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5c98e89f1f0158cd1b6822ff9555d512"
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
    "revision": "c926e7679345dd5c59bb3aa891b29642"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "28a305ee546edcca539aa9a0b2904c44"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d6b93d4245f5288548e2e4796d8da32a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a81300b17b6a85dd28a411ae5eb1a9eb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9e07e432dcaed2fc9624c7c1f8046ee8"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2d5872221e38e53624dc8a2b1d497335"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2b9597e290c28c1c8b07713afb1895b1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2bd0060076d4f2e52e7805d51faac736"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0db3af0e78b28c891daa565ae8ad355f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "033aa500069ca179b48eb80a732543a5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4c6ce348767630bc77ebbc38daa91fc2"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "807cf735d9dfc4f38a9a3125aea90ebc"
  },
  {
    "url": "timeline/index.html",
    "revision": "ce4db870627b1b480168a9d2ec5a5357"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c7420457f1553b9ed0c68e625bab9373"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "dc21aa69c3331537089026f188ffbd46"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "68724f0a9b5b9b3caf5f57430ca0c577"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "38dcf691ab2725675ad77dd97d7d129d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "af6a04748e876a867ca65b3679987053"
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
