

function smoothScrolling(){


    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth:true,
  lerp:0.03,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



}
smoothScrolling()




function CursorImage(){
    var scroll1 = document.querySelector(".main")
    var cursor = document.querySelector("#cursor")

scroll1 .addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1.3,
        ease: "elastic.out(1,0.3)",
        scrub:true,
    })
 })


//  var page1 = document.querySelector("#main")


//  page1.addEventListener("mouseenter",function(){
//     cursor.innerHTML = "view"
//     gsap.to(cursor,{
//         scale:4,
//     })
//  })

//  page1.addEventListener("mouseleave",function(){
//      cursor.innerHTML = ""
//     gsap.to(cursor,{
//         scale:1
//     })
//  })
 
}
CursorImage()






function page2HorizontalScrolling(){


    gsap.to("#page2",{
        color:"white",
        background: "rgb(7,3,9)",
        // background:"radial-gradient(circle, rgba(7,3,9,1) 10%, rgba(56,23,207,1) 200%, rgba(4,3,1,1) 500%)",
        opacity:0.3,
        transform:"translateX(-370%)",
        scrollTrigger:{
            trigger:"#page2",
            scroller:".main",
            // markers:true,
            start:"top  0%",
            end:"top -380%",
            scrub:1.8,
            pin:true,
            
        }
    },"animet")
    
        gsap.to("body",{
            background: "rgb(0,0,0)",
        },"animet")
        gsap.from(".imgae-con img",{
            y:30,
            opacity:0,
            duration:1.4,
            transform: "rotate(5deg)",
        })
        gsap.from(".heading h3",{
            y:160,
            opacity:0,
            stagger:0.5,
            duration:1.4,
        })


}
page2HorizontalScrolling()






function navSection(){

    var navOpen = document.querySelector("#nav i")
    var navClose = document.querySelector("#full i")
   
       var tl = gsap.timeline()
   
   
       tl.to("#full",{
           right:0,
           duration:0.3,
       })
       tl.from("#full h4",{
           x:150,
           duration:0.3,
           stagger:0.16,
           opacity:0
       })
       tl.from("#full i",{
           opacity:0
       })
   
   tl.pause()
   
   
   navOpen.addEventListener("click",function(){
       tl.play()
   })
   
   navClose.addEventListener("click",function(){
       tl.reverse()
   })

}

navSection()





function pageColorChange(){
    var main = document.querySelector("#main")

    gsap.to(main,{
        backgroundColor:"#0B1B1B",
        scrollTrigger:{
            trigger:("#main"),
            scroller:".main",
            // markers:true,
            start:"top 0%",
            end:"top -80%",
            scrub:2,
    
        }
    
    })
}
pageColorChange

/* locomotivejs cdn */
/* locomotivejs cdn */



// hero text transition page4 
// hero text transition page4 



// page3 image and overaly animation and scrolling effects code is here in this function
// page3 image and overaly animation and scrolling effects code is here in this function



function ImageAndOverlAnimation(){

    var picture = document.querySelector("#page3 img")
    var overlay = document.querySelector("#overlay")
    var backpage = document.querySelector("#page3")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -145%",
        scrub:2,
        pin:true,
    }
})

tl3.from(picture,{
    y:160,
    opacity:0,
},"anime1")
tl3.to(overlay,{
    backdropFilter:"blur(0px)",
},"anime1")
tl3.to(backpage,{
    background: "rgb(27,20,27)",
    // background: "radial-gradient(circle, rgba(27,20,27,1) 2%, rgba(0,0,0,1) 58%, rgba(136,47,126,1) 100%)",
},"anime1")


}
ImageAndOverlAnimation()


// herotext text is created here u can also chage code as par your requierd!
// herotext text is created here u can also chage code as par your requierd!


function herotext(){

    // var tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".page4",
    //         scroller: "body",
    //         markers:true,
    //         start: "top 50%",
    //         end: "top 0",
    //         scrub:1,
    //     }
    // })
    

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4",
            scroller: ".main",
            // markers:true,
            start: "top 0%",
            end: "top -200%",
            scrub:2,
            // pin:true,
        }
    },)

    tl2.from(".page4 h1", {
        x: -600,
        y:-600,
        opacity:0,
    }, "anim")
    tl2.from(".page4 h2", {
        x:600,
        y:600,
        opacity:0,
    }, "anim")
    
}



herotext()



// page4 scroolionh background color change code is here gsap
// page4 scroolionh background color change code is here gsap

function page4BackGroundeCOLORChange(){
    var page4BackColor = document.querySelector("#page4")


gsap.to(page4BackColor,{
    // backgroundColor:"#red",
    color:"white",
    background: "rgb(49,18,2)",
    background: "linear-gradient(90deg, rgba(49,18,2,1) 100%, rgba(244,244,244,0.9988328094909839) 100%, rgba(0,0,0,1) 250%)",
    // background: "rgb(7,3,9)",
    // background:" radial-gradient(circle, rgba(7,3,9,1) 53%, rgba(56,23,207,1) 100%, rgba(4,3,1,1) 200%)",
    scrollTrigger:{
        trigger:page4BackColor,
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -220%",
        scrub:2,
        pin:true,
    }
})
}
page4BackGroundeCOLORChange()







function model1Animation(){


    var modelAni = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller:".main",
            // markers:true,
            start: "top 0%",
            end: "top -320%",
            scrub:1.8,
            pin:true,
        }
    })
    
    
    modelAni.to("#imgea-satatue", {
        width: "40%",
        // transform:"rotate(0deg)",
        // transform:"translate3d(0px, 0px, 0px) rotate(7.4021deg)",
    },"start")
    modelAni.from("#page5-first",{
        x:-700,
        // transform: "rotate(0deg)",
    },"start")
    modelAni.from("#page5-second",{
        x:700,
        // transform: "rotate(0deg)",
    },"start")
    modelAni.to("#page5-first",{
        color:"white"
    },"start")
    modelAni.to("#page5-second",{
        color:"white"
    },"start")
    modelAni.from("#imgea-satatue",{
        mixBlendMode:"lighten",
        opacity:0.1,
        transform: "rotate(40deg)",
        scale:1,
    },"start")
}

model1Animation()



function locoAnimationImages(){
    var locoIMg  = gsap.timeline({
        scrollTrigger:{
            trigger:"#page6",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top -230%",
            scrub:2,
        }
    })
    
    
    locoIMg.from("#loco-img-1",{
        opacity:100,
    },"ones")
    locoIMg.from("#loco-img-2",{
        opacity:100,
    },"ones")
    locoIMg.from("#loco-img-3",{
        opacity:100,
    },"ones")
    locoIMg.from("#loco-img-4",{
        opacity:100,
    },"ones")
    locoIMg.to("#page6",{
        backgroundColor:"white",
    },"ones")
    locoIMg.to("#inrto",{
        color:"white",
    },"ones")
    













}

locoAnimationImages()

