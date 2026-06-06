import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: request => {
        const url = new URL(request.url);
        if (!url.pathname.includes('.') && !url.pathname.startsWith('/api')) {
          return new Request(`${url.origin}/index.html`, request);
        }
        return mapRequestToAsset(request);
      },
    });
  } catch (error) {
    return new Response('Not found', { status: 404 });
  }
}
