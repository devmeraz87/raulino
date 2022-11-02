
// >> For loading content
const videoOverlayEase = CustomEase.create("custom", "M0,0 C0.266,0.412 0.523,0.301 0.652,0.422 0.696,0.463 0.78,1 1,1 ");

const VideoPlayerSection = document.querySelector("._video_player");
const playBtns = document.querySelectorAll("._play_button");
const videoTag = document.querySelector("._video_tag");
const cloesBtn = document.querySelector("._close_btn");

playBtns.forEach(playBtn => {
  playBtn.addEventListener("click", () => {
    const videoUrl = playBtn.getAttribute("src");

    // >> _
    VideoPlayerSection.classList.add("_active");

      gsap.to("._overlay_inner", {
        duration: 1.5,
        // height: "0%", 
        opacity: 1,
      })
  
      gsap.to("._video_player_overlay", {
        delay: 1.6,
        duration: 1.5,
        height: "0%", 
        ease: videoOverlayEase
      })

      gsap.to(cloesBtn, {
        delay: 3,
        duration: 1,
        opacity: 1
      })
  
      setTimeout(() => {
        videoTag.setAttribute("src", videoUrl)
      }, 1500);
  })
})


cloesBtn.addEventListener("click", () => {
 // >> _
 VideoPlayerSection.classList.remove("_active");


  gsap.to("._overlay_inner", {
    opacity: 0,
  })

  gsap.to("._video_player_overlay", {
    duration: .5,
    height: "100%", 
    ease: videoOverlayEase
  })
})