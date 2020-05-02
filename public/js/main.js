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

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', e => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', e => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
