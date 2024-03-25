document.addEventListener('DOMContentLoaded', async () => {
    const medicineList = document.getElementById('medicineList');
    const addMedicineForm = document.getElementById('addMedicineForm');

    // Fetch all medicines from the backend and display them
    const fetchMedicines = async () => {
        const response = await fetch('/routes/medicines');
        const medicines = await response.json();

        medicineList.innerHTML = ''; // Clear previous content

        medicines.forEach(medicine => {
            const medicineItem = document.createElement('div');
            medicineItem.innerHTML = `
                <h3>${medicine.name}</h3>
                <p>Description: ${medicine.description}</p>
                <p>Price: ${medicine.price}</p>
                <p>Quantity: ${medicine.quantity}</p>
                <button onclick="deleteMedicine('${medicine._id}')">Delete</button>
            `;
            medicineList.appendChild(medicineItem);
        });
    };

    // Add event listener for form submission
    addMedicineForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(addMedicineForm);
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const quantity = formData.get('quantity');

        const response = await fetch('/routes/medicines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, price, quantity })
        });

        if (response.ok) {
            await fetchMedicines(); // Refresh the medicine list
            addMedicineForm.reset(); // Clear the form
        }
    });

    // Function to delete a medicine
    window.deleteMedicine = async (id) => {
        const response = await fetch(`/routes/medicines/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            await fetchMedicines(); // Refresh the medicine list
        }
    };

    // Initial fetch of medicines
    await fetchMedicines();
});
