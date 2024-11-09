//Images Crousel For Home
function Crousel() {
  const images1 = document.querySelectorAll(".p1 img");
  let currIndex1 = 0;
  const totalImages1 = images1.length;
  const duration1 = 4.5;

  function CrouselStart1() {
    gsap.to(images1[currIndex1], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        currIndex1 = (currIndex1 + 1) % totalImages1;
        gsap.to(images1[currIndex1], {
          opacity: 1,
          duration1: 0.5,
        });
      },
    });
    gsap.delayedCall(duration1,CrouselStart1);
  }
  images1.forEach((img,index) => {
    img.style.position='absolute'
    img.style.top='0'
    img.style.left='0'
    img.style.opacity=index===0?1:0
    
  });
  CrouselStart1()
}
Crousel()

//Images Crousel For Home
function Crousel2() {
  const images1 = document.querySelectorAll(".p2 img");
  let currIndex1 = 0;
  const totalImages1 = images1.length;
  const duration1 = 8.2;

  function CrouselStart2() {
    gsap.to(images1[currIndex1], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        currIndex1 = (currIndex1 + 1) % totalImages1;
        gsap.to(images1[currIndex1], {
          opacity: 1,
          duration1: 0.5,
        });
      },
    });
    gsap.delayedCall(duration1,CrouselStart2);
  }
  images1.forEach((img,index) => {
    img.style.position='absolute'
    img.style.top='0'
    img.style.left='0'
    img.style.opacity=index===0?1:0
    
  });
  CrouselStart2()
}
Crousel2()

function Crousel3() {
  const images1 = document.querySelectorAll(".p3 img");
  let currIndex1 = 0;
  const totalImages1 = images1.length;
  const duration1 = 7.9;

  function CrouselStart3() {
    gsap.to(images1[currIndex1], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        currIndex1 = (currIndex1 + 1) % totalImages1;
        gsap.to(images1[currIndex1], {
          opacity: 1,
          duration1: 0.5,
        });
      },
    });
    gsap.delayedCall(duration1,CrouselStart3);
  }
  images1.forEach((img,index) => {
    img.style.position='absolute'
    img.style.top='0'
    img.style.left='0'
    img.style.opacity=index===0?1:0
    
  });
  CrouselStart3()
}
Crousel3()

//LeftMenu
function LeftMenuToggle() {
  let t1 = gsap.timeline();
  const openNav = document.querySelector(".search-icon");
  const closeNav = document.querySelector(".hide-icon");
  const mainLeft = document.querySelector(".main-left");

  openNav.addEventListener("click", () => {
    gsap.to(openNav, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        openNav.style.display = "none";
      },
    });
    t1.to(mainLeft, {
      left: "0%",
      duration: 0.5,
    });
  });

  closeNav.addEventListener("click", () => {
    t1.to(mainLeft, {
      duration: 0.5,
      left: "-24.5%",
      onComplete: () => {
        openNav.style.display = "";
      },
    });
    gsap.to(openNav, {
      opacity: 1,
      duration: 0.5,
    });
  });
}
LeftMenuToggle();
