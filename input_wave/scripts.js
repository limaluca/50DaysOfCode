const labels = document.querySelectorAll(".form-control label");


labels.forEach(label => {
    label.innerHTML = label.innerText //get each letter of the label
        .split('') //splits into an array of each letter
        .map((letter, index) => `<span style="transition-delay: ${index*20}ms;">${letter}</span>`) //map makes an array and transforms it into something else  (here is a span)
        .join('') //get each letter of the array into a single tag (a span)
})