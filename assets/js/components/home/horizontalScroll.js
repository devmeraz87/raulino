window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  
    const pageContainer = document.querySelector(".smoothScrollingWrapper");
    pageContainer.setAttribute("data-scroll-container", "");
  
    const scroller = new LocomotiveScroll({
      el: pageContainer,
      inertia: 0.8,
      smooth: true,
      getDirection: true,
      mobile: {
        smooth: true
      },
      tablet: {
          smooth: true
      }
    });
    
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
    
        
      // Pinning and horizontal scrolling
      let horizontalSection = document.querySelector(".horizontal-scroll");
      let pinWrap = horizontalSection.querySelector(".pin-wrap");
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;
      let scrollTween = gsap.to(pinWrap, {
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            scrub: true,
            trigger: horizontalSection,
            pin: true,
            start: "top top",
            end: () => `+=${pinWrapWidth}`,
            invalidateOnRefresh: true 
          },
          x: -horizontalScrollLength,
          ease: "none" 
      });
  
  
        //  _First figure
      gsap.to("._figure", {
          xPercent: 100,
          scale: 5,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: "._figure_2",
            containerAnimation: scrollTween,
            delay: 3,
            scrub: true
          }
      });
  
      setTimeout(() => {
          //  _First figure
          gsap.to("._figure", {
            xPercent: -110,
            scale: 5,
            duration: 2,
            ease: "none",
            scrollTrigger: {
              trigger: "._figure_2",
              containerAnimation: scrollTween,
              delay: 3,
              scrub: true
            }
          });
      }, 3000);
  
        // >> Scalse figure inner // >> impossible to scale up figure form so in do inner
      gsap.to("._figure_inner", {
          duration: 2,
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: "._figure",
            start: "top bottom", 
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true 
          },
          scale: 1,
          ease: "none",
          y: 0
      })
  
      // });
    
      /* COLOR CHANGER */
    
      // const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

      // scrollColorElems.forEach((colorSection, i) => {
      //   const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      //   const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
    
      //   ScrollTrigger.create({
      //     trigger: colorSection,
      //     scroller: "[data-scroll-container]",
      //     start: "top 50%",
      //     onEnter: () =>
      //     gsap.to("body", {
      //       backgroundColor: colorSection.dataset.bgcolor,
      //       color: colorSection.dataset.textcolor,
      //       overwrite: "auto" }),
    
      //     onLeaveBack: () =>
      //     gsap.to("body", {
      //       backgroundColor: prevBg,
      //       color: prevText,
      //       overwrite: "auto" }) });
    
    
      // });



    // >> Animate wrapper image
      
    
      gsap.to(".wrapper_img_card", {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
            trigger: ".wrapper_img_card",
            scrub: true
        },

        scale: 0.97,
        duration: 5,
      })



      // >> about Dorctor after hero
      // >> title
      const about_title  = document.querySelector("#_js_about_title_splittext");
      gsap.set(about_title, { perspective: 800 });
      const about_title_splitText = new SplitText(about_title, {type: "words, chars"});
      gsap.from(about_title_splitText.chars, {
        duration: 0.5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: about_title,
              start: "center center",
          },
          onComplete: () => {
              about_title_splitText.revert();
          }
      })


      // >> heading
      const about_heading  = document.querySelector("#_js_about_heading_splittext");
      gsap.set(about_heading, { perspective: 800 });
      const about_heading_splitText = new SplitText(about_heading, {type: "words, chars"});
      gsap.from(about_heading_splitText.chars, {
        duration: 0.5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: about_title,
              start: "center center",
          },
          onComplete: () => {
              about_heading_splitText.revert();
          }
      })


      // >> doctor name
      const about_doctor_name  = document.querySelector("#_js_about_doctor_name_splittext");
      gsap.set(about_doctor_name, { perspective: 800 });
      const about_doctor_name_splitText = new SplitText(about_doctor_name, {type: "words, chars"});
      gsap.from(about_doctor_name_splitText.chars, {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: about_title,
              start: "center center",
          },
          onComplete: () => {
             about_doctor_name_splitText.revert();
          }
      })

      // >> doctor lead
      const about_doctor_lead  = document.querySelector("#_js_about_doctor_lead_splittext");
      const about_doctor_lead_splitText = new SplitText(about_doctor_lead, {type: "words, chars"});
      gsap.from(about_doctor_lead_splitText.chars, {
        delay: 0.5,
        duration: .5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: about_title,
              start: "center center",
          },
          onComplete: () => {
             about_doctor_lead_splitText.revert();
          }
      })


      // >> wrapper card 
      // >> heading
      const wrapper_card_heading = this.document.querySelector("#_js_wrapper_img_card_heading_splittext")
      gsap.set(wrapper_card_heading, { perspective: 800 });
      const wrapper_card_heading_splitText = new SplitText(wrapper_card_heading, {type: "words, chars"});
      gsap.from(wrapper_card_heading_splitText.chars, {
        duration: .5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: "#_js_wrapper_img_card_heading_splittext",
          },
          onComplete: () => {
            wrapper_card_heading_splitText.revert();
          }
      })

      // >> lead
      const wrapper_card_lead = this.document.querySelector("#_js_wrapper_img_card_lead_splittext")
      gsap.set(wrapper_card_lead, { perspective: 800 });
      const wrapper_card_lead_splitText = new SplitText(wrapper_card_lead, {type: "words, chars"});
      gsap.from(wrapper_card_lead_splitText.chars, {
        duration: .5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: "#_js_wrapper_img_card_heading_splittext",
          },
          onComplete: () => {
            wrapper_card_heading_splitText.revert();
          }
      })


      // >> video section  /
      const video_section_heading = this.document.querySelector("#_js_video_heading_splittext");
      gsap.set(video_section_heading, { perspective: 800 });
      const video_section_heading_splittext = new SplitText(video_section_heading, {type: "words, chars"});
      gsap.from(video_section_heading_splittext.chars, {
        duration: .5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: "#_js_video_heading_splittext",
          },
          onComplete: () => {
            video_section_heading_splittext.revert();
          }
      })


      // >> my details section  /

      // >> title
      const mydetails_section_title = this.document.querySelector("#_js_mydetails_section_title_splittext");
      gsap.set(mydetails_section_title, { perspective: 800 });
      const mydetails_section_title_splittext = new SplitText(mydetails_section_title, {type: "words, chars"});
      gsap.from(mydetails_section_title_splittext.chars, {
        duration: .7,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: "#_js_mydetails_section_title_splittext",
          },
          onComplete: () => {
            mydetails_section_title_splittext.revert();
          }
      })

      
      // >> heading /
      const mydetails_section_heading = this.document.querySelector("#_js_mydetails_section_heading_splittext");
      gsap.set(mydetails_section_heading, { perspective: 800 });
      const mydetails_section_heading_splittext = new SplitText(mydetails_section_heading, {type: "words, chars"});
      gsap.from(mydetails_section_heading_splittext.chars, {
        delay: 0.6,
        duration: .7,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: "#_js_mydetails_section_title_splittext",
          },
          onComplete: () => {
            mydetails_section_heading_splittext.revert();
          }
      })


      // >> counters /
      const mydetails_section_counters = this.document.querySelector("#_js_mydetails_section_counters_splittext");
      gsap.set(mydetails_section_counters, { perspective: 800 });
      const mydetails_section_counters_splittext = new SplitText(mydetails_section_counters, {type: "words, chars"});
      gsap.from(mydetails_section_counters_splittext.chars, {
        delay: 0.7,
        duration: .5,
        opacity: 0,
        scale: 1,
        y: 2,
        rotationX: -10,
        transformOrigin: "0% 50% -50",
        ease: "Back.InOut",
        stagger: 0.01,
          scrollTrigger: {
              scroller: "[data-scroll-container]",
              trigger: "#_js_mydetails_section_title_splittext",
          },
          onComplete: () => {
            mydetails_section_counters_splittext.revert();
            console.log("complete");
          }
      })


        // >> Refresh scroll trigger
        // ScrollTrigger.addEventListener("refresh", () => { 
        //  scroller.update()
        // });
      
        // ScrollTrigger.refresh();  

});
    
  

  
window.addEventListener("load", () => {
  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  

  if(window.mobileCheck() === true) {
    document.querySelector(".pin-spacer").classList.add("hidden")
  }

  if(window.mobileCheck() === false) {
    document.querySelector("._horizontal_section_vertical").classList.add("hidden");
  }
  
})