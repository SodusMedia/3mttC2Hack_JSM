/* // Placeholder for AI-based search filter functionality
function searchFilter(query, data) {
    // Convert query to lowercase for case-insensitive search
    const lowerCaseQuery = query.toLowerCase();

    // Filter data based on the query
    return data.filter(item => item.toLowerCase().includes(lowerCaseQuery));
}

// Example usage
const data = [
    "Introduction to Python",
    "Advanced JavaScript",
    "Machine Learning Basics",
    "Data Science with R",
    "Web Development with HTML and CSS"
];

const query = "python";
const filteredData = searchFilter(query, data);

console.log(filteredData);  */
// Output: ["Introduction to Python"]
/* This function converts both the query and the data items to lowercase to ensure the search is case-insensitive. It then filters the data array to include only items that contain the query string.

 */



/* document.addEventListener('DOMContentLoaded', function() { 
    const searchInput = document.getElementById('search-input'); 
    const resultsList = document.getElementById('results'); 
    
    const data = [ 
        { title: "Introduction to Python" }, 
        { title: "Advanced JavaScript" }, 
        { title: "Machine Learning Basics" }, 
        { title: "Data Science with R" }, 
        { title: "Web Development with HTML and CSS" } 
    ]; 
    
    const options = { 
        keys: ['title'], 
        threshold: 0.3 
    }; 
    
    const fuse = new Fuse(data, options); 
    
    searchInput.addEventListener('input', function() { 
        const query = searchInput.value; 
        const results = fuse.search(query); 
        displayResults(results);
     }); 
     
     function displayResults(results) { 
        resultsList.innerHTML = ''; 
        results.forEach(result => { 
            const li = document.createElement('li'); 
            li.textContent = result.item.title;
            resultsList.appendChild(li); 
        }); 
    }

}); */