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
    trigger: "._horizontal_scroll_container_panel",
    containerAnimation: scrollTween,
    delay: 3,
    scrub: true
  }
});


gsap.to("._horizontal_scroll_container_first_panel_", {
  scrollTrigger:  {
    trigger: "._horizontal_scroll_container_first_panel_",
    end: "top top",
    scrub: true,
  }, 
  scale: 1, 
  y: 0
})

ScrollTrigger.addEventListener("refresh", () => { 
  scroller.update()
});

ScrollTrigger.refresh();