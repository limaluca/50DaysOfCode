const counters = document.querySelectorAll(".counter")



counters.forEach(counter => {

    counter.innerHTML = 0;

    const updateCounter = () => {
        //  the "+"" transforms the result into a number
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;


        //the value dividing target sets the speed
        //which the increment will grow. The higher
        // the number, slower will be the increment
        const increment = target / 300;


        if (c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 1);
        }

    }

    updateCounter();

});