$(document).ready(function () {
    if (window.innerWidth < 1200) {
        alert("Please try to open in higher resolution for better view.");
    }
    else {
        var controllerStart, currentScenePos;
        controllerStart = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 0,
                refreshInterval: 1
            }, loglevel: 3
        });
        controllerStart.scrollTo(10);
        //$('#step1active').click(function () {
        //    SceneTimeLineState1.restart();
        //    controllerStart.scrollTo(Scene1);
        //});
        //$('#step2active').click(function () {
        //    SceneTimeLineState2.restart();
        //    controllerStart.scrollTo(Scene2);
        //});
        //$('section').css('height', window.innerHeight + "px");

        $('#step3active').click(function () {
            controllerStart.scrollTo(Scene3);
        });

        $('#previousState').click(function () {
            switch(currentScenePos){
                case 1:
                    controllerStart.scrollTo(10);
                    break;
                case 2:
                    controllerStart.scrollTo(10);
                    break;
                case 3:
                    controllerStart.scrollTo(Scene2);
                    break;
            }
        });
        $('#nextState').click(function () {
            switch (currentScenePos) {
                case 1:
                    controllerStart.scrollTo(Scene2);
                    Scene2.refresh();
                    break;
                case 2:
                    controllerStart.scrollTo('#state3');
                    Scene3.refresh();
                    break;
                case 3:
                    controllerStart.scrollTo('#state3');
                    Scene3.refresh();
                    break;
            }

        });
        $('#footer').click(function () {
            window.location.href = "http://www.ajdesigning.com/mithap";
        });

        var SceneTimeLineState1 = new TimelineMax();
        var State1tween1 = TweenMax.fromTo(["#state10"], 0.5, { y: 700 }, { y: 0, ease: Elastic.easeOut.config(0.5, 1) });
        var State1tween2 = TweenMax.fromTo(["#state11"], 0.5, { y: 700 }, { y: 0, ease: Elastic.easeOut.config(0.1, 1) });
        var State1tween3 = TweenMax.fromTo(["#step1text"], 0.25, { opacity: 0, x: 400 }, { opacity: 1, x: 0 });
        var State1tween4 = TweenMax.fromTo(["#step1active"], 0.25, { opacity: 0 }, { opacity: 1 });
        var State1tween5 = TweenMax.to(["#step2text", "#step2active"], 0.10, { opacity: 0 });
        SceneTimeLineState1.add(State1tween5).add(State1tween4).add(State1tween3).add(State1tween1).add(State1tween2);

        var SceneTimeLineState2 = new TimelineMax();
        var State2tween1 = TweenMax.to(["#step1active", "#step1text", "#step3text", "#step3active"], 0.10, { opacity: 0 }, 'state1exit');
        var State2tween4 = TweenMax.to(["#state10", "#state11"], 0.25, { y: 700, opacity: 0 }, 'state1exit');
        var State2tween2 = TweenMax.fromTo(["#step2text"], 0.25, { opacity: 0, x: -400 }, { opacity: 1, x: 0 }, "activeindicators2");
        var State2tween3 = TweenMax.fromTo(["#step2active"], 0.25, { opacity: 0 }, { opacity: 1 }, "activeindicators2");
        var State2tween5 = TweenMax.fromTo(["#state20"], 0.5, { y: 700, ease: Power1.easeOut }, { y: 0 });
        var State2tween6 = TweenMax.fromTo(["#state21"], 0.5, { y: 700 }, { y: 0 });
        SceneTimeLineState2.add(State2tween1).add(State2tween4).add(State2tween3).add(State2tween2).add(State2tween5).add(State2tween6);

        var SceneTimeLineState3 = new TimelineMax();
        var State3tween1 = TweenMax.to(["#step1active", "#step1text", "#step2text", "#step2active"], 0.10, { opacity: 0 });
        var State3tween4 = TweenMax.to(["#state20", "#state21"], 0.25, { y: -700, opacity: 0 }, 'state1exit');
        var State3tween2 = TweenMax.fromTo(["#step3text"], 0.25, { opacity: 0, x: 400 }, { opacity: 1, x: 0 });
        var State3tween3 = TweenMax.fromTo(["#step3active"], 0.25, { opacity: 0 }, { opacity: 1 });
        var State3tween5 = TweenMax.fromTo(["#state30"], 0.5, { y: 700, ease: Power1.easeOut }, { y: 0 });
        var State3tween6 = TweenMax.fromTo(["#state31"], 0.5, { y: 700 }, { y: 0 });
        SceneTimeLineState3.add(State3tween1).add(State3tween4).add(State3tween2).add(State3tween3).add(State3tween5).add(State3tween6);

        //$('html').on("mousemove", function (event) {
        //    var posx = Math.round(event.pageX);
        //    var posy = Math.round(event.pageY);
        //    var perx = Math.round((posx / window.innerWidth) * 100);
        //    var pery = Math.round((posy / window.innerHeight) * 100);
        //});

        var Scene1 = new ScrollMagic.Scene({
            triggerElement: '#state1'
        }).setTween(SceneTimeLineState1)
            .setPin('#state1')
            .on('start', function () {
                currentScenePos = 1;
            })
            .update(true)
        //.addIndicators({ name: '1 No duration' })
        .addTo(controllerStart);

        var Scene2 = new ScrollMagic.Scene({
            triggerElement: '#state2'
        }).setTween(SceneTimeLineState2)
            .setPin('#state2')
            .on('start', function () {
                currentScenePos = 2;
            })
            .update(true)
        //.addIndicators({ name: '2 No duration' })
        .addTo(controllerStart);

        var Scene3 = new ScrollMagic.Scene({
            triggerElement: '#state3',
            offset: -10
        }).setTween(SceneTimeLineState3)
            .setPin('#state3')
            .on('start', function () {
                currentScenePos = 3;
            })
            .update(true)
        //.addIndicators({ name: '3 No duration' })
        .addTo(controllerStart);
    }
});