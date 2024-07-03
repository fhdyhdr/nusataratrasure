gsap.registerPlugin(ScrollTrigger);

// Banner Big Image
gsap.to("#bannerBigimg", {
  duration: 2,
  // y: 1200,
  yPercent: 150,
  ease: "power2.inOut",
  yoyo: true,
  repeat: 1,
  repeatRefresh: true
});

// Banner Big Text
gsap.to("#headingBig", {
  duration: 1.5,
  scale: 1.7,
  delay: 0.8,
  transformOrigin: "top left",
  ease: "power2.inOut",
  yoyo: true,
  repeat: 1,
  repeatRefresh: true
});


// Banner Design Text
gsap.to("#headingSmall", {
  delay: 1.2,
  opacity: 0
});
gsap.to("#headingSmall", {
  delay: 2,
  left: "-100vw"
});
gsap.to("#headingSmall", {
  delay: 3.6,
  duration: 1.8,
  left: 0,
  opacity: 1
});

// Banner Small Text
gsap.to("#headingText", {
  delay: 1.2,
  opacity: 0
});
gsap.to("#headingText", {
  delay: 2,
  left: "-100vw"
});
gsap.to("#headingText", {
  delay: 3.6,
  duration: 1.8,
  left: 0,
  opacity: 1
});



gsap.to("#headingButton", {
  delay: 1.2,
  opacity: 0
});
gsap.to("#headingButton", {
  delay: 2,
  left: "-100vw"
});
gsap.to("#headingButton", {
  delay: 3.6,
  duration: 1.8,
  left: 0,
  opacity: 1
});
// Company Section - Title
gsap.set(".company-section .title, #compDescription", {
  opacity: 0,
  y: -200
});
gsap.to(".company-section .title, #compDescription", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".company-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Company section - Image
gsap.set(".compy-box", {
  opacity: 0,
  scale: 0
});
gsap.to(".compy-box", {
  duration: 1.6,
  delay: 0.1,
  opacity: 1,
  scale: 1,
  transformOrigin: "top right",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".company-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Designers section - Title
gsap.set(".designer-section .title, #designDescription", {
  y: -200,
  opacity: 0
});
gsap.to(".designer-section .title, #designDescription", {
  duration: 1.6,
  y: 0,
  opacity: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Designer section - white border
gsap.set(".box-border", {
  opacity: 0,
  scale: 0.6,
  rotate: 15
});
gsap.to(".box-border", {
  duration: 1.5,
  opacity: 1,
  scale: 1,
  rotate: 0,
  ease: "power.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Designer section - Image - left
gsap.set(".team1, .team3", {
  opacity: 0,
  rotate: 45,
  scale: 0.5
});
gsap.to(".team1, .team3", {
  duration: 1.6,
  delay: 0.2,
  opacity: 1,
  rotate: 0,
  scale: 1,
  ease: "power2.inOut",
  transformOrigin: "top",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});
// right
gsap.set(".team2", {
  opacity: 0,
  rotate: -45,
  scale: 0.5
});
gsap.to(".team2", {
  duration: 1.6,
  delay: 0.2,
  opacity: 1,
  rotate: 0,
  scale: 1,
  ease: "power2.inOut",
  transformOrigin: "top",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Projects section - Title
gsap.set(".projects-section .title", {
  y: -200,
  opacity: 0
});
gsap.to(".projects-section .title", {
  duration: 1.6,
  y: 0,
  opacity: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Projects section - Left
gsap.set(".pbox-left", {
  opacity: 0,
  x: -800
});
gsap.to(".pbox-left", {
  duration: 1.6,
  x: 0,
  opacity: 1,
  scale: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Projecr section - Right
gsap.set(".pbox-right", {
  x: 500
});
gsap.to(".pbox-right", {
  duration: 1.6,
  x: 0,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    marker: false
  }
});

// Project section - content section
gsap.set(".project-content", {
  x: -200,
  y: -200,
  opacity: 0
});
gsap.to(".project-content", {
  duration: 1.6,
  x: 0,
  y: 0,
  opacity: 1,
  delay: 0.2,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Testimonial section - Title
gsap.set(".testimonial-section .title", {
  y: -200,
  opacity: 0
});
gsap.to(".testimonial-section .title", {
  duration: 1.6,
  y: 0,
  opacity: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Testimonial section - Left Content
gsap.set(".left-row", {
  opacity: 0,
  xPercent: -100
});
gsap.to(".left-row", {
  duration: 1.6,
  opacity: 1,
  xPercent: 0,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Testimonial section - Right Content
gsap.set(".right-row", {
  opacity: 0,
  xPercent: 100
});
gsap.to(".right-row", {
  duration: 1.6,
  opacity: 1,
  xPercent: 0,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Contact section - Box & Border
gsap.set(".contact-box, .contact-border", {
  opacity: 0,
  scale: 0
});
gsap.to(".contact-box, .contact-border", {
  duration: 1.6,
  opacity: 1,
  scale: 1,
  transformOrigin: "top right",
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".contact-us",
    start: "top center",
    end: "bottom",
    markers: false
  }
});



const tl = gsap.timeline({repeat:-1})
.set('svg', {opacity:1})
.fromTo('#m image', {x:-400, scaleX:0.5, attr:{href:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAADIAgMAAABjd/t7AAAADFBMVEX///8MDAxhYWGxsbHv8xTCAAAEvklEQVR4Ae3YBWwbVxzH8Re/olEwFEOZyWlIRTGM/+ecXaX4InkZMzOT8Hm1M96eKydlDix2mVvRtWO+VOGobIcm2Rcxw/sNHPD/CT/6Hp+Zzp+Jd/H8DJQbpB4OS9KrrypM/m4oRAPfa9Z91SyTX+TCocREZejVS6r7l+UX7ZvM9MDYWr26a3Ug386b6trOtfgNzXokjzPfD82X1ns6hWa9pjD5SLT19aUJ0qvzcOa3/GKp6HINr5ZSrx46159fWGFPoLOG9OrMKAyeip3zXqgxNesfZwrzQvjchB+Ebj3mzOnbAiO9gjTrtzqzPBm/XKv064Vj3k+1WSIiTDuj5BlFutunOtPftfeknRCE0ZdcTHe0T8lq1hc5c8bFzpZ0eU6zvnh0Ud7S0tucEpp1XrjDsqXbR2bYpFkf78xM6vWcukqkVx83qsffq76a0t3uzhQmH7bbtiRjmnWfo7MzBr+UVKRZ7x/dBavTr6sXTc36ZWcRzBoPZyOa20t+cxbZ19uNWJtm3dXtLLyvnN+Yq/9es55xcN44M32SNLdzR+dsSfq0G6YHNsdbhi3NOnP0wJJP9gdO7TExOnP3tPqaBwTD/FT8vnIo/C1KDyQe76z9MMYwm95tJTo+Go5i0v3tue/qLzeQdrgqf5k/e2jOzodTKH1kZOBgLCExW34Jb6vi8uEkRudVbNfP4chVjM62/eYnMyRB+uXGk9RgE0hnjbwmGwG1B1xdmZ6PCNbua4w+CdO9LhWlEKx9yUMHCXXM83nz+s+K+1F6hg8P07OE0tnl16lOgPTO/nndcTOK0dmhHF8YJQLp/MTDLClR+sL37NYkrL1zcM/2coHSl8xtYZ17Ufqsio8u24TSPdlmY6xA6X7r0CbcUceCw3sNmM6DkUNSonRv7yeHLILpvlzTZJzuktubYDqvX131oUTpvs/rTnMF0zvjj3gkbss3ryollM5+bOiyOmD6vPqd55UJ0y/+jHu2CfQblmHDdCYTdQr2bSHru1EH2/L+ysZDkmBb3h8fTMF0/yuJMK6dZ9oFUH9kirBhuneJ7MTpnJuXgfouuvN7nN5kbsLpLlp9Kg7TM/Ll0iDwbWJ16hpOb96zOozTB7Y2NkiUzk7TxrmTYfoSetzCtZ9SK7IwnTcPRYWCtXelIkQwfT6tTuH0g9JQEqYHiK7i2v0mNeH0EjIJ2E6mwOluM2oImO6LSboK0yuJCNc+JUkGwXQ7aYRw7aVk2Lj2xbZhSlz7ZEEmTB9rUYRg+kSiVRKni0Q1Tq+0DOD5HjTihNMnmwqpK6ReISmO0ysVAdvdbyLvsONyEtg+1kTqEwUBdU4Kqj8I1NmWE8h2uVcBdUUSqDdtRe73jo+Q7UPNFrB9+GsJ1H+UBNRvDiP18/Q/1qMCqBORCdNdoga45f21BNUV8kpLZOJ09j0RUP8Bqk8nAdT7JLI9SUj9e4XU58SRuvUSUp/yogDqC6BvUrebSL1cQHWF1MdGoe1QvTSO1IMCqU+Enu8lhNT5EFJ3pf6/W/4gtN2F3e9PQnVC6j7r/3vM+0ykHrShehNSryCkXiqhWx7a7lZI/Sj2eZ6QugXVv4fqhNQ5QC+2F/WiXtSLV5uiXjzq/st6Uf8bLmU4mJ352AMAAAAASUVORK5CYII='}}, {duration:1, scaleX:1.2, x:0, ease:'steps(9)', stagger:2}, 0)
.to('text', {duration:3, transformOrigin:'50%', scale:1.1, rotate:0.1, ease:'none'}, 0)

window.onpointerup = ()=> tl.play(0)


document.getElementById('headingButton').addEventListener('click', function() {
  document.getElementById('shopSection').scrollIntoView({ behavior: 'smooth' });
});
