async function fetchReturnedProducts() {
    try {
        const response = await fetch('http://localhost:3000/returned-products');
        const returnedProducts = await response.json();
        return returnedProducts;
    } catch (error) {
        console.error('Error fetching returned products:', error);
        return [];
    }
}

async function fetchProductDataset() {
    
    try {
        const response = await fetch('dataset.json');
        const productDataset = await response.json();
        return productDataset;
    } catch (error) {
        console.error('Error fetching product dataset:', error);
        return [];
    }
}

async function compareProducts() {
    const returnedProducts = await fetchReturnedProducts();
    const productDataset = await fetchProductDataset();

    const comparisonList = document.getElementById('comparison-list');
    comparisonList.innerHTML = '';

    productDataset.forEach(product => {
        const listItem = document.createElement('li');
        if (returnedProducts.includes(product.name)) {
            listItem.textContent = `${product.name} - Returned`;
            listItem.style.color = 'red';
        } else {
            listItem.textContent = product.name;
        }
        comparisonList.appendChild(listItem);
    });
}

async function displayProductDataset() {
    const productDataset = await fetchProductDataset();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    productDataset.forEach(product => {
        let listItem = document.createElement('li');
        listItem.textContent = product.name;
        productList.appendChild(listItem);
    });
}

async function resetReturnedProducts() {
    try {
        const response = await fetch('http://localhost:3000/reset-returned-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data.message);
        await compareProducts();
    } catch (error) {
        console.error('Error resetting returned products:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await displayProductDataset();
    await compareProducts();
});

