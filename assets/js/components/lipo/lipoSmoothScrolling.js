window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger, SplitText);
    
    const pageContainer = document.querySelector(".lipo_smooth_scrollingWrapper");
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

      // ScrollTrigger.addEventListener("refresh", () => { 
      //   scroller.update()
      // });

      // ScrollTrigger.refresh();
    

    

      
      // >> Lipo split text start / 

      // // >> hero title
      // const hero_title = document.querySelector("#_js_hero_title_splittext")
      // gsap.set(hero_title, { perspective: 800 });
      // const hero_title_splitText = new SplitText(hero_title, {type: "words, chars"});
      // gsap.from(hero_title_splitText.chars, {
      //   delay: 1.5,
      //   duration: 1,
      //   opacity: 0,
      //   scale: 1,
      //   y: 2,
      //   rotationX: -10,
      //   transformOrigin: "0% 50% -50",
      //   ease: "Back.InOut",
      //   stagger: 0.01,
      //   onComplete: () => {
      //       hero_title_splitText.revert();
      //   }
      // })

      // // >> hero heading //
      // const hero_heading  = document.querySelector("#_js_hero_heading_splittext");
      // gsap.set(hero_heading, { perspective: 800 });
      // const hero_hading_splitText = new SplitText(hero_heading, {type: "words, chars"});
      // gsap.from(hero_hading_splitText.chars, {
      //   delay: 1.5,
      //   duration: 1,
      //   opacity: 0,
      //   scale: 1,
      //   y: 2,
      //   rotationX: -10,
      //   transformOrigin: "0% 50% -50",
      //   ease: "Back.InOut",
      //   stagger: 0.01,
      //   onComplete: () => {
      //       hero_hading_splitText.revert();
      //     }
      // })

      // // >> hero lead //
      // const hero_lead  = document.querySelector("#_js_hero_lead_splittext");
      // gsap.set(hero_lead, { perspective: 800 });
      // const hero_lead_splitText = new SplitText(hero_lead, {type: "words, chars"});
      // gsap.from(hero_lead_splitText.chars, {
      //   delay: 0.5,
      //   delay: 1.5,
      //   duration: 1,
      //   opacity: 0,
      //   scale: 1,
      //   y: 2,
      //   rotationX: -10,
      //   transformOrigin: "0% 50% -50",
      //   ease: "Back.InOut",
      //   stagger: 0.01,
      //   onComplete: () => {
      //       hero_lead_splitText.revert();
      //   }
      // })
      

      // const hero_btn = this.document.querySelector("#_js_hero_btn");
      // gsap.from(hero_btn, {
      //   delay: 1,
      //   duration: 1,
      //   opacity: 0, 
      //   y: 100,
      //   ease: "Back.InOut",
      // })

      // const hero_circle = this.document.querySelector("#_js_hero_circle");
      // gsap.from(hero_circle, {
      //   delay: 1,
      //   duration: 1,
      //   opacity: 0, 
      //   y: 100,
      //   ease: "Back.InOut",
      // })
    
      // >> ultra hd start 
      
      // >> ultra hd title 0
      const ultrahd_title = document.querySelector("#ultra_hd_title")
      gsap.set(ultrahd_title, { perspective: 800 });
      const ultra_hd_title_splitText = new SplitText(ultrahd_title, {type: "words, chars"});
      gsap.from(ultra_hd_title_splitText.chars, {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#ultra_hd_title",
          scroller: "[data-scroll-container]"
        },
        onComplete: () => {
          ultra_hd_title_splitText.revert();
        }
      });

      // >> ultra hd heading 1
      const ultrahd_heading = document.querySelector("#ultra_hd_heading")
      gsap.set(ultrahd_heading, { perspective: 800 });
      const ultra_hd_heading_splitText = new SplitText(ultrahd_heading, {type: "words, chars"});
      gsap.from(ultra_hd_heading_splitText.chars, {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#ultra_hd_heading",
          scroller: "[data-scroll-container]"
        },
        onComplete: () => {
          ultra_hd_heading_splitText.revert();
        }
      });

      // >> ultra hd heading 2
      const ultrahd_heading_2 = document.querySelector("#ultra_hd_heading_2")
      gsap.set(ultrahd_heading_2, { perspective: 800 });
      const ultra_hd_heading_2_splitText = new SplitText(ultrahd_heading_2, {type: "words, chars"});
      gsap.from(ultra_hd_heading_2_splitText.chars, {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#ultra_hd_heading_2",
          scroller: "[data-scroll-container]"
        },
        onComplete: () => {
          ultra_hd_heading_2_splitText.revert();
        }
      });
      

      // >> ultra hd title 1
      const ultrahd_details_title_1 = document.querySelector("#ultra_hd_title_1")
      gsap.set(ultrahd_details_title_1, { perspective: 800 });
      const ultra_hd_details_title_1_splitText = new SplitText(ultrahd_details_title_1, {type: "words, chars"});
      gsap.from(ultra_hd_details_title_1_splitText.chars, {
        delay: 0.5,
        duration: 0.7,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#ultra_hd_heading",
          scroller: "[data-scroll-container]"
        },
        onComplete: () => {
          ultra_hd_details_title_1_splitText.revert();
        }
      });


      // >> ultra hd title 2
      const ultrahd_details_title_2 = document.querySelector("#ultra_hd_title_2")
      gsap.set(ultrahd_details_title_2, { perspective: 800 });
      const ultra_hd_details_title_2_splitText = new SplitText(ultrahd_details_title_2, {type: "words, chars"});
      gsap.from(ultra_hd_details_title_2_splitText.chars, {
        delay: 0.5,
        duration: .7,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#ultra_hd_title_1",
          scroller: "[data-scroll-container]"
        },
        onComplete: () => {
          ultra_hd_details_title_2_splitText.revert();
        }
      });
      

        // >> ultra hd 
        const lipoCarosuel_title = document.querySelector("#lipoCarosuel_title")
        gsap.set(lipoCarosuel_title, { perspective: 800 });
        const lipoCarosuel_title_splitText = new SplitText(lipoCarosuel_title, {type: "words, chars"});
        gsap.from(lipoCarosuel_title_splitText.chars, {
          delay: 0.5,
          duration: .7,
          opacity: 0,
          scale: 1,
          y: 2,
          rotationX: -10,
          transformOrigin: "0% 50% -50",
          ease: "Back.InOut",
          stagger: 0.01,
          scrollTrigger: {
            trigger: "#lipoCarosuel_title",
            scroller: "[data-scroll-container]"
          },
          onComplete: () => {
            lipoCarosuel_title_splitText.revert();
          }
        });

        // >> ultra hd 
        const lipoCarosuel_heading = document.querySelector("#lipoCarosuel_heading")
        gsap.set(lipoCarosuel_heading, { perspective: 800 });
        const lipoCarosuel_heading_splitText = new SplitText(lipoCarosuel_heading, {type: "words, chars"});
        gsap.from(lipoCarosuel_heading_splitText.chars, {
          delay: 0.5,
          duration: .7,
          opacity: 0,
          scale: 1,
          y: 2,
          rotationX: -10,
          transformOrigin: "0% 50% -50",
          ease: "Back.InOut",
          stagger: 0.01,
          scrollTrigger: {
            trigger: "#lipoCarosuel_title",
            scroller: "[data-scroll-container]"
          },
          onComplete: () => {
            lipoCarosuel_heading_splitText.revert();
          }
        });
           

      
})


