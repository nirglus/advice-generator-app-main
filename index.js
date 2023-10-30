const fetchAdvice = () => {
    const url = `https://api.adviceslip.com/advice`;
    fetch(url)
       .then(res => res.json())
       .then(data => {
        console.log(data);
        const adviceId = document.getElementById("adviceId");
        const advice = document.getElementById("adivceTxt");
        adviceId.innerHTML = `${data.slip.id}`
        advice.innerHTML = `"${data.slip.advice}"`
       })
}
const adviceGenBtn = document.getElementById("adviceBtn");
adviceGenBtn.addEventListener("click", () =>{
    fetchAdvice();
})