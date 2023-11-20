// src/script.js


fetch('/medicine')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('drugTable');

        // Clear existing rows
        tableBody.innerHTML = '';

        // Populate the table with data from the server
        data.forEach(medicine => {
            const row = document.createElement('tr');
            const classString = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600";
            row.setAttribute("class", classString);
            row.innerHTML = `
            <tr
            class="bg-white border-bbg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${medicine.Name}
            </th>
            <td class="px-6 py-4">
            ${medicine.Price}
            </td>
            <td class="px-6 py-4">
            ${medicine.Company}
            </td>
            <td class="px-6 py-4">
            ${medicine.Category}
            </td>
            <td class="px-6 py-4">
            ${medicine.Description}
            </td>
            <td class="flex items-center px-6 py-4">
                <a href="/edit/${medicine.MedcineID}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a href="/delete/${medicine.MedcineID}" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
                </tr>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
