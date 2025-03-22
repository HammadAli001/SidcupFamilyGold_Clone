var cursor_blur = document.querySelector("#cursor-blur")
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.x-12+"px"
    cursor.style.top = dets.y-12+"px"
    cursor_blur.style.left = dets.x-150+"px"
    cursor_blur.style.top = dets.y-150+"px"

})



gsap.to("#nav",{
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroll:"body",
        start: "top -10%",
        scrub: 1
    }
})


gsap.to("#main",{
    backgroundColor: "#000"
    ,scrollTrigger:{
        trigger:"#main",
        scroll :"body",
        start : "top -50%",
        end : "top -100%",
        scrub: true
    }
})

////////////////THIS LITTLE SHIT IS NOT WORKING FOR SOME REASONNNN///////////////////////

// var allh4 = document.querySelectorAll("#nav h4")
// allh4.forEach(element => {
//     // console.log(element.innerHTML)
//     element.addEventListener("mouseenter",()=>{
//         cursor.style.scale = 3
//         cursor.style.border = "1px solid #fff"
//         cursor.style.backgroundColor = "trasnparent"
//     })

// });

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:50,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from("#page3 img",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#img",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:1
    }
})


