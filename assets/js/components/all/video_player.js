// >> For loading content
const videoOverlayEase = CustomEase.create("custom", "M0,0 C0.266,0.412 0.523,0.301 0.652,0.422 0.696,0.463 0.78,1 1,1 ");

const VideoPlayerSection = document.querySelector("._video_player");
const playBtns = document.querySelectorAll("._js_play_button");
const videoTag = document.querySelector("._video_tag");
const cloesBtn = document.querySelector("._close_btn");

playBtns.forEach(playBtn => {
  playBtn.addEventListener("click", () => {

    // >> _
    VideoPlayerSection.classList.add("_active");

      gsap.to("._overlay_inner", {
        duration: 1.5,
        opacity: 1,
      })

      setTimeout(() => {
        videoTag.play();
      }, 1000);

      gsap.to("._video_player_video", {
        delay: 1.6,
        duration: 1, 
        opacity: 1,
      })
  
      gsap.to("._video_player_overlay", {
        delay: 2,
        duration: 1.1,
        height: "0%", 
        ease: videoOverlayEase
      })

      gsap.to(cloesBtn, {
        delay: 3,
        duration: 1,
        opacity: 1
      })
  })
})


cloesBtn.addEventListener("click", () => {
 // >> _
 VideoPlayerSection.classList.remove("_active");

  gsap.to("._overlay_inner", {
    duration: 1,
    opacity: 0,
  })

  gsap.to("._video_player_video", {
    duration: 1, 
    opacity: 0,
  })

  gsap.to("._video_player_overlay", {
    delay: 1,
    height: "100%", 
  })

  gsap.to(cloesBtn, {
    duration: 1,
    opacity: 0
  })

  setTimeout(() => {
    videoTag.pause();
  }, 1000);
})