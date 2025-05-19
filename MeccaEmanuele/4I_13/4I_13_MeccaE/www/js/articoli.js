// Funzione per aggiungere un nuovo prodotto alla tabella
        document.getElementById('addProductButton').addEventListener('click', function() {
            const productName = document.getElementById('productName').value;
            const productPrice = document.getElementById('productPrice').value;

            if (productName && productPrice) {
                // Crea una nuova riga nella tabella
                const table = document.getElementById('productTable');
                const newRow = table.insertRow();

                // Crea le celle per il nome prodotto, prezzo e azioni
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);
                const cell3 = newRow.insertCell(2);

                // Aggiungi i valori nelle celle
                cell1.textContent = productName;
                cell2.textContent = `€${productPrice}`;

                // Aggiungi i bottoni di azione
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');
                deleteButton.textContent = 'Elimina';

                // Aggiungi il bottone "Elimina" alla cella 3
                cell3.appendChild(deleteButton);

                // Aggiungi l'evento per il bottone "Elimina"
                deleteButton.addEventListener('click', function() {
                    const row = deleteButton.parentElement.parentElement;
                    row.remove();  // Rimuove la riga dalla tabella
                });

                // Svuota i campi del form
                document.getElementById('productName').value = '';
                document.getElementById('productPrice').value = '';
            } else {
                alert("Per favore, inserisci sia il nome che il prezzo del prodotto.");
            }
        });