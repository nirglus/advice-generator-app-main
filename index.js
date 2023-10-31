const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("adivceTxt");
adviceId.innerHTML = `#117`
advice.innerHTML = `"It is easy to sit up and take notice, what's difficult is getting up and taking action."`

const fetchAdvice = (id = '') => {
    const url = `https://api.adviceslip.com/advice${id}`;
    fetch(url)
       .then(res => res.json())
       .then(data => {
        console.log(data);
        adviceId.innerHTML = `#${data.slip.id}`
        advice.innerHTML = `"${data.slip.advice}"`
       })
}

const adviceGenBtn = document.getElementById("adviceBtn");
adviceGenBtn.addEventListener("click", () =>{
    fetchAdvice();
})