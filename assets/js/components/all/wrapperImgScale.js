// >> Animate wrapper image
gsap.to(".wrapper_img_card", {
    scrollTrigger: {
        trigger: ".wrapper_img_card",
        scrub: true
    },

    scale: 0.97,
    duration: 5,
    y: -100
})
