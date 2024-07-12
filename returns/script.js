async function returnItem(orderId, statusId, productName) {
    const orderElement = document.getElementById(orderId);
    const statusElement = document.getElementById(statusId);

    // Update the status
    statusElement.textContent = 'Status: Return';

    // Make a request to the server to record the return
    try {
        const response = await fetch('http://localhost:3000/return', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productName }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data.message);

        // Change status to 'Brought Back'
        setTimeout(() => {
            statusElement.textContent = 'Status: Brought Back';
             // Create a new list item for the returned product
             const returnedItem = document.createElement('li');
             returnedItem.textContent = productName;
             // Append the returned item to the returned list
             document.getElementById('returned-list').appendChild(returnedItem);
        }, 1000);

        // Remove the order item from the list after 2 seconds and add it to the returned list
        setTimeout(() => {
            // Remove the order element from the orders list
            orderElement.remove();
        }, 2000);
    } catch (error) {
        console.error('Error returning order:', error);
    }
}
