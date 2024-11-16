// Menu bar function for mobile screen
var menu= document.querySelector('.menu')
var menuList= document.querySelector('nav')
menu.addEventListener('click', ()=> {
    menuList.classList.toggle('showmenu')
})


// Customizable chocolate box function
function updateBox() {
    // retreive the value from the user through inbox boxes
    const normalCount = parseInt(document.getElementById("Choco").value);  
    const vanillaCount = parseInt(document.getElementById("Vanilla").value);
    const strawberryCount = parseInt(document.getElementById("Strawberry").value);
    const message = document.getElementById('message');  // access the element of id message

    // it calculate the number of chocolates entered by the user
    const totalChocolates = normalCount + vanillaCount + strawberryCount;
    const maxChocolates = 9;

    const slots = document.querySelectorAll('.box .choco-slot');  // access the element of class .box .choco-slot

    // Display the message if the box is full
    if (totalChocolates >= maxChocolates) {
        message.style.display = 'block';  // it shows the message when its full
    } else {
        message.style.display = 'none'; // Hide the message when its not not full
    }

    // It resets to their original styling (empty chocolate)
    slots.forEach(slot => {
        slot.className = 'choco-slot';
    });

    let slotIndex = 0;  // initial number of chocolates

    // Fill the slots with normal chocolates
    for (let i = 0; i < normalCount; i++) {
        slots[slotIndex].classList.add('normal');  // it will add class 'normal' (adds brown color) to class choco slot
        slotIndex++; // Move to the next slot
    }

    // Fill the slots with normal chocolates
    for (let i = 0; i < vanillaCount; i++) {
        slots[slotIndex].classList.add('vanilla');  // it will add class 'vanilla' (adds vanilla color) to class choco slot
        slotIndex++; // Move to the next slot
    }

    // Fill the slots with normal chocolates
    for (let i = 0; i < strawberryCount; i++) {
        slots[slotIndex].classList.add('strawberry');  // it will add class 'strawberry' (adds pink color) to  class choco slot
        slotIndex++;  // Move to the next slot
    }
}

// Add event listeners to each input field to update the chocolate box
document.getElementById("Choco").addEventListener('input', updateBox);
document.getElementById("Vanilla").addEventListener('input', updateBox);
document.getElementById("Strawberry").addEventListener('input', updateBox);


// basket list function for adding the items to the list
// if 'add to card' button is clicked, it will retrieve the product data by using data-name and data-price attribute
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');

        // Create a new list item for the basket
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - AED ${productPrice}`;

        // Add to basket (ul element)
        document.getElementById('cart-items').appendChild(cartItem);
    });
});