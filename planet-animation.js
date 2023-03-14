const planet = document.querySelector('.planet');
  const dot1 = document.querySelector('.dot--1');
  const dot2 = document.querySelector('.dot--2');
  const ouText1 = document.querySelector('.text--1');
  const ouText2 = document.querySelector('.text--2');
  const ouTitle = document.querySelectorAll('.text__title');
  const blackouts = document.querySelectorAll('.ou-blackout');
  const mobScreen = window.matchMedia("(max-width: 767px)");

  const ouTitleFirstWord1 = 'Custom';
  const ouTitleFirstWord2 = 'Custom';
  const ouTitleRestWords1 = `<span>Title 1</span>`;
  const ouTitleRestWords2 = `<span>Title 2</span>`;
  const ouTitleResult1 = `${ouTitleFirstWord1} ${ouTitleRestWords1}`;
  const ouTitleResult2 = `${ouTitleFirstWord2} ${ouTitleRestWords2}`;

  if (mobScreen.matches) {
    ouTitle[0].innerHTML = ouTitleRestWords1;
    ouTitle[1].innerHTML = ouTitleRestWords2;

  } else {
    ouTitle[0].innerHTML = ouTitleResult1;
    ouTitle[1].innerHTML = ouTitleResult2;
  }
  
  window.onscroll = () => {
    if (mobScreen.matches) {
      // Mobile

      planet.style.transform = `rotate(${document.documentElement.scrollTop / 5}deg)`;

      if (document.documentElement.scrollTop >= 300 && document.documentElement.scrollTop < 1200) {

        dot1.style.opacity = '1';
        ouText1.style.opacity = '1';
        blackouts[0].style.opacity = '1';

        dot2.style.opacity = '0';
        ouText2.style.opacity = '0';
        blackouts[1].style.opacity = '0';

      } else if (document.documentElement.scrollTop >= 1200 && document.documentElement.scrollTop < 2100) {

        dot1.style.opacity = '0';
        ouText1.style.opacity = '0';
        blackouts[0].style.opacity = '0';

        dot2.style.opacity = '1';
        ouText2.style.opacity = '1';
        blackouts[1].style.opacity = '1';
      }
    } else {
      // Desktop

      if (document.documentElement.scrollTop >= 300 && document.documentElement.scrollTop < 900) {
        planet.style.animation = '1s planet-rotate-1 0s 1 normal both';

        setTimeout(() => {
          dot1.style.opacity = '1';
          ouText1.style.opacity = '1';
          blackouts[0].style.opacity = '1';

          dot2.style.opacity = '0';
          ouText2.style.opacity = '0';
          blackouts[1].style.opacity = '0';
        }, 500);
      } else if (document.documentElement.scrollTop >= 900 && document.documentElement.scrollTop < 1500) {
        planet.style.animation = '1s planet-rotate-2 0s 1 normal both';

        setTimeout(() => {
          dot1.style.opacity = '0';
          ouText1.style.opacity = '0';
          blackouts[0].style.opacity = '0';

          dot2.style.opacity = '1';
          ouText2.style.opacity = '1';
          blackouts[1].style.opacity = '1';
        }, 500);
      }
    }
  }
