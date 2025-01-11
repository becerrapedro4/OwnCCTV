function login() {
  const password = document.getElementById('password').value;
  if (password === 'tu_contraseña') { // Cambia esto por tu contraseña
    document.getElementById('login').style.display = 'none';
    document.getElementById('video-player').style.display = 'block';
    const video = document.getElementById('video');
    video.src = 'tu_url_del_streaming'; // Cambia esto por la URL de tu transmisión
  } else {
    alert('Contraseña incorrecta');
  }
}
