window.onload = function () {
    'use strict';
    function showTime() {
        var date = new Date(),
            h = date.getHours(), // 0 - 23
            m = date.getMinutes(), // 0 - 59
            s = date.getSeconds(), // 0 - 59
            greeting = document.getElementById('greeting'),
            sunBox = document.getElementById('sun-box'),
            body = document.getElementsByTagName('body'),
            tl1 = new TimelineMax();
        
        if (h >= 0) {
            greeting.innerHTML = 'Goedenacht';
            tl1.set(body, {backgroundColor: "rgb(0,0,0)"});
        }
        
        if (h >= 6) {
            greeting.innerHTML = 'Goedemorgen';
            tl1.set(body, {backgroundColor: "rgb(197, 126, 168)"});
        }
        
        if (h >= 12) {
            greeting.innerHTML = 'Goedemiddag';
            tl1.set(body, {backgroundColor: "rgb(107, 166, 249)"});
        }
        
        if (h >= 18) {
            greeting.innerHTML = 'Goedenavond';
            tl1.set(body, {backgroundColor: 'rgb(20, 80, 163)'});
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        document.getElementsByClassName("hours")[0].innerText = h;
        document.getElementsByClassName("hours").textContent = h;
        document.getElementsByClassName("minutes")[0].innerText = m;
        document.getElementsByClassName("minutes").textContent = m;
        document.getElementsByClassName("seconds")[0].innerText = s;
        document.getElementsByClassName("seconds").textContent = s;

        setTimeout(showTime, 1000);
    
    }

    showTime();

    
    var sunBox = document.getElementById('sun-box'),
        tl1 = new TimelineMax();
    
    tl1.to(sunBox, 40, {
        ease: Power0.easeNone,
        rotation: 180,
        repeat: -1
    }, 1);
    
    var tl = new TimelineLite({onUpdate: updateSlider});
    tl.set("#countdown", {visibility: "visible"})
        .from("h1", 0.5, {bottom: 100, autoAlpha : 0, delay: 0.25})
    
        .staggerFrom("#clockdiv >div", 0.5, {scale: 0, rotation: -180, autoAlpha: 0}, 0.2, "stagger");
		
    function updateSlider() {
        $("#slider").slider("value", tl.progress() * 100);
    }
};