
// >> For loading content
const videoOverlayEase = CustomEase.create("custom", "M0,0 C0.266,0.412 0.523,0.301 0.652,0.422 0.696,0.463 0.78,1 1,1 ");

const playBtn = document.querySelector("._play_btn");
const videoTag = document.querySelector("._video_tag");

playBtn.addEventListener("click", () => {
  const videoUrl = playBtn.getAttribute("src");
    gsap.to("._overlay_inner", {
      duration: 1.5,
      // height: "0%", 
      opacity: 1,
    })

    gsap.to("._video_player_overlay", {
      delay: 1.5,
      duration: 1.5,
      height: "0%", 
      opacity: 1,
      ease: videoOverlayEase
    })

    setTimeout(() => {
      videoTag.setAttribute("src", videoUrl)
    }, 1500);
})