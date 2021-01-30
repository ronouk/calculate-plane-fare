// Working with function

// First Class Price

document.getElementById('f-class-plus').addEventListener('click', function () {
    handleTicketPrice('f-class', true);

})

document.getElementById('f-class-minus').addEventListener('click', function () {
    handleTicketPrice('f-class', false);
})

//Economy Class Price

document.getElementById('e-class-plus').addEventListener('click', function () {
    handleTicketPrice('e-class', true);

})

document.getElementById('e-class-minus').addEventListener('click', function () {
    handleTicketPrice('e-class', false);
})

// Common function for both Class ticket

function handleTicketPrice(ticket, isIncrease) {
    let currentTicketNumber = document.getElementById(ticket + '-ticket-number').value;
    currentTicketNumber = parseInt(currentTicketNumber);

    let newTicketNumber = currentTicketNumber;

    if (isIncrease == true) {

        newTicketNumber = currentTicketNumber + 1;
    }

    if (isIncrease == false && currentTicketNumber >0){
        newTicketNumber = currentTicketNumber - 1;
}

    document.getElementById(ticket + '-ticket-number').value = newTicketNumber;

    let ticketPrice = 0;

    if(ticket == 'f-class'){
        ticketPrice = newTicketNumber * 150;
    }

    else if(ticket == 'e-class'){
        ticketPrice = newTicketNumber * 100;
    }

    console.log(ticketPrice);
    calculateTotal();
}

//Total Price
function calculateTotal(){
    const fClassTicket = document.getElementById('f-class-ticket-number');
    const fClassTicketNumber = parseInt(fClassTicket.value);

    const eClassTicket = document.getElementById('e-class-ticket-number');
    const eClassTicketNumber = parseInt(eClassTicket.value);

    const totalTicketPrice = fClassTicketNumber*150 + eClassTicketNumber*100;
    document.getElementById('price-subtotal').innerText = totalTicketPrice;

    const totalVat = 0.1*totalTicketPrice;
    document.getElementById('price-vat').innerText = totalVat;

    const priceTotal = totalTicketPrice + totalVat;
    document.getElementById('price-total').innerText = priceTotal;

    document.getElementById('confirmation-price-total').value = priceTotal;

}

// Confirmation form

document.getElementById('book-now-button').addEventListener('click', function () {
    document.getElementById('booking-input').style.display = 'none';
    document.getElementById('booking-confirmation').style.display = 'block';
    
    document.getElementById('confirmation-flying-from').value = document.getElementById('flying-from').value;
    document.getElementById('confirmation-flying-to').value = document.getElementById('flying-to').value;
    document.getElementById('confirmation-departure').value = document.getElementById('departure').value;
    document.getElementById('confirmation-return').value = document.getElementById('return').value;
})



//////////////////////////////
////For future reference:////
////////////////////////////

// calculate ticket price without function

// document.getElementById('e-class-minus').addEventListener('click', function () {
//     let currentEclassTicketNumber = document.getElementById('e-class-ticket-number').value;
//     currentEclassTicketNumber = parseInt(currentEclassTicketNumber);

//     let newEclassTicketNumber = currentEclassTicketNumber;

//     if (currentEclassTicketNumber > 0) {
//         newEclassTicketNumber = currentEclassTicketNumber - 1;
//     }
//     document.getElementById('e-class-ticket-number').value = newEclassTicketNumber;

//     const eClassPrice = newEclassTicketNumber * 100;
//     console.log(eClassPrice);
// })

///-------------------------------------------------


// Single function for first class ticket


// function handleFclassTicketPrice(isIncrease) {
//     let currentFclassTicketNumber = document.getElementById('f-class-ticket-number').value;
//     currentFclassTicketNumber = parseInt(currentFclassTicketNumber);

//     let newFclassTicketNumber = currentFclassTicketNumber;

//     if (isIncrease == true) {

//         newFclassTicketNumber = currentFclassTicketNumber + 1;
//     }

//     if (isIncrease == false && currentFclassTicketNumber >0){
//             newFclassTicketNumber = currentFclassTicketNumber - 1;
//     }

//     document.getElementById('f-class-ticket-number').value = newFclassTicketNumber;

//     const fClassPrice = newFclassTicketNumber * 150;
//     console.log(fClassPrice);
// }