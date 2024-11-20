/* document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Logging in with email: ' + loginForm.email.value);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Signing up with NIN: ' + signupForm.nin.value);
        });
    }
}); */

document.addEventListener('DOMContentLoaded', function() { 
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

});




document.addEventListener('DOMContentLoaded', function() {
   const searchInput = document.getElementById('search-input');
   const resultsList = document.getElementById('results');

   const data = [
       "Introduction to Python",
       "Advanced JavaScript",
       "Machine Learning Basics",
       "Data Science with R",
       "Cybersecurity courses",
       "Data Analyse with SQL",
       "Web Development with HTML and CSS"
   ];

   searchInput.addEventListener('input', function() {
       const query = searchInput.value;
       const results = searchWithNLP(query, data);
       displayResults(results);
   });

   function searchWithNLP(query, data) {
       const nlp = window.nlp;
       const doc = nlp(query);
       const keywords = doc.nouns().out('array');
       return data.filter(item => {
           return keywords.some(keyword => item.toLowerCase().includes(keyword.toLowerCase()));
       });
   }

   function displayResults(results) {
       resultsList.innerHTML = '';
       results.forEach(result => {
           const li = document.createElement('li');
           li.textContent = result;
           resultsList.appendChild(li);
       });
   }
});







let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

