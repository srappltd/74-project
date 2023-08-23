var tl = gsap.timeline();
tl.from("#page1",{
    scale:0,
    opacity:0,
    duration:1
}).from("#nav",{
    scale:0,
    duration:1
}).from(".page1-bottom h2",{
    scale:0,
    // duration:1
}).from(".page1-bottom h1",{
    scale:0,
    // duration:1
})

gsap.from("#page2",{
    y:"100px",
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroll:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 75%",
        scrub:true
    }
})
document.querySelectorAll("p,h1,h3,h4,h5,input,svg,span").forEach(elem=>{
    gsap.from(elem,{
        scrollTrigger:{
            trigger:elem,
            scroll:"#main",
            start:"top 100%",
            end:"top 70%",
            scrub:true
        },
        opacity:0,
        y:50
    })
})