let bulletStartPosition = 0;
  const bulletContainer = document.querySelector('.bullet-container');
  const bulletMobScreen = window.matchMedia("(max-width: 767px)");
  const baCircle1 = document.querySelector('.ba-circle--1');
  const baCircle2 = document.querySelector('.ba-circle--2');
  const baCircle3 = document.querySelector('.ba-circle--3');
  const baCircleCaption = document.querySelector('.circle-caption');
  const baCircleTitle = document.querySelectorAll('.ba-title')[1];
  const baCircleMobile = document.querySelector('.circle--mobile');
  const baInfo1 = document.querySelector('.ba-info--1');
  const baInfo2 = document.querySelector('.ba-info--2');
  const baInfo3 = document.querySelector('.ba-info--3');
  const sliderBullet = document.querySelectorAll('.slider-bullet');
  const baSeparator = document.querySelectorAll('.ba-separator');

  window.addEventListener('scroll', () =>  {
    if (bulletContainer.getBoundingClientRect().y >= 0) {
      bulletStartPosition = document.documentElement.scrollTop;
    } else {
      const currentPosition = document.documentElement.scrollTop - bulletStartPosition;

      if (bulletMobScreen.matches) {
        // Mobile

        if (currentPosition >= 100 && currentPosition < 1100) {
          if (baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeTo2' 
            || baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeFrom1') {
            baCircle3.style.animation = '1s increaseSizeFrom2 0s 1 normal both';

            setTimeout(() => {
              if (baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeFrom2') {
                baCircle3.style.animation = '';
              }
            }, 1000);
          }

          // baCircleMobile.innerHTML = 'Circle Title 1 Caption 1';
          baInfo1.style.opacity = '1';
          baInfo2.style.opacity = '0';
          baInfo3.style.opacity = '0';
          

        } else if (currentPosition >= 1100 && currentPosition < 2100) {
          if (baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeTo1') {
            baCircle3.style.animation = '1s increaseSizeFrom1 0s 1 normal both';
          } else if (baCircle3.style.animation === '') {
            baCircle3.style.animation = '1s increaseSizeTo2 0s 1 normal both';
          }

          // baCircleMobile.innerHTML = 'Circle Title 2 Caption 2';
          baInfo1.style.opacity = '0';
          baInfo2.style.opacity = '1';
          baInfo3.style.opacity = '0';

        } else if (currentPosition >= 2100) {
          baCircle3.style.animation = '1s increaseSizeTo1 0s 1 normal both';
          // baCircleMobile.innerHTML = 'Circle Title 3 Caption 3';
          baInfo1.style.opacity = '0';
          baInfo2.style.opacity = '0';
          baInfo3.style.opacity = '1';
        }
      } else {
        // Desktop
  
        if (currentPosition >= 100 && currentPosition < 600) {
          if (baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeTo2' 
            || baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeFrom1') {
            baCircle3.style.animation = '1s increaseSizeFrom2 0s 1 normal both';

            setTimeout(() => {
              if (baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeFrom2') {
                baCircle3.style.animation = '';
              }
            }, 1000);
          }

          baCircleCaption.innerHTML = 'Caption 1';
          baCircleTitle.innerHTML = 'Title 1';
          baInfo1.style.opacity = '1';
          baInfo2.style.opacity = '0';
          baInfo3.style.opacity = '0';
          
          sliderBullet[0].classList.add('active');
          sliderBullet[1].classList.remove('active');
          sliderBullet[2].classList.remove('active');

          baSeparator[0].style.animation = 'separatorWidth .6s linear both';
          baSeparator[1].style.animation = 'none';
          baSeparator[2].style.animation = 'none';
        } else if (currentPosition >= 600 && currentPosition < 1200) {
          if (baCircle3.style.animation === '1s ease 0s 1 normal both running increaseSizeTo1') {
            baCircle3.style.animation = '1s increaseSizeFrom1 0s 1 normal both';
          } else if (baCircle3.style.animation === '') {
            baCircle3.style.animation = '1s increaseSizeTo2 0s 1 normal both';
          }

          baCircleCaption.innerHTML = 'Caption 2';
          baCircleTitle.innerHTML = 'Title 2';
          baInfo1.style.opacity = '0';
          baInfo2.style.opacity = '1';
          baInfo3.style.opacity = '0';

          sliderBullet[0].classList.remove('active');
          sliderBullet[1].classList.add('active');
          sliderBullet[2].classList.remove('active');

          baSeparator[0].style.animation = 'none';
          baSeparator[1].style.animation = 'separatorWidth .6s linear both';
          baSeparator[2].style.animation = 'none';
        } else if (currentPosition >= 1400) {
          baCircle3.style.animation = '1s increaseSizeTo1 0s 1 normal both';
          baCircleCaption.innerHTML = 'Caption 3';
          baCircleTitle.innerHTML = 'Title 3';
          baInfo1.style.opacity = '0';
          baInfo2.style.opacity = '0';
          baInfo3.style.opacity = '1';

          sliderBullet[0].classList.remove('active');
          sliderBullet[1].classList.remove('active');
          sliderBullet[2].classList.add('active');

          baSeparator[0].style.animation = 'none';
          baSeparator[1].style.animation = 'none';
          baSeparator[2].style.animation = 'separatorWidth .6s linear both';
        }
      }
    }
  });
