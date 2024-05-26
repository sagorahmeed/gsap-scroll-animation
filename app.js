document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray(".jl-column-content.jl-image");
  const titleContainers = gsap.utils.toArray(".jl-column.left .jl-column-content");
  const heading1 = document.querySelector('.scroll-main-header-wrapper');

  ScrollTrigger.create({
    trigger: ".jl-column-wrapper",
    start: "top top",
    end: "+=" + (images.length - 1) * 100 + "%",
    pin: ".jl-column.jl-right",
    markers: false
  });

  titleContainers.forEach((title, i) => {
    ScrollTrigger.create({
      trigger: title,
      start: "top 80%",
      end: "top 60%",
      markers: true,
      id: i + 1,
      onEnter: () => {
        if (i) {
          gsap.to(heading1, {
            y: 0, // Move to initial position
            opacity: 1, // Make visible
            ease: "power1.inOut",
            overwrite: true
          });
          gsap.to(images, {
            yPercent: -100 * i,
            ease: "power1.inOut",
            overwrite: true
          });
        }
      },
      onEnterBack: () => {
        if (i) {
          
          gsap.to(heading1, {
            y: -100, // Move out of view
            opacity: 0, // Make invisible
            ease: "power1.inOut",
            overwrite: true
          });
          gsap.to(images, {
            yPercent: -100 * (i - 1),
            ease: "power1.inOut",
            overwrite: true
          });
        }
        if (i === 1) {
          gsap.to(heading1, {
            y: 0, // Move to initial position
            opacity: 1, // Make visible
            ease: "power1.inOut",
            overwrite: true
          });
        }
      }
    });
  });
});




// document.addEventListener("DOMContentLoaded", () => {

//   gsap.registerPlugin(ScrollTrigger);
  
//   const images = gsap.utils.toArray(".jl-column-content.jl-image");
//   const titleContainers = gsap.utils.toArray(".jl-column.left .jl-column-content");
//   const heading1 = document.querySelector('.scroll-main-header-wrapper');
  
//   ScrollTrigger.create({
//     trigger: ".jl-column-wrapper",
//     start: "top top",
//     end: "+=" + (images.length - 1) * 100 + "%",
//     pin: ".jl-column.jl-right",
//     markers: false
//   });
  
//   titleContainers.forEach((title, i) => {
//     ScrollTrigger.create({
//       trigger: title,
//       start: "top 80%",
//       end: "top 60%",
//       markers:false,
//       id: i + 1,
//       onEnter: () => {
//         if (i) {
//          gsap.to(heading1, {
//             y: 0, // Move to initial position
//             opacity: 1, // Make visible
//             ease: "power1.inOut",
//             overwrite: true
//           });
//           gsap.to(images, {
//             yPercent: -100 * i,
//             ease: "power1.inOut",
//             overwrite: true
//           });
//         }
//       },
//       onEnterBack: () => {
//         if (i) {
//          gsap.to(heading1, {
//             y: -100, // Move out of view
//             opacity: 0, // Make invisible
//             ease: "power1.inOut",
//             overwrite: true
//           });
//           gsap.to(images, {
//             yPercent: -100 * (i - 1),
//             ease: "power1.inOut",
//             overwrite: true
//           });
//         }
//       }
//     });
//   });
//   });