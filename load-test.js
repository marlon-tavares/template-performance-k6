/**
 * K6 Load Testing Script
 * 
 * Script Name: User API Load Test
 * Description: This script tests the performance of the User API by making random GET requests 
 * to the JSONPlaceholder service, checking response status and data integrity.
 * 
 * Author: Marlon Hlatchuk Tavares
 * Date: 27/10/2024
 * Version: 1.0
 * 
 * Usage: Run this script with K6 to generate load and produce an HTML report of the results.
 */

import http from 'k6/http'; // Import the HTTP module for making requests
import { check, sleep } from 'k6'; // Import check for assertions and sleep for pacing
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"; // Import the HTML report generator

// Function to handle the summary of test results and generate an HTML report
export function handleSummary(data) {
    return {
        "relatorio.html": htmlReport(data), // Generates an HTML report using the collected data
    };
}

// Function to get a random UserId between 1 and 10
function getRandomUserId() {
    return Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10
}

// Configuration options for the load test
export let options = {
    stages: [
        { duration: '30s', target: 500 }, // Ramp up to 2 virtual users (VUs) in 1 second
        { duration: '4m', target: 500 }, // Maintain 2 VUs for 2 seconds
        { duration: '30s', target: 0 }, // Ramp down to 0 VUs in 1 second
    ],
};

// Main function that runs during the test execution
export default function () {
    const userId = getRandomUserId(); // Get a random user ID
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`; // Construct the URL for the API request
    
    let response = http.get(url); // Make a GET request to the constructed URL

    // Check assertions on the response
    check(response, {
        'status is 200': (r) => r.status === 200, // Verify that the response status is 200 (OK)
        'id matches requested id': (r) => JSON.parse(r.body).id === userId, // Verify that the returned ID matches the requested ID
    });
    
    sleep(1); // Pause for 1 second before the next iteration
}