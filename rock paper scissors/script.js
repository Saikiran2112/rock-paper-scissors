let p=document.getElementById('player')
function change1(){
    p.textContent='Rock'
    computer()
    evaluation()

}
function change2(){
    p.textContent='Paper'
    computer()
    evaluation()

}
function change3(){
    p.textContent='Scissors'
    computer()
    evaluation()

}
let v=['Rock','Paper','Scissors']
let c=document.getElementById('computer')
function computer(){
    let random=Math.floor(Math.random()*3)
    c.textContent=v[random]


}
let r=document.getElementById('result')
function evaluation(){
    let s=p.textContent
    let t=c.textContent
    if(t=='Rock' && s=='Paper'){
        r.textContent="You Won"

    }
    else if(t=='Paper' && s=='Scissors'){
        r.textContent='You Won'
    }
    else if(t=='Scissors' && s=='Rock'){
        r.textContent='You Won'
    }
    else if(s==t){
        r.textContent='Its a Tie'
    }
    else{
        r.textContent='You Lost'
    }
}