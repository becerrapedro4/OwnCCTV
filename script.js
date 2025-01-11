function login() {
  const password = document.getElementById('password').value;
  if (password === 'tu_contraseña') { // Cambia esto por tu contraseña
    document.getElementById('login').style.display = 'none';
    document.getElementById('video-player').style.display = 'block';

    const video = document.getElementById('video');
    const videoSrc = 'output.m3u8'; // Cambia esto por la ruta al archivo .m3u8

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    } else {
      alert('HLS no es compatible con este navegador.');
    }
  } else {
    alert('Contraseña incorrecta');
  }
}
