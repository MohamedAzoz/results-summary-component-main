
let sect3=document.querySelector("#sect3");
let content;
let data=[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]
let classes = ["Reaction", "Memory", "Verbal", "Visual"]

//  fetch("http://127.0.0.1:5500/data.json")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('حدث خطأ في الشبكة');
//     }
//     return response.json();
//   })
  // .then(data => {
      data.forEach((el, idx) => {  
         let div = document.createElement("div");
         div.innerHTML = `<p><img src="${el.icon}" alt="${el.category} Icon"> ${el.category}</p> 
         <p class="color">${el.score} <span>/</span>  <span> 100 </span></p> `;
         div.classList.add(classes[idx]); 
         sect3.appendChild(div);
   });
  // }
  //  )
  // .catch(error => console.error('هناك مشكلة مع عملية الجلب:', error));
