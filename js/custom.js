
const allSeat = document.getElementsByClassName('add-bus');

let count = 0;
let cost = 550;
for(const seat of allSeat){
    seat.addEventListener('click', function(event){
        count = count + 1;

        const seatIn = event.target.innerText;


        const seatShortPrice = document.getElementById('seat-short-price');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatIn;
        const p2 = document.createElement('p');
        p2.innerText = 'economy';
        const h5 = document.createElement('h5');
        h5.innerText = 500;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(h5);

       
        seatShortPrice.appendChild(li);

        const totalPrice = document.getElementById('total-price').innerText;
         console.log(typeof totalPrice)

       
       setInnerText('seat-count', count)       
    });
    
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
        
}



// function handleKeyEvent(){
    

//     const mySeat = getRandomSeat()
//     console.log(mySeat)
//     setBackgroundColor(mySeat)
    
// }

function getRandomSeat(){
    const randomSeat = ['A1', 'A2', 'A3','A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3','D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4','G1', 'G2', 'G3','G4', 'H1', 'H2', 'H3', 'H4', 'I1','I2', 'I3', 'I4', 'J1', 'J2','J3', 'J4'];
    
    const randomSerial = Math.random(randomSeat)*40;
    const index = Math.round(randomSerial);
    const seat = randomSeat[index];
    console.log(index, seat);
    return seat;
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
    element.classList.add('text-white')
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
    element.classList.add('text-white')
}



// function bookingSeat(){
//     handleKeyEvent();
// }

