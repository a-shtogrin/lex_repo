/* ---------------------Асинхронность---------------------- */

// console.log("A");
// console.log("B");
// console.log("C");

// function greet() {
//     console.log("Hello!");
//    }
//    function delay() {
//     for (let i = 0; i < 10000000000; i += 1) {}
//    }

//    delay();
//    greet();

function greet() {
  console.log("Hello!");
}

// setTimout эта асинхронная функция, которая предоставляется браузер API . greet ссылка на функцию

//cначала выполняются синхронные функции а потом асинхронные

//    console.log("start")

//    setTimeout(() => {
//     console.log("3 sec");
//    }, 3000);

//    setTimeout(() => {
//     console.log("0 sec");
//    }, 0);

//    setTimeout(() => {
//     console.log("2 sec");
//    }, 2000);

//    console.log("end");




const request = () => {
    console.log("init request");

    setTimeout(() => {
        console.log("create response");

        const response = {
            name: "Alex",
            age: 26,
        };

        setTimeout(() => {
            response.modified = true;
            console.log(response);
        }, 2000)
    }, 2000)
}

request()

//--------Асинхронный код с помощью promis-----------------

const requestOne = () => {
  console.log("init request");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("create response");

      const response = {
        name: "Alex",
        age: 26,
      };

      resolve(response)
    }, 2000);
  });
};


const requestTwo = (result)=> {
    return new Promise (function (resolve, reject) {
        setTimeout(() => {
            result.modified =true;
            // throw "Custom Error";
            resolve(result)
        }, 2000)
    })
}

requestOne()
.then((result)=> requestTwo(result))
.then((response)=> console.log(response))
// .catch(()=> console.log(err))
// .finally(() => console.log('finally'))


//__________________Асинхронные фунции_______________

const requestFunction = async () => {
    const result = await requestOne();
    const response = await requestTwo(result);
    console.log(response);
}

requestFunction()
