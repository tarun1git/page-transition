const TimeLine = gsap.timeline({default: {ease: 'power2.out'}});

TimeLine.to(".slider", {y: "-100%", duration: 1.2});
TimeLine.to(".intro .hero", {y: "0%", duration: 1.2}, "-=1");
TimeLine.fromTo(".nav", {opacity: 0}, {opacity:1, duration: 1});