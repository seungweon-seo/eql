const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const animatedLogo = document.querySelector(
  '.sc-header .group-logo .logo .logo-full .logo-top'
);
const rollImgs = document.querySelectorAll(
  '.sc-header .group-images .img-roll img'
);
let loadedCount = 0;

gsap.set('.sc-header .group-images .img-roll', { scale: 1.3, opacity: 0.4 });
gsap.set('.sc-header .container.roll .letter', { yPercent: 120, opacity: 0 });
gsap.set('.sc-header .desc', { y: 40 });

rollImgs.forEach((img) => {
  if (img.complete) {
    loadedCount++;
  } else {
    img.addEventListener('load', () => {
      loadedCount++;
      if (loadedCount === rollImgs.length) {
        imgLoaded();
      }
    });
  }
});

if (loadedCount === rollImgs.length) {
  imgLoaded();
}

function imgLoaded() {
  animatedLogo.addEventListener('animationend', () => {
    const headerTl = gsap.timeline();

    headerTl
      .set(
        '.sc-header .group-images',
        {
          animationPlayState: 'running',
        },
        'l+=.25'
      )

      .to(
        '.sc-header .group-logo .logo .logo-full',
        0,
        { opacity: 0, ease: 'none' },
        'm'
      )
      .to(
        '.sc-header .group-images .mask-bg',
        0,
        { opacity: 1, ease: 'none' },
        'm'
      )

      .to(
        '.sc-header .group-images .img-roll .filter',
        0,
        { opacity: 1 },
        'n+=.5'
      )
      .to(
        '.sc-header .group-images .img-roll',
        { duration: 2, opacity: 1 },
        'n+=.5'
      )
      .to(
        '.sc-header .group-images .img-roll',
        { duration: 2.5, scale: 1 },
        'n+=.5'
      )
      .to(
        '.sc-header .container.roll .letter',
        {
          yPercent: 0,
          opacity: 1,
          stagger: {
            each: 0.1,
          },
        },
        'n+=.5'
      )

      .to(
        '.sc-header .group-images .img-roll img:first-child',
        {
          duration: 0.5,
          visibility: 'visible',
          onComplete: () => {
            gsap.set('.sc-header .group-images .img-roll img:first-child', {
              visibility: 'hidden',
            });
          },
        },
        'n+=.5'
      )

      .to(
        '.sc-header .group-images .img-roll img:not(:first-child)',
        {
          visibility: 'visible',
          stagger: {
            each: 0.1,
            onComplete: () => {
              gsap.set(
                '.sc-header .group-images .img-roll img:not(:first-child)',
                {
                  visibility: 'hidden',
                }
              );
            },
          },
        },
        'n+=1'
      )

      .to(
        '.sc-header .bg',
        {
          opacity: 1,
        },
        'n+=1'
      )

      .to(
        '.sc-header .group-images .img',
        {
          visibility: 'visible',
        },
        'o-=.3'
      )

      .to('.sc-header .group-images', { height: '80%' }, 'p')
      .to('.sc-header .container.roll .letter', 1, { opacity: 0 }, 'p+=.2')
      .to('.sc-header .container', 1, { opacity: 1 }, 'p+=.2')
      .to('.sc-header .desc', 1, { y: 0 }, 'p+=.2')
      .to('.sc-header .desc', 1, { y: 0 }, 'p+=.2')
      .to('.header .logo', { visibility: 'visible' }, 'p+=.2')
      .to(
        '.header .ani a svg .logo-top',
        {
          duration: 1.25,
          animationPlayState: 'running',
        },
        'p+=.4'
      )
      .to(
        '.header .ani a svg .logo-bottom',
        {
          duration: 1.25,
          animationPlayState: 'running',
          onComplete: function () {
            $('.header .logo').removeClass('ani');

            $('.header .logo').hover(function () {
              $('.header .logo').addClass('draw');
            });

            $('.header .logo').on('animationend', function () {
              $(this).removeClass('draw');
            });
          },
        },
        'p+=.4'
      )
      .to(
        '.header .btn-area .btn-shop',
        { animationPlayState: 'running' },
        'p+=.4'
      )
      .to(
        '.header .btn-area .btn-contact',
        { animationPlayState: 'running' },
        'p+=.4'
      );
  });
}

// const introTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.group-introduce',
//     start: '0% 70%',
//     end: '100% 100%',
//     scrub: 0,
//   },
// });

// gsap.set('.group-introduce .grid-shape .grid-rect', {
//   transformOrigin: '0% 100%',
// });
// gsap.set('.group-introduce .box5 .text .line span', { yPercent: 100 });
// gsap.set('.group-introduce .box1 .title span', { yPercent: 100 });
// gsap.set('.group-introduce .box2 .text .line span', { yPercent: 100 });
// gsap.set('.group-introduce .box3 .title span', { yPercent: 100 });
// gsap.set('.group-introduce .box4 .text span', { yPercent: 100 });
// gsap.set('.sc-introduce .group-introduce .sticky-introduce .bg .img2 img', {
//   scale: 1.2,
//   opacity: 0,
// });
// gsap.set('.group-introduce .box6 .title span', { yPercent: 100 });
// gsap.set('.group-introduce .title-blue .title span', { yPercent: 100 });
// gsap.set('.group-introduce .title-beige .title span', { yPercent: 120 });

// introTl
//   .to(
//     '.sc-introduce .group-introduce .sticky-introduce .bg .img1',
//     4,
//     { opacity: 1 },
//     'a'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(1)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'a'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(2)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'a+=0.4'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(3)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'a+=0.8'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(5)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'a+=1.2'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(6)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'a+=1.6'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(8)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'a+=2'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(11)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'a+=2.4'
//   )

//   .to(
//     '.group-introduce .box1 .title span:first-child',
//     1,
//     { yPercent: 0 },
//     'a+=4'
//   )
//   .to(
//     '.group-introduce .box1 .title span:nth-child(2)',
//     1.5,
//     { yPercent: 0 },
//     'a+=4'
//   )

//   .to(
//     '.group-introduce .box1 .title span:first-child',
//     1,
//     { yPercent: -100 },
//     'b'
//   )
//   .to(
//     '.group-introduce .box1 .title span:nth-child(2)',
//     1.5,
//     { yPercent: -100 },
//     'b'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(4)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'b'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(9)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'b+=0.2'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(1)',
//     3,
//     { scaleY: 1, ease: 'power1.inOut' },
//     'b+=0.4'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(8)',
//     3,
//     { scaleY: 1, ease: 'power1.inOut' },
//     'b+=0.6'
//   )

//   .to(
//     '.group-introduce .box2 .text .line span',
//     1,
//     {
//       yPercent: 0,
//       stagger: {
//         each: 0.3,
//       },
//     },
//     'b+=2'
//   )
//   .to('.group-introduce .box3 .title span', 1, { yPercent: 0 }, 'b+=2.5')
//   .to('.group-introduce .box4 .text span', 1, { yPercent: 0 }, 'b+=3')

//   .to(
//     '.group-introduce .box2 .text .line span',
//     1,
//     {
//       yPercent: -100,
//       stagger: {
//         each: 0.3,
//       },
//     },
//     'c'
//   )
//   .to('.group-introduce .box3 .title span', 1, { yPercent: -100 }, 'c')
//   .to('.group-introduce .box4 .text span', 1.5, { yPercent: -100 }, 'c')
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(2)',
//     3,
//     { scaleY: 1, ease: 'power1.inOut' },
//     'c'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(8)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'c+=.2'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(9)',
//     3,
//     { scaleY: 1, ease: 'power1.inOut' },
//     'c+=.4'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(10)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'c+=.6'
//   )
//   .to(
//     '.sc-introduce .group-introduce .sticky-introduce .bg .img1',
//     4,
//     { opacity: 0 },
//     'c+=1.5'
//   )
//   .to(
//     '.sc-introduce .group-introduce .sticky-introduce .bg .video',
//     4,
//     { opacity: 1 },
//     'c+=1.5'
//   )
//   .to(
//     '.group-introduce .box5 .text .line span',
//     1,
//     {
//       yPercent: 0,
//       stagger: {
//         each: 0.1,
//       },
//     },
//     'c+=2'
//   )

//   .to(
//     '.group-introduce .box5 .text .line span',
//     1,
//     {
//       yPercent: -100,
//       stagger: {
//         each: 0.1,
//       },
//     },
//     'd'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(1)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'd'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(2)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'd+=.2'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(7)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'd+=.4'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(12)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'd+=.6'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect:nth-child(9)',
//     3,
//     { scaleY: 0, ease: 'power1.inOut' },
//     'd+=.8'
//   )

//   .to(
//     '.sc-introduce .group-introduce .sticky-introduce .bg .video',
//     3,
//     { opacity: 0 },
//     'd+=2.5'
//   )
//   .to(
//     '.sc-introduce .group-introduce .sticky-introduce .bg .img2 img',
//     3,
//     { scale: 1, opacity: 1 },
//     'd+=2.5'
//   )
//   .to(
//     '.sc-introduce .group-introduce .sticky-introduce .bg-invert',
//     3,
//     { opacity: 1 },
//     'd+=3'
//   )
//   .to(
//     '.group-introduce .box6 .title span',
//     1,
//     {
//       yPercent: 0,
//       stagger: {
//         each: 0.1,
//       },
//     },
//     'd+=4'
//   )

//   .to(
//     '.group-introduce .box6 .title span',
//     1,
//     {
//       yPercent: -100,
//       stagger: {
//         each: 0.1,
//       },
//     },
//     'e'
//   )
//   .to(
//     '.group-introduce .grid-shape .grid-rect',
//     3,
//     {
//       scaleY: 1,
//       ease: 'power1.inOut',
//       stagger: {
//         from: 'end',
//         each: 0.2,
//       },
//     },
//     'e'
//   )
//   .to(
//     '.group-introduce .title-blue .title span',
//     2,
//     {
//       yPercent: 0,
//       stagger: {
//         each: 0.2,
//       },
//     },
//     'e+=5'
//   )

//   .to(
//     '.group-introduce .title-blue .title span',
//     2,
//     {
//       yPercent: -120,
//       stagger: {
//         each: 0.2,
//       },
//     },
//     'f'
//   )
//   .to(
//     '.sc-introduce .group-introduce .sticky-introduce .bg-white',
//     4,
//     { opacity: 1 },
//     'f+=1'
//   )
//   .to(
//     '.group-introduce .title-beige .title span',
//     2,
//     {
//       yPercent: 0,
//       stagger: {
//         each: 0.2,
//       },
//     },
//     'f+=4'
//   );

// gsap.set('.sc-contents .group-contents img', { yPercent: -10 });
// gsap.set('.sc-contents .group-contents .title', { yPercent: 20 });
// gsap.set('.sc-contents .group-contents .title2', { yPercent: 20 });

// contentsTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.sc-contents',
//     start: '0% 100%',
//     end: '130% 100%',
//     // markers:true,
//     scrub: 0,
//   },
// });

// contentsTl
//   .to('.sc-contents .group-contents svg', { rotation: 120 }, 'g')
//   .to(
//     '.sc-contents .group-contents img',
//     { yPercent: 15, ease: 'power1.inOut' },
//     'g'
//   )
//   .to(
//     '.sc-contents .group-contents .title2',
//     { yPercent: -80, ease: 'power1.inOut' },
//     'g'
//   )
//   .to(
//     '.sc-contents .group-contents .title',
//     { yPercent: -80, ease: 'power1.inOut' },
//     'g'
//   );

// gsap.to('.sc-contents .group-letter .letter-area', {
//   scrollTrigger: {
//     trigger: '.sc-contents .group-letter',
//     start: '0% 100%',
//     end: '100% 0%',
//     scrub: 0,
//   },
//   yPercent: 20,
// });

// gsap.set('.sc-contents .group-contents h2 .line span', { yPercent: 120 });
// gsap.set('.sc-contents .group-contents .title2 .line span', { yPercent: 120 });

// ScrollTrigger.create({
//   trigger: '.sc-contents .group-contents h2',
//   start: '0% 90%',
//   onEnter: function () {
//     gsap.to('.sc-contents .group-contents h2 .line span', 1, {
//       yPercent: 0,
//       stagger: {
//         each: 0.1,
//       },
//     });
//   },
// });

// ScrollTrigger.create({
//   trigger: '.sc-contents .group-contents .title2',
//   start: '0% 100%',
//   onEnter: function () {
//     gsap.to('.sc-contents .group-contents .title2 .line span', 1, {
//       yPercent: 0,
//       stagger: {
//         each: 0.1,
//       },
//     });
//   },
// });

// $('.sc-contents .group-letter').mousemove(function (e) {
//   const windowWidth = $(window).width();
//   const mouseX = e.pageX;

//   const centerX = windowWidth / 2;
//   const maxSpan = 15;
//   const spanElements = $(
//     '.sc-contents .group-letter .letter-area .letter-wrap span'
//   );

//   spanElements.each(function (index, element) {
//     const spanCenterX = centerX + (index - maxSpan / 2) * (centerX / maxSpan);
//     const value = 300 + (Math.abs(spanCenterX - mouseX) / centerX) * 500;
//     $(element).css({ fontWeight: value.toFixed(3) });
//   });
// });

// gsap.to(
//   '.sc-saltypebble .group-saltypebble .text-area',
//   {
//     scrollTrigger: {
//       trigger: '.sc-saltypebble',
//       start: '0% 100%',
//       end: '100% 100%',
//       scrub: 0,
//     },
//     y: 253.25,
//   },
//   'h'
// );

// gsap.set('.sc-saltypebble .group-saltypebble .squares g', { y: 0 });
// gsap.set('.sc-saltypebble .group-saltypebble .squares rect', { scaleY: 0 });

// saltypebbleTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.sc-saltypebble',
//     start: '0% 100%',
//     end: '100% 0%',
//     // markers:true,
//     scrub: 0,
//   },
// });

// saltypebbleTl
//   .to('.sc-saltypebble .group-saltypebble .squares', 10, { y: 253.25 }, 'h')
//   .to(
//     '.sc-saltypebble .group-saltypebble .squares g:nth-child(2n)',
//     10,
//     { y: -101.3 },
//     'h'
//   )
//   .to(
//     '.sc-saltypebble .group-saltypebble .squares g:nth-child(2n+1)',
//     10,
//     { y: 101.3 },
//     'h'
//   );
// // .to('.sc-saltypebble .group-saltypebble .squares rect',1,{scaleY:1},'h+=1.5')

// gsap.set('.sc-saltypebble .group-saltypebble .squares rect', { scaleY: 0 });

// ScrollTrigger.create({
//   trigger: '.sc-saltypebble .group-saltypebble .squares',
//   start: '0% 80%',
//   onEnter: function () {
//     gsap.to('.sc-saltypebble .group-saltypebble .squares rect', 1, {
//       scaleY: 1,
//     });
//   },
//   onLeaveBack: function () {
//     gsap.to('.sc-saltypebble .group-saltypebble .squares rect', 1, {
//       scaleY: 0,
//     });
//   },
// });

// gsap.set('.sc-video .group-video .shapes rect', { scaleX: 0 });

// videoTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.sc-video',
//     start: '0% 60%',
//     end: '100% 30%',
//     // markers:true,
//     scrub: 0,
//   },
// });

// videoTl
//   .to('.sc-video .group-video .shapes rect', {
//     scaleX: 1,
//     stagger: {
//       each: 0.2,
//     },
//     ease: 'power1.inOut',
//   })
//   .set('.sc-video .group-video .shapes rect', { transformOrigin: '100% 0%' })
//   .to('.sc-video .group-video .shapes rect', {
//     scaleX: 0,
//     stagger: {
//       each: 0.2,
//     },
//     ease: 'power1.inOut',
//   });

// gsap.set('.sc-honsby .group-right .bg', {
//   scaleY: 0,
//   transformOrigin: '100% 0%',
// });
// gsap.set('.sc-honsby .group-right .video1 img', { scale: 1.1, opacity: 0 });
// gsap.set('.sc-honsby .group-left .left-area h2 .line span', { yPercent: 120 });

// ScrollTrigger.create({
//   trigger: '.sc-honsby',
//   start: '0% 60%',
//   onEnter: function () {
//     gsap.to(
//       '.sc-honsby .group-right .bg',
//       1.5,
//       {
//         scaleY: 1,
//         ease: 'power1.inOut',
//       },
//       'g'
//     );
//     gsap.to(
//       '.sc-honsby .group-right .video1 img',
//       1.5,
//       {
//         scale: 1,
//         opacity: 1,
//         ease: 'power1.inOut',
//       },
//       'g+=0.1'
//     );
//     gsap.to(
//       '.sc-honsby .group-left .left-area h2 .line span',
//       1.5,
//       {
//         yPercent: 0,
//         ease: 'power1.inOut',
//         stagger: {
//           each: 0.1,
//         },
//       },
//       'g'
//     );
//   },
// });
// gsap.set('.sc-honsby .group-left .left-area .video2 video', { y: '-6vw' });

// gsap.to('.sc-honsby .group-left .left-area .video2 video', {
//   scrollTrigger: {
//     trigger: '.sc-honsby',
//     start: '0% 100%',
//     end: '100% 0%',
//     // markers:true,
//     scrub: 0,
//   },
//   y: '6vw',
//   ease: 'power1.inOut',
// });

// gsap.set('.sc-hunter .group-hunter .video1 .overlay', {
//   scaleX: 1,
//   transformOrigin: '100% 0%',
// });
// gsap.set('.sc-hunter .group-hunter h2 span', { opacity: 0 });

// titleArr = $('.sc-hunter .group-hunter h2 span').toArray();

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// shuffleArray(titleArr);

// ScrollTrigger.create({
//   trigger: '.sc-hunter',
//   start: '0% 50%',
//   // markers:true,
//   onEnter: function () {
//     gsap.to('.sc-hunter .group-hunter .video1 .overlay', 1.3, {
//       scaleX: 0,
//       ease: 'power1.inOut',
//     });
//     titleArr.forEach(function (el, i) {
//       gsap.to(el, {
//         opacity: 1,
//         duration: 1,
//         delay: i * 0.12,
//       });
//     });
//   },
// });

// ScrollTrigger.create({
//   trigger: '.sc-collage',
//   start: '0% 100%',
//   end: '100% 0%',
//   toggleClass: { targets: '.letter-spin, .line-box .line', className: 'on' },
// });

// gsap.set('.sc-collage .group-collage .img1 img', { yPercent: -10 });
// gsap.set('.sc-collage .group-collage .img2 img', { yPercent: 0 });
// gsap.set('.sc-collage .group-collage .img3 img', { yPercent: 5 });

// collageTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.sc-collage',
//     start: '0% 100%',
//     end: '100% 0%',
//     // markers:true,
//     scrub: 0,
//   },
// });

// collageTl
//   .to(
//     '.sc-collage .group-collage .img1 img',
//     { yPercent: 10, ease: 'power1.inOut' },
//     'i'
//   )
//   .to(
//     '.sc-collage .group-collage .img2 img',
//     { yPercent: -20, ease: 'power1.inOut' },
//     'i'
//   )
//   .to(
//     '.sc-collage .group-collage .img3 img',
//     { yPercent: -15, ease: 'power1.inOut' },
//     'i'
//   );

// minumsaArr = $('.sc-minumsa .group-text .text-area .char').toArray();

// shuffleArray(minumsaArr);

// gsap.set('.sc-minumsa .group-text .text-area .char', { opacity: 0 });
// gsap.set('.sc-minumsa .group-text .text-area .line', { width: 0 });

// const lineElements = document.querySelectorAll(
//   '.sc-minumsa .group-text .text-area .line'
// );

// ScrollTrigger.create({
//   trigger: '.sc-minumsa',
//   start: '0% 20%',
//   onEnter: function () {
//     minumsaArr.forEach(function (el, i) {
//       gsap.to(el, {
//         opacity: 1,
//         duration: 1,
//         delay: i * 0.04,
//       });
//     });
//     lineElements.forEach((element, index) => {
//       const dataWidth = element.getAttribute('data-width');
//       gsap.to(element, {
//         width: dataWidth,
//         duration: 0.5,
//         delay: 1.5 + index * 0.6,
//       });
//     });
//   },
// });

// $('.sc-brand .group-brand .brand-list .brand-item').hover(
//   function () {
//     $(this).addClass('on');
//   },
//   function () {
//     setTimeout(() => {
//       $(this).removeClass('on');
//     }, 500);
//   }
// );

// gsap.set('.sc-openyy .shape-move rect', { scaleX: 0 });

// const containerHeight = $(this).height();
// const shapeRect = document.querySelectorAll('.shape-rect');
// let shapeY = null;

// shapeRect.forEach((el, index) => {
//   el.setAttribute('height', containerHeight / 2);
//   if (index % 2 === 1) {
//     shapeY = containerHeight / 2;
//     el.setAttribute('y', shapeY);
//   }
// });

// ScrollTrigger.create({
//   trigger: '.sc-openyy',
//   start: '0% 80%',
//   // markers:true,
//   onEnter: function () {
//     openyyTl = gsap.timeline({});
//     openyyTl
//       .to(
//         '.sc-openyy .shape-move rect',
//         1,
//         {
//           scaleX: 1,
//           ease: 'power1.inOut',
//           stagger: {
//             each: 0.04,
//           },
//         },
//         'j'
//       )
//       .to('.sc-openyy .shape-move', 1, { opacity: 0 }, 'j+=2.6')
//       .eventCallback('onComplete', function () {
//         $('.sc-openyy').mousemove(function (e) {
//           const mouseY = e.offsetY;
//           // const containerHeight = $(this).height();
//           const mouseY2 = containerHeight - e.offsetY;

//           gsap.to('.sc-openyy .shape-move .shape-rect', {
//             width: 'random(1,90)',
//             x: 'random(-90,90)',
//             duration: 0.1,
//           });

//           gsap.to('.sc-openyy .shape-move .shape-rect:nth-child(odd)', {
//             height: mouseY,
//             duration: 0,
//           });
//           gsap.to('.sc-openyy .shape-move .shape-rect:nth-child(even)', {
//             height: mouseY2,
//             y: mouseY - shapeY,
//             duration: 0,
//           });
//         });
//         var timeout;
//         $('.sc-openyy').on('mousemove', function (event) {
//           if (timeout !== undefined) {
//             window.clearTimeout(timeout);
//             // $('.sc-openyy').removeClass('hide')
//             gsap.to('.sc-openyy .shape-move', {
//               opacity: 1,
//             });
//           }
//           timeout = window.setTimeout(function () {
//             $(event.target).trigger('mousemoveend');
//             gsap.to('.sc-openyy .shape-move', 1, {
//               opacity: 0,
//             });
//             // $('.sc-openyy').addClass('hide');
//           }, 500);
//         });
//       });
//   },
// });

// ScrollTrigger.create({
//   trigger: '.sc-shop',
//   start: '0% 0%',
//   onEnter: function () {
//     $('.header .btn-area .btn-basket').addClass('on');
//   },
//   onLeaveBack: function () {
//     $('.header .btn-area .btn-basket').removeClass('on');
//   },
//   // markers: true
// });

// footerTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.footer',
//     start: '0% 100%',
//     end: '132% 100%',
//     // markers:true,
//     scrub: 0,
//     onLeave: function () {
//       gsap.to('.footer .container .group-logo .letter', {
//         // x: 100,
//         repeat: 0,
//         stagger: {
//           each: 0.1,
//           onComplete() {
//             // 현재 대상 요소에 클래스 추가
//             this.targets()[0].classList.add('rotate');
//             setTimeout(() => {
//               this.targets()[0].classList.remove('rotate');
//             }, 1000);
//           },

//           //   onReverseComplete() {
//           //     // 애니메이션을 되감을 때 클래스 제거
//           //     this.targets()[0].classList.remove("rotate");
//           //   }
//         },
//       });
//     },
//   },
// });

// $('.footer .container .group-logo svg .letter').hover(
//   function () {
//     $(this).addClass('rotate');
//   },
//   function () {
//     setTimeout(() => {
//       $(this).removeClass('rotate');
//     }, 500);
//   }
// );

// gsap.set('.footer .container .group-logo', { y: '2vw' });
// gsap.set('.footer .container .group-copy', { y: '2vw' });
// gsap.set('.footer .container .group-bottom', { y: '-8vw' });
// footerTl
//   .from('.footer', { yPercent: -33.33, ease: 'power1.inOut' }, 'k')
//   .to('.footer .container .fade', { opacity: 1, ease: 'power1.inOut' }, 'k')
//   .to('.footer .container .group-logo', { y: 0, ease: 'power1.inOut' }, 'k')
//   .to('.footer .container .group-copy', { y: 0, ease: 'power1.inOut' }, 'k')
//   .to('.footer .container .group-bottom', { y: 0, ease: 'power1.inOut' }, 'k');
