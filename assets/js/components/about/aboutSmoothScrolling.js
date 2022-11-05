window.addEventListener("load", () => {

gsap.registerPlugin(ScrollTrigger, SplitText);

const pageContainer = document.querySelector(".about_smooth_scrollingWrapper");
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

    // >> Animate wrapper image
    gsap.to(".wrapper_img_card", {
        scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: ".wrapper_img_card",
            scrub: true
        },

        scale: 0.97,
        duration: 5,
        y: -100
    })


    var aboutTimeLine = gsap.timeline(),
    aboutHeroHeadingSplitText = new SplitText("#aboutHeroSplitText", { type: "chars" }),
    aoboutHeroHeadingSplitTextCharecter = aboutHeroHeadingSplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set("#aboutHeroSplitText", { perspective: 800 });
  
  
  aboutTimeLine.from(aoboutHeroHeadingSplitTextCharecter, {
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
  
  
//   gsap.set("#aboutSplitText", { perspective: 800, y: 20 });
  
  gsap.from(aboutSplitTextChar, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "._about_content",
        start: "top 80%",
        end: "+=800",
        // markers: true,
        // scrub: true
      },
  
      duration: 0.5,
      opacity: 0,
      scale: 1,
      y: 0,
      rotationX: -10,
      transformOrigin: "0% 50% -50",
      ease: "Back.InOut",
      stagger: 0.01
  })
  
  
  
  
  // >> =======================================================================================================================================
  // >>                                              Animate myDetails section                                                                  //
  // >> =======================================================================================================================================
  let  myDetailsSplitText = new SplitText("#myDetailsSplitText", { type: "chars" }),
    myDetailsSplitTextChar = myDetailsSplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set("#myDetailsSplitTextt", { perspective: 800 });
  
  gsap.from(myDetailsSplitTextChar, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "._details",
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
  // >>                                              Animate video section                                                                   //
  // >> =======================================================================================================================================
  let  aboutSectionSplitText = new SplitText("#aboutVideoSplitText", { type: "chars" }),
  aboutSectionSplitTextChar = aboutSectionSplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set("#aboutVideoSplitText", { perspective: 800 });
  
  gsap.from(aboutSectionSplitTextChar, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "._video_thumb",
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
  // >>                                              Animate Expereance section                                                                   //
  // >> =======================================================================================================================================
  let  experienceSectionSplitText = new SplitText("#experienceSectionSplitText", { type: "chars" }),
  experienceSectionSplitTextChar = experienceSectionSplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set("#experienceSectionSplitText", { perspective: 800 });
  
  gsap.from(experienceSectionSplitTextChar, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#experienceSectionSplitText",
        end: "+=500",
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
  
  
  // >> Animate Accordion
  let  experienceSectionSplitText2 = new SplitText("#experienceSectionSplitText2", { type: "chars" }),
  experienceSectionSplitTextChar2 = experienceSectionSplitText2.chars; //an array of all the divs that wrap each character
  
  gsap.set("#experienceSectionSplitText2", { perspective: 800 });
  
  gsap.from(experienceSectionSplitTextChar2, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".collapsible",
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
  // >>                                              Animate Expereance section                                                                   //
  // >> =======================================================================================================================================
  let  wrapperImgSectionSplitText = new SplitText("#wrapperImgSectionSplitText", { type: "chars" }),
  wrapperImgSectionSplitTextChar = wrapperImgSectionSplitText.chars; //an array of all the divs that wrap each character
  
  gsap.set("#wrapperImgSectionSplitText", { perspective: 800 });
  
  gsap.from(wrapperImgSectionSplitTextChar, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".wrapper_img_card_content",
        start: "top 70%",
        end: "+=1000",
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


})