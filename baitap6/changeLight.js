function changeLight(color) {
    var lights = document.getElementsByClassName('light');
    // Tắt tất cả các đèn
    for (var i = 0; i < lights.length; i++) {
      lights[i].classList.remove('on');
    }
    
    // Bật đèn tương ứng
    var selectedLight = document.querySelector('.light.' + color);
    selectedLight.classList.add('on');
  }