// >> For loading content
const secondEase = CustomEase.create("custom", "M0,0 C0.266,0.412 0.523,0.301 0.652,0.422 0.696,0.463 0.78,1 1,1 ");

(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
        var prog = id("progress"),
        starter = id("starter"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      starter.innerHTML = "Eduardo";
      prog.style.width = perc;
      if(c===tot) return doneLoading();
    }
      function doneLoading(){
        setTimeout(function(){ 
            // >> remove loader
            gsap.to("#_first_loading", {duration: 1.5, delay: 1, ease: secondEase, height: "0%"});
            gsap.to("#_second_loading", {duration: 1.5,   delay: 3, ease: secondEase, height: "0%"});

            // >> Animate hero text
            // >> Home split text start / 
            // >> Title
            const hero_title = document.querySelector("#_js_hero_title_splittext")
            gsap.set(hero_title, { perspective: 800 });
            const hero_title_splitText = new SplitText(hero_title, {type: "words, chars"});
            gsap.from(hero_title_splitText.chars, {
                delay: 5,
                duration: 0.5,
                opacity: 0,
                scale: 1,
                y: 10,
                rotationX: -10,
                transformOrigin: "0% 50% -50",
                ease: "Back.InOut",
                stagger: 0.02,
                onComplete: () => {
                    hero_title_splitText.revert();
                }
            })

            // >> hero heading //
            const hero_heading  = document.querySelector("#_js_hero_heading_splittext");
            gsap.set(hero_heading, { perspective: 800 });
            const hero_hading_splitText = new SplitText(hero_heading, {type: "words, chars"});
            gsap.from(hero_hading_splitText.chars, {
                delay: 5,
                duration: 0.5,
                opacity: 0,
                scale: 1,
                y: 10,
                rotationX: -10,
                transformOrigin: "0% 50% -50",
                ease: "Back.InOut",
                stagger: 0.02,
                onComplete: () => {
                    hero_hading_splitText.revert();
                }
            })

            // >> hero lead //
            const hero_lead  = document.querySelector("#_js_hero_lead_splittext");
            gsap.set(hero_lead, { perspective: 800 });
            const hero_lead_splitText = new SplitText(hero_lead, {type: "words, chars"});
            gsap.from(hero_lead_splitText.chars, {
                delay: 5,
                duration: 0.5,
                opacity: 0,
                scale: 1,
                y: 10,
                rotationX: -10,
                transformOrigin: "0% 50% -50",
                ease: "Back.InOut",
                stagger: 0.02,
                onComplete: () => {
                    hero_lead_splitText.revert();
                }
            })


            const hero_btn = this.document.querySelector("#_js_hero_btn");
            gsap.from(hero_btn, {
                delay: 5.5,
                duration: 1,
                opacity: 0, 
                y: 100,
                ease: "Back.InOut",
            })

            const hero_circle = this.document.querySelector("#_js_hero_circle");
            gsap.from(hero_circle, {
                delay: 5.5,
                duration: 1,
                opacity: 0, 
                y: 100,
                ease: "Back.InOut",
            })

        }, 500);
      }

      // >> Get Images
      for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
      }    
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());


  