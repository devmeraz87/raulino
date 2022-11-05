window.addEventListener("load", function () {


gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector('._horizontal_scroll_container')
let sections = gsap.utils.toArray("._horizontal_scroll_container_panel");
const pageContainer = document.querySelector(".smoothScrollingWrapper");
pageContainer.setAttribute("data-scroll-container", "");

const scroller = new LocomotiveScroll({
  el: pageContainer,
  inertia: 0.8,
  smooth: true,
  getDirection: true });

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length ?
      scroller.scrollTo(value, 0, 0) :
      scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight };

    },
    pinType: pageContainer.style.transform ? "transform" : "fixed" });


let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    delay: 1,
    scrollTrigger: {
      scroller: "[data-scroll-container]",
      trigger: "._horizontal_scroll_container",
      pin: true,
      scrub: true,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: `+=${container.offsetWidth}`,
      invalidateOnRefresh: true 
    }
  });


// red section
gsap.to("._horizontal_scroll_container_first_panel_", {
  xPercent: -100,
  duration: 2,
  ease: "none",
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "._horizontal_scroll_container_panel",
    containerAnimation: scrollTween,
    delay: 3,
    scrub: true
  }
});


gsap.to("._horizontal_scroll_container_first_panel_", {
  scrollTrigger:  {
    scroller: "[data-scroll-container]",
    trigger: "._horizontal_scroll_container_first_panel_",
    end: "top top",
    scrub: true,
  }, 
  scale: 1, 
  y: 0
})

// ScrollTrigger.addEventListener("refresh", () => { 
//   scroller.update()
// });

// ScrollTrigger.refresh();


// // >> ==============================================================================================================================================================================================
// // >> ==============================================================================================================================================================================================
// // >>                                                                                  //  Home Section // 
// // >> ==============================================================================================================================================================================================
// // >> ==============================================================================================================================================================================================

// >> Reguster Plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText );



// >> =======================================================================================================================================
// >>                                                    Animate hero Section                                                              // 
// >> =======================================================================================================================================
var tl = gsap.timeline(),
  mySplitText = new SplitText("#quote", { type: "chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", { perspective: 800 });


tl.from(chars, {
  delay: 4,
  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.02
});




// >> =======================================================================================================================================
// >>                                              Animate About section                                                                   //
// >> =======================================================================================================================================
let  aboutSplitText = new SplitText("#aboutSplitText", { type: "chars" }),
  aboutSplitTextChar = aboutSplitText.chars; //an array of all the divs that wrap each character

gsap.set("#aboutSplitText", { perspective: 800 });

gsap.from(aboutSplitTextChar, {
    scrollTrigger: {
        trigger: "._about_content",
        scroller: "[data-scroll-container]",
        // markers: true,
    },

    duration: 0.5,
    opacity: 0,
    scale: 1,
    y: 2,
    rotationX: -10,
    transformOrigin: "0% 50% -50",
    ease: "Back.InOut",
    stagger: 0.01
})



// >> =======================================================================================================================================
// >>                                              Animate Marquee Section                                                                 //
// >> =======================================================================================================================================
let marqueeSplitText = new SplitText("#wrapperImgSectionSplitText", { type: "chars" }),
  marqueeSplitTextChar = marqueeSplitText.chars;

gsap.set("#wrapperImgSectionSplitText", { perspective: 800 });

gsap.from(marqueeSplitTextChar, {
  scrollTrigger: {
    trigger: "#wrapperImgSectionSplitText",
    scroller: "[data-scroll-container]",
    start: "top 70%",
    end: "+=500",
    // markers: true,
    // scrub: true
  },

  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.01
})
    


// >> =======================================================================================================================================
// >>                                                 Animate Video section                                                                //
// >> =======================================================================================================================================
let videoSectionSplitText = new SplitText("#video_section_marquee_text", { type: "chars" }),
  videoSectionSplitTextChar = videoSectionSplitText.chars;

gsap.set("#video_section_marquee_text", { perspective: 800 });

gsap.from(videoSectionSplitTextChar, {
  scrollTrigger: {
    trigger: "#video_section_marquee_text",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "+=500",
    // markers: true,
    // scrub: true
  },

  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.01
})
    


// >> =======================================================================================================================================
// >>                                                 About doctor section                                                                 //
// >> =======================================================================================================================================
let aboutDoctorSectionSplitText = new SplitText("#doctor_section_splitText", { type: "chars" }),
  aboutDoctorSectionSplitTextChar = aboutDoctorSectionSplitText.chars;

gsap.set("#doctor_section_splitText", { perspective: 800 });

gsap.from(aboutDoctorSectionSplitTextChar, {
  scrollTrigger: {
    trigger: "._section_about_doctor",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "+=800",
    // markers: true,
    // scrub: true
  },

  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.01
})

});
