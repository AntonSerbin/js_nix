function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}

function start(obj,startLeft,startTop,k=1, k2 = 1) {
    let height = field.clientHeight - obj.clientHeight;
    let width = 100;

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function (progress) {
            obj.style.top = (startTop+ height * progress*k) + 'px'
        }
    });

    animate({
        duration: 2000,
        timing: makeEaseOut(quad),
        draw: function (progress) {
            obj.style.left = (startLeft + width * progress*k2) + "px"
        }
    });
}

function animate(options) {

    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        // текущее состояние анимации
        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}