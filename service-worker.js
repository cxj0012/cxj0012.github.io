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
    "revision": "5594904a90efc3b549b4287eb6ffc025"
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
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.b25d8f97.js",
    "revision": "15ffa534f0e33db227cd4ba62fa00f4e"
  },
  {
    "url": "assets/js/17.6dca6077.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
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
    "url": "assets/js/app.ad41fea3.js",
    "revision": "2c5bdb52185900cb4e4b1fc846b7c33f"
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
    "revision": "c2ad675ccc7d45963b3ba4bf6aeec322"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b1db3e380eb5baa93f240d7fa05bfde1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4d4731e0926b211a12655d8a71bb23d5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2c7a33ea1ce3fa344b6f3443b08f72b9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a2c890fa1179c662a12cf39e6403f6bb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c7698ad87c8895575a85fd1f2bd799c2"
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
    "revision": "4abc7495db118155b5c5fcf38262cfe9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "48a3e272efc619e6d3807cc80e451c99"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b885605e9beda1a93c4d09baf43e0592"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5c0a4758bd42e1eae880cb6448c1e9ef"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d23e47f8ea8ad6ec60483c632b55e89c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6b6baf9c9bd7b8e75535e1cd01f2be10"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "552bd8d46746ff80dabc5ba4814931e5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "430c2bdfbcbd172b31819ecd97933195"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "751c52b656f9faf2ab2de352f75d5126"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b643edf5914040b948a2f73270fcbbf6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4394058a8f0a9d56e1704141a809b039"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d3401a796015c5b04290f8eeb449bea6"
  },
  {
    "url": "timeline/index.html",
    "revision": "d8f5c97d718f77589de7e471b5b5b854"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e1ff7736882bb14ca8aa21aa4cf5b8bd"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bef01f44bd356e8c5aa79246f6895e3d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4fdda8c66392736c0c913ba99e0f14ae"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8976cce54f45b8e033542a0489c8df2c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8a67c902b397b601342a80f2c50949e7"
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
