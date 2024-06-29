function pass() {
    const icon = document.getElementById('pass-icon');
    const currentstate = icon.dataset.state;
  
    if (currentstate === 'hide') {
      document.getElementById('Pass').type = 'text';
      icon.dataset.state = 'show';
      icon.src = 'pass-view.png';
    } else {
      document.getElementById('Pass').type = 'password';
      icon.dataset.state = 'hide';
      icon.src = 'pass-hide.png';
    }
  }
  