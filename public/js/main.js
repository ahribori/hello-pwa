if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // 서비스워커를 register 하면 promise를 반환한다.
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then(registration => {
        console.log(registration);
        console.log('서비스 워커가 등록되었다.');
      })
      .catch(error => {
        console.log(error);
      });

    document
      .getElementById('notification_trigger')
      .addEventListener('click', () => {
        Notification.requestPermission().then(function(result) {
          const noti = new Notification('Title', {
            body: 'Body',
            icon: '../images/ryan.jpg',
          });
          console.log(noti);
        });
      });
  });
}
