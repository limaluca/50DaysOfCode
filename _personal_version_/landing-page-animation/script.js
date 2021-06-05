const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// getting items by the classes or tags

tl.to(".text", { y: "0%", duration: 1, stagger: 1 }) //stagger means delaying in that duration
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1.5 }) //delay just holds a litle mmore
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.12") // the last argument is about hurrying up the element animation
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1")