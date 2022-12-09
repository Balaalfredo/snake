const box = document.querySelectorAll('.box');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const snake = document.querySelectorAll('.snake');


// box.forEach((a) => {
//     a.addEventListener('click', () => {

//         // if (a.classList.contains('select')) {
//         //     a.classList.remove('select');
//         // }
//         // else { a.classList.add('select'); }

//         // for (i of box) {
//         //     i.classList.remove('select');
//         // }

//         // a.classList.add('select');


//     })

// })


snake.forEach((a) => {




    b1.addEventListener('click', () => {


        if (a.classList.contains('move') || a.classList.contains('start')) {
            a.classList.remove('move');
            a.classList.remove('start');
        }
        else { a.classList.add('stop'); }
    })

    b2.addEventListener('click', () => {
        if (a.classList.contains('move') || a.classList.contains('stop')) {
            a.classList.remove('move');
            a.classList.remove('stop');
        }

        else { a.classList.add('start'); }

    })



    b3.addEventListener('click', () => {
        if (a.classList.contains('stop') ||
            a.classList.contains('start')) {
            a.classList.remove('stop');
            a.classList.remove('start');
        }

        else { a.classList.add('move'); }
    })


})