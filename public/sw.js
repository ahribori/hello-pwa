self.addEventListener('install', e => {
    console.log('install', e);
});

self.addEventListener('activate', e => {
    console.log('activate', e);
});

self.addEventListener('fetch', e => {
    console.log('fetch', e);
});
