"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Animation = () => {

  // Landing Intro

  useGSAP(() => {
    // var split = new SplitText(".lp1-content-sec h1 ", { type: "words,chars" });
    // var charsa = split.chars;
    // gsap.set(".lp1-content-sec h1", { perspective: 400 });

    // gsap.from(charsa, {
    //   duration: 0.5,
    //   scale: 0,
    //   y: 80,
    //   delay: 1,
    //   rotationX: 120,
    //   transformOrigin: "0% 30% -30",
    //   ease: "power4.out",
    //   stagger: 0.01,

    // })

    // const lp1CostElementsone = document.querySelectorAll('.lp1-status');

    // lp1CostElementsone.forEach((element, index) => {
    //   gsap.from(element, {
    //     y: '50%',
    //     opacity: 0,
    //     duration: 1,
    //     delay: 1,
    //     ease: 'power2.out',
       
    //   });
    // });

 

    // const lp1StatusElements = document.querySelectorAll('.lp1-status');
    // lp1StatusElements.forEach((element, index) => {
    //   gsap.from(element, {
    //     x: '100%',
    //     opacity: 0,
    //     duration: 1.5,
    //     delay: index * 0.1,
    //     ease: 'power2.out'
    //   });
    // });

    const lp1CostElements = document.querySelectorAll('.lp1-cost-sec-div');

    lp1CostElements.forEach((element, index) => {
      gsap.from(element, {
        y: '50%',
        opacity: 0,
        duration: 1.5,
        delay: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom center',
          scrub: true
        }
      });
    });


    const lp1CostElementss = document.querySelectorAll('.lp1-cost-title');

    lp1CostElementss.forEach((element, index) => {
      gsap.from(element, {
        y: '50%',
        opacity: 0,
        duration: 1.5,
        delay: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom center',
          scrub: true
        }
      });
    });

    // project page
    var split = new SplitText(".lp2 h2 ", { type: "words,chars" });
    var charsa = split.chars;
    gsap.set(".lp2 h2", { perspective: 400 });

    gsap.from(charsa, {
      duration: 1.5,
      scale: 0,
      y: 80,
      delay: 1.5,
      rotationX: 120,
      transformOrigin: "0% 30% -30",
      ease: "power4.out",
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".lp2 h2",
        scrub: 1,
        start: "top 80%",
        end: "+=500px",

      },


    })

    gsap.from(".lp2 h2 ", {
      duration: 1.5,
      /*scale:1,*/
      y: 80,
      delay: 1.5,
      /*transformOrigin: "0% 30% -30",*/
      ease: "power4.out",
      stagger: 0.01,
      scrollTrigger: {
          trigger: ".lp2 h2",
          scrub: 1,
          start: "top 100%",
          end: "+=500px",
      }
  });

    //our coustomer
    var split = new SplitText(".animifs h2", { type: "words,chars" });
    var charsa = split.chars;

    gsap.set(".animifs h2", { perspective: 400 });

    var tl = gsap.timeline();

    tl.from(charsa, {
      duration: 1.5,
      scale: 0,
      y: 80,
      delay: 1.5,
      rotationX: 120,
      transformOrigin: "0% 30% -30",
      ease: "power4.out",
      stagger: 0.01,
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".animifs h2",
      start: "top 110%",
      end: "+=500px",
      scrub: 1,
      //  markers: true,
    });

    gsap.from(".animifs h2", {
      duration: 1.5,
      /*scale:1,*/
      y: 80,
      delay: 1.5,
      /*transformOrigin: "0% 30% -30",*/
      ease: "power4.out",
      stagger: 0.01,
      scrollTrigger: {
          trigger: ".animifs h2",
          scrub: 1,
          start: "top 100%",
          end: "+=500px",
      }
  });

    // our process
    var split = new SplitText(".animiws h2", { type: "words,chars" });
    var charsa = split.chars;

    gsap.set(".animiws h2", { perspective: 400 });

    var tl = gsap.timeline();

    tl.from(charsa, {
      duration: 1.5,
      scale: 0,
      y: 80,
      delay: 1.5,
      rotationX: 120,
      transformOrigin: "0% 30% -30",
      ease: "power4.out",
      stagger: 0.01,
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".animiws h2",
      start: "top 110%",
      end: "+=500px",
      scrub: 1,
      //  markers: true,
    });

    gsap.from(".animiws h2", {
      duration: 1.5,
      /*scale:1,*/
      y: 80,
      delay: 1.5,
      /*transformOrigin: "0% 30% -30",*/
      ease: "power4.out",
      stagger: 0.01,
      scrollTrigger: {
          trigger: ".animiws h2",
          scrub: 1,
          start: "top 100%",
          end: "+=500px",
      }
  });

    var split = new SplitText(".animiwss h2", { type: "words,chars" });
    var charsa = split.chars;

    gsap.set(".animiwss h2", { perspective: 400 });

    var tl = gsap.timeline();

    tl.from(charsa, {
      duration: 1.5,
      scale: 0,
      y: 80,
      delay: 1.5,
      rotationX: 120,
      transformOrigin: "0% 30% -30",
      ease: "power4.out",
      stagger: 0.01,
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".animiwss h2",
      start: "top 110%",
      end: "+=500px",
      scrub: 1,
      //  markers: true,
    });

    gsap.from(".animiwss h2", {
      duration: 1.5,
      /*scale:1,*/
      y: 80,
      delay: 1.5,
      /*transformOrigin: "0% 30% -30",*/
      ease: "power4.out",
      stagger: 0.01,
      scrollTrigger: {
          trigger: ".animiwss h2",
          scrub: 1,
          start: "top 100%",
          end: "+=500px",
      }
  });

    // gsap.from(".faqulss li", {
    //   duration: 0.5,
    //   x: -80,
    //   delay: 1,
    //   ease: "power4.out",
    //   stagger: 0.01,
    //   scrollTrigger: {
    //       trigger: ".faqulss li",
    //       scrub: 1,
    //       start: "top 100%",
    //       end: "+=500px",
    //   }
    // })

    const elementss = document.querySelectorAll('.faqulss li');

elementss.forEach((element, index) => {
  // Set initial position
  gsap.set(element, { x: '-30%' });

  // Create the ScrollTrigger
  ScrollTrigger.create({
    trigger: element, 
    start: "top 130%", 
    end: "+=500px", 
    animation: gsap.to(element, {
      x: '0%', 
      duration: 2, 
      ease: 'power1.inOut', 
    }),
    scrub: true, 
  });
});
gsap.from(".faqulss li", {
  duration: 1.5,
  /*scale:1,*/
  y: 80,
  delay: 1.5,
  /*transformOrigin: "0% 30% -30",*/
  ease: "power4.out",
  stagger: 0.01,
  scrollTrigger: {
      trigger: ".faqulss li",
      scrub: 1,
      start: "top 100%",
      end: "+=500px",
  }
});

    // FAQ 

    var split = new SplitText(".animiqs h2", { type: "words,chars" });
    var charsa = split.chars;

    gsap.set(".animiqs h2", { perspective: 400 });

    var tl = gsap.timeline();

    tl.from(charsa, {
      duration: 1.5,
      scale: 0,
      y: 80,
      delay: 1.5,
      rotationX: 120,
      transformOrigin: "0% 30% -30",
      ease: "power4.out",
      stagger: 0.01,
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".animiqs h2",
      start: "top 110%",
      end: "+=500px",
      scrub: 1,
      //  markers: true,
    });

    gsap.from(".animiqs h2", {
      duration: 1.5,
      /*scale:1,*/
      y: 80,
      delay: 1.5,
      /*transformOrigin: "0% 30% -30",*/
      ease: "power4.out",
      stagger: 0.01,
      scrollTrigger: {
          trigger: ".animiqs h2",
          scrub: 1,
          start: "top 100%",
          end: "+=500px",
      }
    });

    gsap.from(".faquls li", {
      duration: 1.5,
      /*scale:1,*/
      y: 80,
      delay: 1.5,
      /*transformOrigin: "0% 30% -30",*/
      ease: "power4.out",
      stagger: 0.01,
      scrollTrigger: {
          trigger: ".faquls li",
          scrub: 1,
          start: "top 100%",
          end: "+=500px",
      }
  });



  // Contraction

  var split = new SplitText(".ani h2", { type: "words,chars" });
  var charsa = split.chars;

  gsap.set(".ani h2", { perspective: 400 });

  var tl = gsap.timeline();

  tl.from(charsa, {
    duration: 1.5,
    scale: 0,
    y: 80,
    delay: 1.5,
    rotationX: 120,
    transformOrigin: "0% 30% -30",
    ease: "power4.out",
    stagger: 0.01,
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".ani h2",
    start: "top 110%",
    end: "+=500px",
    scrub: 1,
    //  markers: true,
  });

  gsap.from(".ani h2", {
    duration: 1.5,
    /*scale:1,*/
    y: 80,
    delay: 1.5,
    /*transformOrigin: "0% 30% -30",*/
    ease: "power4.out",
    stagger: 0.01,
    scrollTrigger: {
        trigger: ".ani h2",
        scrub: 1,
        start: "top 100%",
        end: "+=500px",
    }
  });

  var split = new SplitText(".animationcon h2", { type: "words,chars" });
  var charsa = split.chars;

  gsap.set(".animationcon h2", { perspective: 400 });

  var tl = gsap.timeline();

  tl.from(charsa, {
    duration: 1.5,
    scale: 0,
    y: 80,
    delay: 1.5,
    rotationX: 120,
    transformOrigin: "0% 30% -30",
    ease: "power4.out",
    stagger: 0.01,
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".animationcon h2",
    start: "top 110%",
    end: "+=500px",
    scrub: 1,
    //  markers: true,
  });

  //As soon as

  var split = new SplitText(".animis h2", { type: "words,chars" });
  var charsa = split.chars;

  gsap.set(".animis h2", { perspective: 400 });

  var tl = gsap.timeline();

  tl.from(charsa, {
    duration: 1.5,
    scale: 0,
    y: 80,
    delay: 1.5,
    rotationX: 120,
    transformOrigin: "0% 30% -30",
    ease: "power4.out",
    stagger: 0.01,
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".animis h2",
    start: "top 110%",
    end: "+=500px",
    scrub: 1,
    //  markers: true,
  });

  gsap.from(".animis h2", {
    duration: 1.5,
    /*scale:1,*/
    y: 80,
    delay: 1.5,
    /*transformOrigin: "0% 30% -30",*/
    ease: "power4.out",
    stagger: 0.01,
    scrollTrigger: {
        trigger: ".animis h2",
        scrub: 1,
        start: "top 100%",
        end: "+=500px",
    }
  });


  // Footer

  
  var split = new SplitText(".animi h2", { type: "words,chars" });
  var charsa = split.chars;

  gsap.set(".animi h2", { perspective: 400 });

  var tl = gsap.timeline();

  tl.from(charsa, {
    duration: 1.5,
    scale: 0,
    y: 80,
    delay: 1.5,
    rotationX: 120,
    transformOrigin: "0% 30% -30",
    ease: "power4.out",
    stagger: 0.01,
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".animi h2",
    start: "top 110%",
    end: "+=500px",
    scrub: 1,
    //  markers: true,
  });

  gsap.from(".animi h2", {
    duration: 1.5,
    /*scale:1,*/
    y: 80,
    delay: 1.5,
    /*transformOrigin: "0% 30% -30",*/
    ease: "power4.out",
    stagger: 0.01,
    scrollTrigger: {
        trigger: ".animi h2",
        scrub: 1,
        start: "top 100%",
        end: "+=500px",
    }
  });

//   gsap.utils.toArray('.parallax-elements').forEach(element => {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             scrub: true,
//             start: 'top 100%',
//             end: '+=500px'
//         }
//     });

//     tl.from(element, {
//         rotationX: -68, // Adjust this value to control the rotation angle on the Y axis
        
//         ease: 'none'
//     });
// });

// gsap.utils.toArray('.parallax-elementsone').forEach(element => {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             scrub: true,
//             start: 'top 100%',
//             end: '+=500px'
//         }
//     });

//     tl.from(element, {
//         rotationX:50,
//         // Adjust this value to control the rotation angle
//         ease: 'none'
//     });
// });
// gsap.utils.toArray('.parallax-elementstwo').forEach(element => {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             scrub: true,
//             start: 'top 90%',
//             end: '+=500px'
//         }
//     });

//     tl.from(element, {
//         rotationY: 40, // Adjust this value to control the rotation angle
//         ease: 'none'
//     });
// });



// Set initial position '.border-line'
// const elements = document.querySelectorAll('.border-line');

// elements.forEach((element, index) => {

//   gsap.set(element, { x: '-60%' });

  
//   ScrollTrigger.create({
//     trigger: element, 
//     start: "top 130%", 
//     end: "+=500px", 
//     animation: gsap.to(element, {
//       x: '0%', 
//       duration: 1.5, 
//       ease: 'power1.inOut', 
//     }),
//     scrub: true, 
//   });
// });






    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    // Call refreshScrollTrigger every second
    const interval = setInterval(refreshScrollTrigger, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };


  }, [])


  return (
    <>

    </>
  );
}

export default Animation;
