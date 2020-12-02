'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cea50d0c85a952249e98684d7e4203e1",
".git/config": "b7d48e0321eae17a0d41cf6a25d12e04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "f8e4d3e619653944675e95796d25633c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4369edf0a325eea47dada8ee6c8afd2b",
".git/logs/refs/heads/main": "6ceafa8bb15946b3b4a76e5f90324996",
".git/logs/refs/remotes/origin/main": "2f40d44c203e2e33e27d6b595a1cefb1",
".git/objects/01/3b461caea6aec28c244ef35df4ddc623ba01df": "e5f580216b92c2cf2f09cd570762db8c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/1557a41a138df35590f4c32b1984a8c7d42ec1": "7abcd2cadec2714b1ffd5ee322d613c0",
".git/objects/0a/6c172e298abdb9c77cdfbd98b82ad9f8ff305b": "922ca0a1f86a9c7550b077a4a1928fc7",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/6302ceb71ddd1a36c2daaadb9228614889b297": "47f45c6126db818712bdbcde113be95b",
".git/objects/23/cc3b6e51e8ced5bb30227f99e000723451c5bf": "715003c3f82fed87e53e7a1fa491c729",
".git/objects/25/6d5aa20cba753e2a8be4d17b2d91c3e03e45a0": "0bebf0f663804850ea342a3121bafd96",
".git/objects/27/e3586e89a2a608d7a6d5d28bfcd6864f672dd5": "d4efa6e9c545839c74a234ab001d6816",
".git/objects/2c/033377550ef1b28366bea38c527a22517bcd31": "0013a5bd3aabe4024d14b8b7fefdcf83",
".git/objects/2f/fda96c795cb065546afc055bdfa36067e78ccd": "66a81dc50022ac3f9cf01d9b95e549e7",
".git/objects/3d/3625531d3169ce546368d725566abefc703a61": "c5be60411eff70dfb25f08aadffd1466",
".git/objects/3d/c74df1963a6257dbf628b6f06c8f00431ed9c2": "6c3564fd74dbc00185469ad6731b3afc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/db2c6a71f659ac25a119d1a6a1637e11303887": "f5537fd5b8b7cca3a3c0b3d481ebac52",
".git/objects/47/d57ce844ce0fd9974835893856bb6f9a3c9642": "7247f3424bdfa1b197c902934e683e10",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/22e871e23f0fdce2da51af6f1401137c4a2dbd": "e11ee768e662bab5059857fe84ad19cd",
".git/objects/53/971a2b4eb08f988b38f581cd3441d3365dce6f": "55969f1d3641a0031d51168e2d70d0c2",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/60/75478faa9ba9c443e11894b104fe1f0e88882e": "29efbc8c787557cbedff1775a5141bda",
".git/objects/63/242f5949c28a186e1673123e702f3e4e535f11": "fc08e8d6f0603d8d3158d6753ea78422",
".git/objects/69/f8cdfebcf8b64db44734d68ecfa054734f245c": "e35cd139cb9b7b3213bc73f3c6934ef1",
".git/objects/78/4b68d3c495c2305e467014ca97b771d25325bf": "c44c78ad1b0308b17c894c92e246d8af",
".git/objects/79/a4524fda25d49b0ba358245556899988ab6cdf": "2f7dc70d75ef1206c01c6ef894b4dc6b",
".git/objects/7c/2fb80b190f7b3ce813aa23771ba347b703025c": "7ea9aca5990b097c5db0d1448ffe5e7e",
".git/objects/80/468abf9a9c5aef6fb7fe885ecc2c42bfcc2c50": "5e6c63ab48f9fd5e22c62b07f743f3cd",
".git/objects/88/a84d332204284a370e1228feef7361efeb0bfb": "736378318c8d0576a6299eac52809960",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/715d6fa33a8932d6f135bbf1cb0708a486e882": "8d7fa6e62d8403bebc8abc30b15c9be4",
".git/objects/91/b367d4a5981a919ef007941338b1a7d98c1997": "24d61e2b0d56dd7a5dd192fded6d1da1",
".git/objects/96/20ebc4f9446294ed262a284f5c8e9e5baf8ec3": "51931bdc2f87868a9b130d5be736d9fa",
".git/objects/99/1fd032cc984b8441d19769e4def7a3bc90bc2e": "0a138a3b2ce4afbbadf107d8b1a5a573",
".git/objects/9d/85de88b0f3e6b80e3495a00e3b4f9c01648a57": "1588d807f2453a83ca2c9b72ddc7db96",
".git/objects/a1/e2c70baeeafd8100b6b80b61f956baab0f06ab": "64f82922bf212f257485abcddcc4037f",
".git/objects/a5/7e4763fa9196582f62229ac3e52737426d3c55": "2f0786bb32a88db3fbef2b32f24a0258",
".git/objects/a7/bb00e76e3301e5ff6757a6c2e9520e715dbe11": "9cd7c10f73906a3101590d44e29b5721",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/9a751608703b111c7b0a08bc01ede6f8fd70ff": "f48faa4053e5b5ebcceaa1c23b758b92",
".git/objects/a8/bb93ba23a5be2a744da896bd8cbe6d6b1ddd9e": "615ccd6c89f8163512a59e90bfb05d24",
".git/objects/ab/4e5f81c295bee2a165bfc5b17321214b69624c": "e57626390369315fc89b974bb7968146",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/dce47004ed2fb71a21eac9c075620801a5d5bb": "37f6247c888bed8a68b77de7aeeec207",
".git/objects/c6/2b4a0b40ddc0e97583a4ca42c1d98461e56de4": "dbc1cbbb604832f4ba0b3a37f07db020",
".git/objects/d5/21c873792080c8331646b70026e9f7b1efbe11": "76615f4afb643e35ad23f1607731ed55",
".git/objects/dd/a32e38399629585eef1e411d1a57bfff24982f": "976ce1ac83f520d0edd80daf385b75e5",
".git/objects/dd/ed99b5fadde4ccf64c70bab79f7f7beca3efdf": "dbbd3289c68898c904027a616f5e5352",
".git/objects/e0/b017e9f061e135ded42c6fc57a162ce05b09d6": "8fef4bfa48b7741c4ff80bfae53d9292",
".git/objects/e8/bb30387e56f0e76e02a149bfa7d8ade8ae77a6": "98763baf1ca4e2ff6a3196fa64aa455f",
".git/objects/ea/e5b054d2c2180baeaa59b49b0d90fd976f684c": "356fdb6102f930f63976cd396a817dc8",
".git/objects/eb/12a2a9c95920c5c75affe7ab9379900944484f": "1b88aa5905c9315f911289b1e8879573",
".git/objects/ee/aa68733d2bf48106244f9f608a0447a3525b62": "d7dfa0644f08954965b47f9b0c0e387c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/17b1e835a71be5e84662e82b0738de1bf43480": "edbeedafea96ff9b0e5e1f4c982befa5",
".git/objects/fc/716a87abcf3192d9e035962937aad54687fe13": "1cba1f1308eac76217d50b0f289fe6bf",
".git/objects/fd/f40f0900e99ac0d86e88f4c56892d8c7f2d123": "237ca6397757f7aab03328f43f8ae2c5",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ff/266dc41578b7c7c51a9ed9199bcd7764ebe79e": "11b769fa7da728e0ab9e559989ad568b",
".git/refs/heads/main": "4878c120c55c2911c574ae577f5b8ee8",
".git/refs/remotes/origin/main": "4878c120c55c2911c574ae577f5b8ee8",
"assets/AssetManifest.json": "7b5905cb5ae626a6853fb4bfe0f0840c",
"assets/assets/images/svg/zzz.svg": "fa82342823dca3283eb488e289ba2c8c",
"assets/assets%255Cfonts%255Cexo2%255CExo2-Bold.ttf": "c30bdd2899caa38dd7263e61342a44f3",
"assets/assets%255Cfonts%255Cexo2%255CExo2-Regular.ttf": "b5f984d1c21970b20048461157228e26",
"assets/FontManifest.json": "f9f620b0875ed331a22c0a56fa28603f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "2e207e2bbccf15e338287cd87efd6a5c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "110a0525918867a0b3f8bb4eabc33333",
"/": "110a0525918867a0b3f8bb4eabc33333",
"main.dart.js": "45fe192a5834a9eb8e08e35267ad9853",
"manifest.json": "e553ff18ca23d8e82365fbb9a8bf942e",
"version.json": "8ceba3fbeb2f8828a291766de2287d3e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
