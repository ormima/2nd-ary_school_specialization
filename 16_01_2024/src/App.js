import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
     <div className="container">
            <main>
              <section className="left">
                  <h3>rules:</h3>
                  <p>
                  - pick one of the elements<br></br>
                  - my powerfull AI script will fight you<br></br>
                  - it will generate its response<br></br>
                  - rock counters scissors<br></br>
                  - scissors counters paper<br></br>
                  - paper counters rock<br></br>
                  - don't ask me how tf paper counters rock<br></br>
                  - if you'll pick the same element as my script it`s a draw<br></br>
                  - result and my scripts response will be displayed</p>
              </section>
              <section className="right">
                  <section className="choice">
                      <img id="rock" src="./rock.JPG" alt="rock"/>
                      <img id="paper" src="./paper.JPG" alt="paper"/>
                      <img id="scissors" src="./scissors.JPG" alt="scissors"/>
                  </section>
                  <section className="output">
                      <p id="result"></p>
                  </section>
              </section> 
          </main>
      </div>
    </>
  );
}

// alert("You have to be at least 18 years old to see this content!");

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");
// const res = document.getElementById("result");

// rock.addEventListener("click", () => {
//     res.innerText = " ";
//     let a = Math.round(Math.random()*10);
//     if(a <= 3){
//         res.innerText = "My powerfull AI script also picked rock so it`s a draw :|";
//     } else if(a <= 6){
//         res.innerText = "My powerfull AI script picked paper so you lose this time :c";
//     } else {
//         res.innerText = "My powerfull AI script picked scissors so you win (*o*)";
//     };
// });
// paper.addEventListener("click", () => {
//     res.innerText = " ";
//     let a = Math.round(Math.random()*10);
//     if(a <= 3){
//         res.innerText = "My powerfull AI script picked rock so you win (*o*)";
//     } else if(a <= 6){
//         res.innerText = "My powerfull AI script also picked paper so it`s a draw :|";
//     } else {
//         res.innerText = "My powerfull AI script picked scissors so you lose this time :c";
//     };
// });
// scissors.addEventListener("click", () => {
//     res.innerText = " ";
//     let a = Math.round(Math.random()*10);
//     if(a <= 3){
//         res.innerText = "My powerfull AI script picked rock so you lose this time :c";
//     } else if(a <= 6){
//         res.innerText = "My powerfull AI script picked paper so you win (*o*)";
//     } else {
//         res.innerText = "My powerfull AI script also picked scissors so it`s a draw :|";
//     };
// });

export default App;







// tutorial jak odpalić reacta: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial