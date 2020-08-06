// const runner = {
//     $$runnerId: null,
//     $$tasks: [],
//     setSpeed: function (speed) {
//         this.stop();
//         this.start(speed);
//     },
//     add: function (task) {
//         this.$$tasks.push(task);
//     },
//     start: function (speed) {
//         var _this = this;
//         this.$$runnerId = setTimeout(function callback() {
//             _this.$$tasks.forEach(function (value) {
//                 value();
//             });
//             _this.$$runnerId = setTimeout(callback, speed);
//         }, speed);
//     },
//     stop: function () {
//         clearTimeout(this.$$runnerId);
//     }
// }

// runner.add(function() {
//     // console.log('Hello world');
//     const app = document.getElementById('app');
//     const date = new Date();
//     app.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

// });

// runner.getSpeed(1000);

    const app = document.querySelector('#app');

//     const sleep = () => {
//         for (let i = 0; i < 10*10e7 * 5; i++) {
//             const element = 10*10e7;
//         };
//     }
//     const drawClock = (el) => {
//     const date = new Date();
//     el.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
// };

// let timerId = setTimeout(function tick() {
//     drawClock(app);
//     timerId = setTimeout(tick, 1000);
// }, 1000);  

// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('STOP!!');
// }, 1000);



// drawClock(app);

// console.log('Casdass');
// console.log('Hello world 1');

// setTimeout(() => {
//     drawClock(app);
// }, 1000);
// console.log('Hello world 3');

// const timerId = setTimeout(() => {
//     drawClock(app);
//     console.log('Draw');
// }, 1000);

// setTimeout (() => {
//     clearTimeout(timerId);
//     console.log('clear');
// }, 500);
// sleep();
// console.log('hello world');
// console.log(timerId);

// const sleep = () => {
// for (let i = 0; i < 10 * 10e7; i++);
// };

// sleep(); 
// console.log('abc');

function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function User (id, name) {
    this.id = id;
    this.name = name;
}

// const userArray = [];

const request = (cb, returnValue = '', timeout = 200) => {
    setTimeout (function()  {
        // console.log('Start');
        // cb(new User (1, 'Pashka'));
        cb(returnValue);
        // console.log('End');
    }, timeout);
};

// const prefix = 'mr.';

// request((user) => {
//     console.log('Body');
//     app.innerHTML = `${prefix}${user.name}`;
// }, getRandomIntInclusive(200, 1000));


// request((user) => {
//     console.log(`User id: ${user.id}`);
// }, getRandomIntInclusive(200, 1000));

// console.log('Bye my app...');

// request (
//     function(user) {
//         console.log(user);
//     },
//     [],
//     getRandomIntInclusive(200, 1000)
// );

request (
    function(numbers) {
        numbers.forEach((value) => {
            request(
                (numbers) => console.log(numbers),
            value,
            getRandomIntInclusive(200, 1000)
        );
    })
    }
    [1, 2, 3],
    getRandomIntInclusive(200, 1000)
);