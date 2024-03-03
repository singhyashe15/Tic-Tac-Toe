let reset = document.querySelector('.reset');
let btn = document.querySelectorAll('#btn');
let winner  = document.getElementById("win_declare")
let person = document.getElementById('person')
let s1 = document.querySelector('.score1 span');
let s2 = document.querySelector('.score2 span');

let winbtn = [[0,1,2],[0,4,8],[0,3,6],
[1,4,7],[2,5,8,],[2,4,6],
[3,4,5],[6,7,8]];
//


const check = ()=>{
    for(let pattern of winbtn)
    {
      let pos1 = btn[pattern[0]].innerText;
      let pos2 = btn[pattern[1]].innerText;
      let pos3 = btn[pattern[2]].innerText;
      if(pos1 != "" && pos2 != "" && pos3 != "")
      {
        if(pos1 === pos2 && pos2 === pos3)
        {
          btn[pattern[0]].style.color = "red"
          btn[pattern[1]].style.color = "red"
          btn[pattern[2]].style.color = "red"
          return pos1;
        }
      }
    }
    return 0;
}


const Disabled =()=>{
  btn.forEach(btn =>{
    btn.disabled = true;
  })
}

const checkloss =()=>{
  for(let pattern of winbtn)
    {
      let pos1 = btn[pattern[0]].innerText;
      let pos2 = btn[pattern[1]].innerText;
      let pos3 = btn[pattern[2]].innerText;
      if(pos1 == "" || pos2 == "" || pos3 == "")
      {
        return 0;
      }
    }
    return 1;
}


let value = "X";
btn.forEach(btn =>{
  btn.addEventListener('click',()=>{
    btn.innerHTML = value;

      if(value === "X")
      value = "O";
      else if(value === "O")
      value = "X";
    
    btn.disabled = true;
    let winneropp = check();
    if(winneropp)
    {
      if(winneropp === 'X')
      s1.innerText = Number(s1.innerText) + 1;
    else
      s2.innerText = Number(s2.innerText) + 1;
      winner.innerText += `Winner is ${winneropp}`;
      //  winner.style.display = ""
      Disabled();
    }
    let tie = checkloss()
    if(tie){
      winner.innerHTML = `Tie`;
      winner.classList.remove('hide');
    }
  })
})

reset.addEventListener('click',()=>{
  btn.forEach(btn =>{
    btn.disabled = false;
    btn.innerText = "";
    if(btn.style.color === "red")
      btn.style.color = "blue"
  });
  winner.innerText = "";
  value = "X";
});

  
