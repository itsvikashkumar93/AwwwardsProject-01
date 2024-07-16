const gsapAnimation = () => {
    var tl = gsap.timeline();
    tl.to("#loader h3", {
        opacity: 1,
        duration: 0.3,
        stagger: {
            each: 0.14,
            repeat: 1,
            yoyo: true
        },
    })
        .to('#loader', {
            display: 'none'
        })

        .to(".firstH1", {
            onStart: () => {
                $(".firstH1").scramble(2000, 30, "alphabet", false);
            }
        }, 'ekSath')
        .to(".secondH1", {
            onStart: () => {
                $(".secondH1").scramble(2000, 30, "alphabet", false);
            }
        }, 'ekSath')
        .to(".firstA", {
            onStart: () => {
                $(".firstA").scramble(2000, 30, "alphabet", false);
            }
        }, 'ekSath')
        .to(".secondA", {
            onStart: () => {
                $(".secondA").scramble(2000, 30, "alphabet", false);
            }
        }, 'ekSath')


    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#one',
            pin: true,
            start: '50% 50%',
            end: '150% 50%',
            // markers: true,
            scrub: true
        }
    })

    tl2.to('.fixed-p-content', {
        scale: 0.8,
    })
        .to("#one-text", {
            top: '50%'
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#one-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#one-img", {
            backgroundSize: '50%',
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#two-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#two-img", {
            backgroundSize: '50%',
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#three-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#three-img", {
            backgroundSize: '50%',
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#four-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#four-img", {
            backgroundSize: '50%',
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#five-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#five-img", {
            backgroundSize: '50%',
        })

}

const bgChange = () => {
    document.querySelector('#one-img').addEventListener('mouseenter', () => {
        document.querySelector('html').style.backgroundColor = '#DFD2BE'
    })
    document.querySelector('#one-img').addEventListener('mouseleave', () => {
        document.querySelector('html').style.backgroundColor = '#000'
    })

    document.querySelector('#two-img').addEventListener('mouseenter', () => {
        document.querySelector('html').style.backgroundColor = '#1A354E'
    })
    document.querySelector('#two-img').addEventListener('mouseleave', () => {
        document.querySelector('html').style.backgroundColor = '#000'
    })

    document.querySelector('#three-img').addEventListener('mouseenter', () => {
        document.querySelector('html').style.backgroundColor = '#B11215'
    })
    document.querySelector('#three-img').addEventListener('mouseleave', () => {
        document.querySelector('html').style.backgroundColor = '#000'
    })

    document.querySelector('#four-img').addEventListener('mouseenter', () => {
        document.querySelector('html').style.backgroundColor = '#062529'
    })
    document.querySelector('#four-img').addEventListener('mouseleave', () => {
        document.querySelector('html').style.backgroundColor = '#000'
    })

    document.querySelector('#five-img').addEventListener('mouseenter', () => {
        document.querySelector('html').style.backgroundColor = '#B05D22'
    })
    document.querySelector('#five-img').addEventListener('mouseleave', () => {
        document.querySelector('html').style.backgroundColor = '#000'
    })

}

gsapAnimation();
bgChange()