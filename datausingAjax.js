function getTickets(employeeid) {
  // Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  
  // Define the URL for the AJAX request
  let url = `https://jscript.rdm/ticketrequest.asp/?employeeid=${employeeid}`;
  
  // Set up the callback function to handle the response
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Parse the XML response
          let xmlDoc = xhr.responseXML;
          
          // Get the tickets from the XML
          let tickets = xmlDoc.getElementsByTagName("ticket");

          // Get the table element where the data will be displayed
          let table = document.getElementById('ticketsTable');
          table.innerHTML = '';  // Clear any existing data in the table
          
          // Create table headers if necessary
          let headerRow = table.insertRow(0);
          headerRow.innerHTML = `
              <th>Request Date</th>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Problem Description</th>
              <th>Status</th>
              <th>Response</th>
          `;

          // Loop through the tickets and populate the table
          for (let i = 0; i < tickets.length; i++) {
              let ticket = tickets[i];
              
              // Extract data from the XML
              let requestDate = ticket.getElementsByTagName('requestDate')[0].textContent;
              let employeeId = ticket.getElementsByTagName('employeeId')[0].textContent;
              let firstName = ticket.getElementsByTagName('firstName')[0].textContent;
              let lastName = ticket.getElementsByTagName('lastName')[0].textContent;
              let problemDescription = ticket.getElementsByTagName('problemDescription')[0].textContent;
              let status = ticket.getElementsByTagName('status')[0].textContent;
              let response = ticket.getElementsByTagName('response')[0].textContent;
              
              // Create a new row and populate it with ticket data
              let row = table.insertRow(i + 1);
              row.innerHTML = `
                  <td>${requestDate}</td>
                  <td>${employeeId}</td>
                  <td>${firstName}</td>
                  <td>${lastName}</td>
                  <td>${problemDescription}</td>
                  <td>${status}</td>
                  <td>${response}</td>
              `;
          }
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
          // Handle error response
          console.error("Failed to retrieve the tickets data");
      }
  };
  
  // Open and send the request
  xhr.open('GET', url, true);
  xhr.send();
}
function getTickets(employeeid) {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    
    // Define the URL for the AJAX request
    let url = `https://jscript.rdm/ticketrequest.asp/?employeeid=${employeeid}`;
    
    // Set up the callback function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the XML response
            let xmlDoc = xhr.responseXML;
            
            // Get the tickets from the XML
            let tickets = xmlDoc.getElementsByTagName("ticket");

            // Get the table element where the data will be displayed
            let table = document.getElementById('ticketsTable');
            table.innerHTML = '';  // Clear any existing data in the table
            
            // Create table headers if necessary
            let headerRow = table.insertRow(0);
            headerRow.innerHTML = `
                <th>Request Date</th>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Problem Description</th>
                <th>Status</th>
                <th>Response</th>
            `;

            // Loop through the tickets and populate the table
            for (let i = 0; i < tickets.length; i++) {
                let ticket = tickets[i];
                
                // Extract data from the XML
                let requestDate = ticket.getElementsByTagName('requestDate')[0].textContent;
                let employeeId = ticket.getElementsByTagName('employeeId')[0].textContent;
                let firstName = ticket.getElementsByTagName('firstName')[0].textContent;
                let lastName = ticket.getElementsByTagName('lastName')[0].textContent;
                let problemDescription = ticket.getElementsByTagName('problemDescription')[0].textContent;
                let status = ticket.getElementsByTagName('status')[0].textContent;
                let response = ticket.getElementsByTagName('response')[0].textContent;
                
                // Create a new row and populate it with ticket data
                let row = table.insertRow(i + 1);
                row.innerHTML = `
                    <td>${requestDate}</td>
                    <td>${employeeId}</td>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${problemDescription}</td>
                    <td>${status}</td>
                    <td>${response}</td>
                `;
            }
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            // Handle error response
            console.error("Failed to retrieve the tickets data");
        }
    };
    
    // Open and send the request
    xhr.open('GET', url, true);
    xhr.send();
}
