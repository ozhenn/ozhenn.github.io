'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4096b7ffbfe09decd484bf3d94c15bdf",
".git/config": "f35d0fdb506d33ca5c91533afa5828dd",
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
".git/index": "9bf7f9e15aa9b9c87b658d700ce902ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c775f2284f2f21e2410a1f2c306cac2",
".git/logs/refs/heads/main": "9a88c64ba3792a5b2da5fd346f10ef03",
".git/logs/refs/remotes/origin/main": "536bfc19179f046a4e70677358ed6f8d",
".git/objects/01/3b461caea6aec28c244ef35df4ddc623ba01df": "e5f580216b92c2cf2f09cd570762db8c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/15/32c0e7c93a1839fd58042962e37a45833d21f3": "46e0ab90098acbd0099c758e451b8f32",
".git/objects/1b/cbd5b37bbc972468dc779661153f5008f9a3db": "3f5a32f12e44ac755580b6a7d8beb3e0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/4d4015481a25cab3a604c6d51cff779d10c380": "82c8da4c73676deae4696bec5bc2c386",
".git/objects/22/450af56a2d52cbf93a59797026e22f53b42b04": "4c253a76913e1d110cee3982886ecc74",
".git/objects/23/cc3b6e51e8ced5bb30227f99e000723451c5bf": "715003c3f82fed87e53e7a1fa491c729",
".git/objects/29/3ff776e25212cb824452d0df83ecdb2510a211": "41bc6b6307f07263e8126c3fd714e688",
".git/objects/2a/78a5d49c2238770202c6d2602da2ab849e48c6": "35031c5b4a82f772b44e8ec1adb1a1c4",
".git/objects/2a/b478d70aad06a7cc92fd2d30c4e0d02d6e4d73": "1a21628d972bd9c426b7aff72dbc4f81",
".git/objects/33/d29b0a66389c66bedcf57618c03c2ee582a507": "255ef9bce16e03d4b0179d1105ff1cff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/26c5173062db4a174ca5977e00a003aeabd76d": "be895234c5abbbdc46943c359b97de87",
".git/objects/4b/656c1a5ac10ae60aa10550f4c1ac294873343e": "2f4392bbb573e6b9dfb4ef58dd555960",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/f2293e5d5f2fd1849c1bc85c6ba283545e60ac": "a5a5b2a3fd669e6514a9a5a62cc33063",
".git/objects/4c/80dc33ea001f71464db52916c232104deb24fa": "29ba88ce38ab2d5ccb0906f59e732236",
".git/objects/4e/be9df20de801af8b36f5eb450fc3a8c2eb10e2": "8c86c10a06c0c5ace979139ad6f8aca3",
".git/objects/58/a68e51cd72d25ee23142a2a45801585b267a51": "f8876742e8f1762fc118d5a330c5e3da",
".git/objects/59/eda3de2368a8a652752bdaf1cd175de7af3c1c": "c9f6d4cf2386f8566dadd3dc0b1601c9",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/60/aaea83e0a60fa8af87c1fbe93ef751fee19f65": "ccc55971298749106106c7c8e96e39fc",
".git/objects/63/242f5949c28a186e1673123e702f3e4e535f11": "fc08e8d6f0603d8d3158d6753ea78422",
".git/objects/76/3f0e4e0d121cb5b3d23c0146c8d18c63d1db02": "a8a369efbdab6ff8bd6b0ddc715c0b28",
".git/objects/7d/d9cbbc1232e76081fb9366b4853970d4850dab": "271e69f49e9de2c720eb84899036471e",
".git/objects/81/f4e546bb314d8e49f7c36d33786771b00df932": "6a26b6d5b730e5a30c1a3a43cc5e60b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9e/00e455859e32b4a3a02243c90b8222f89a292e": "830219158d606f76fdc45e0f2b13d38d",
".git/objects/9f/660978f89c809fd5908d9f19413cb23fa9f9d1": "30712272d4647ef6036df9f45222e14f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f51278ba4968da1b5dd04e5195a2bff5f00860": "d5324a01788ba451ccc535751b7f3392",
".git/objects/b9/da720a989cfddf33994cfd0644fdc993c1c643": "c48e3dfffdb84d05235a47d0dc98379c",
".git/objects/d9/8af09b4c9d1e4babcd02d2b4f9764ef2624147": "f7fbaad4dca953474ca8323afa599872",
".git/objects/e0/f587c1bd1ab0033eb8880f2f12f5e91ece3044": "c10bc86f7edfd09fa4437bd9592e7819",
".git/objects/e7/489e05f85dd2e9fc906c3f6c50a02076f5de00": "6529486a247edab0e67da3af55ee18e2",
".git/objects/f0/48b709927049420138b726b37ae74b3afa5413": "517394ebf3d924d6f0fa5549caa51f3a",
".git/objects/f0/f54d5ee68882478b0f1e5d7063b96be9930527": "4d87d8339727b1878ac4043cd507dda1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/e56c729e44dc294ffc2ba8a95e68dba1e98f91": "89aaa3d6ce1d182b642ab13058750b95",
".git/objects/fa/7145fbac5d02f49594bf7ca67d3578d1d90aa7": "1d88812f244ed8ebf62e9867a33c738e",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ff/446057dc908e6363875751455afa7ae8672786": "59dcb8c9d601fd3839c2c781c1050842",
".git/refs/heads/main": "736fad021895ec0c36115567e9343a6a",
".git/refs/remotes/origin/main": "7e3220553ad2737863eaae2b00579d0a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5525db3477bc14fdf0177f217f7e400a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "da8ee6db0909eb9e36893765eca640db",
"/": "931683f281297bbcab2a43b9182d6196",
"main.dart.js": "bf74000f5ba2dc2c2a2dde2494dc4daf",
"manifest.json": "e553ff18ca23d8e82365fbb9a8bf942e",
"ozhenn.github.io/.git/config": "328758dfcfc9945456c59ab9e996ea59",
"ozhenn.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ozhenn.github.io/.git/FETCH_HEAD": "95d40a1951a9d21647244c2cffb248a0",
"ozhenn.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ozhenn.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ozhenn.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ozhenn.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"ozhenn.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ozhenn.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ozhenn.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"ozhenn.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ozhenn.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"ozhenn.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ozhenn.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ozhenn.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ozhenn.github.io/.git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
"ozhenn.github.io/.git/index": "583f0ccd2d43496bdb8db6dde6ea6cc7",
"ozhenn.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"ozhenn.github.io/.git/logs/HEAD": "4428625569c16f85e66ee8ebddc1e336",
"ozhenn.github.io/.git/logs/refs/heads/main": "4428625569c16f85e66ee8ebddc1e336",
"ozhenn.github.io/.git/logs/refs/remotes/origin/HEAD": "4428625569c16f85e66ee8ebddc1e336",
"ozhenn.github.io/.git/objects/pack/pack-4eba76949cf1cd779daafef94216f7dc3839dfed.idx": "46ba35449826578e8b8863099113e732",
"ozhenn.github.io/.git/objects/pack/pack-4eba76949cf1cd779daafef94216f7dc3839dfed.pack": "8859cddb23ce98b0142e7a75067bc7de",
"ozhenn.github.io/.git/packed-refs": "28124a9851378bd82c06c2fa0cb30dc7",
"ozhenn.github.io/.git/refs/heads/main": "27b9ac8e9cb8c284dc5ab27d0964e568",
"ozhenn.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"ozhenn.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"ozhenn.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"ozhenn.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"ozhenn.github.io/assets/NOTICES": "3b6c7dcc6e6473c600b0b8d03b4bafee",
"ozhenn.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"ozhenn.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ozhenn.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"ozhenn.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"ozhenn.github.io/index.html": "931683f281297bbcab2a43b9182d6196",
"ozhenn.github.io/main.dart.js": "fa4005f2b8c82ba7cd8c44557388d513",
"ozhenn.github.io/manifest.json": "e553ff18ca23d8e82365fbb9a8bf942e",
"ozhenn.github.io/version.json": "8ceba3fbeb2f8828a291766de2287d3e",
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
