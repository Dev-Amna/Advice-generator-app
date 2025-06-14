let btn = document.querySelector("button");
let advice = document.getElementById("advice");
let counter = document.getElementById("counter");

let url  = 'https://api.adviceslip.com/advice';

async function  getAdvice() {
    try{
     let res = await axios.get(url);
     console.log(res.data.slip.advice);
     counter.innerText = res.data.slip.id
    return advice.innerText = `"${res.data.slip.advice}"`;
    }
    catch(err){
        console.log(err);
    }
}



btn.addEventListener("click", getAdvice);
