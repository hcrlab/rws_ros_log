/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/font-roboto/roboto.html","cc5ab0db2b4afcd6b3490af9ba55bb98"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","9b51ca6689770fc9c7efb27129b7c5d7"],["/bower_components/iron-ajax/iron-ajax.html","6fe26e77115b2757c9db65a71153509c"],["/bower_components/iron-ajax/iron-request.html","1881ad6ae9bf637ce49ad766bb17701a"],["/bower_components/iron-behaviors/iron-button-state.html","19d308128b6a339b7125c28e142dd04b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-flex-layout/classes/iron-flex-layout.html","52518a396b7b6638323e33320af1e2a5"],["/bower_components/iron-flex-layout/classes/iron-shadow-flex-layout.html","82233435af1c9e0c4f7533a5db91d30f"],["/bower_components/iron-flex-layout/iron-flex-layout.html","b1d94b670ee41624168cb8161233ca73"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-form/iron-form.html","ce2bb3b2e7aa1daec5fa83b02334045e"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-icons/iron-icons.html","224dfbc53cf908d9ae68da954ca2d8e9"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","0ba4675c3ec856c26912022dd5b05036"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-checkbox/paper-checkbox.html","2ffe9096ff2e7fa16d46d11fa7d9dbb2"],["/bower_components/paper-datatable/datatable-icons.html","27459537dd618806072a5853590373a8"],["/bower_components/paper-datatable/paper-datatable-column.html","9ae9db61b0b18d6faedf8943e2d0449c"],["/bower_components/paper-datatable/paper-datatable-edit-dialog.html","ab4b0319b336a0d80ce6e01457104db7"],["/bower_components/paper-datatable/paper-datatable.html","de5d39613aa77e6fe2e290920d1191a2"],["/bower_components/paper-datatable/weakCache.js","d26a54f13e8e9a2d4c31920782719976"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","90f82a229813d87a666f2c46528a67d1"],["/bower_components/paper-ripple/paper-ripple.html","417d76dccb679ca1000ac8ca18be4968"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/paper-styles.html","3fd71f69f3adc823ef9c03611d296cfc"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tooltip/paper-tooltip.html","afd000dc45c35e30d0b35cbe3b5560cc"],["/bower_components/polymer/polymer-micro.html","a6a0c47c498b2811c02d5a510ee0b6bc"],["/bower_components/polymer/polymer-mini.html","6b0ef1db94b354ab48387cb093708e21"],["/bower_components/polymer/polymer.html","c12d801ec32d39c0edb7f3d2638eecc9"],["/bower_components/promise-polyfill/Promise.js","543d053e97b2f3bf434212aa4db1fb2a"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/ros-log/ros-log.html","bbc95ae3c34316375ba5217c79de1b37"],["/bower_components/ros-topic/ros-topic.html","5c941dcec6f037da123a4bf6c0078c7c"],["/bower_components/ros-websocket/eventemitter2-import.html","31ca8146ff34fcf6ffb28a1939fdb220"],["/bower_components/ros-websocket/eventemitter2.js","2e37425e0b7a7d1c0f66c920e0fa6dbf"],["/bower_components/ros-websocket/ros-websocket.html","783a9f8be07d7c66fa4c1603bdf5ebdb"],["/bower_components/ros-websocket/roslib-import.html","fb3f9a6c32757704e0f9b2178097e754"],["/bower_components/ros-websocket/roslib.js","03899a4585136e4bf778b5085187e712"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","eff0e6d7efaf35c9e4fc1456c7ad7e4e"],["/bower_components/webcomponentsjs/webcomponents-lite.js","b0755bf285ac91b5ae2af5dc0f57791d"],["/bower_components/whenever.js/whenever.js","ab872dd325f37f09214c7604714c270a"],["/index.html","6d46872a0dffe90dc011733a9c279f87"],["/src/rws-ros-log-app/rws-ros-log-app.html","b58238b1afb086c1a330077db0f5d17c"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




