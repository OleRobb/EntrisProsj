
var knapp1 = document.getElementsByClassName('knapp-ja-box1')[0];
var knapp2 = document.getElementsByClassName('knapp-nei-box1')[0];
var knapp3 = document.getElementsByClassName('valg-1')[0];
var knapp4 = document.getElementsByClassName('valg-2')[0];
var knapp5 = document.getElementsByClassName('valg-3')[0];
var knapp6 = document.getElementsByClassName('knapp-ja-box4')[0];
var knapp7 = document.getElementsByClassName('knapp-nei-box4')[0];

knapp1.onclick = function() {
  if (!knapp1.classList.contains("aktiv")) {
    knapp1.classList.add("aktiv");
    knapp1.style.backgroundColor = "#003fa59a";
    
    if (knapp2.classList.contains("aktiv")) {
      knapp2.classList.remove("aktiv");
      knapp2.style.backgroundColor = "#ffffff";
    }
  }
};

knapp2.onclick = function() {
  if (!knapp2.classList.contains("aktiv")) {
    knapp2.classList.add("aktiv");
    knapp2.style.backgroundColor = "#003fa59a";
    
    if (knapp1.classList.contains("aktiv")) {
      knapp1.classList.remove("aktiv");
      knapp1.style.backgroundColor = "#ffffff";
    }
  }
};

knapp3.addEventListener('click', () => {
    knapp4.style.backgroundColor = 'white';
    knapp5.style.backgroundColor = 'white';
    knapp3.style.backgroundColor = '#003fa59a';
  });
  
  knapp4.addEventListener('click', () => {
    knapp3.style.backgroundColor = 'white';
    knapp5.style.backgroundColor = 'white';
    knapp4.style.backgroundColor = '#003fa59a';
  });
  
  knapp5.addEventListener('click', () => {
    knapp3.style.backgroundColor = 'white';
    knapp4.style.backgroundColor = 'white';
    knapp5.style.backgroundColor = '#003fa59a';
  });

knapp6.onclick = function() {
    if (!knapp6.classList.contains("aktiv")) {
      knapp6.classList.add("aktiv");
      knapp6.style.backgroundColor = "#003fa59a";
      
      if (knapp7.classList.contains("aktiv")) {
        knapp7.classList.remove("aktiv");
        knapp7.style.backgroundColor = "#ffffff";
      }
    }
};
  
knapp7.onclick = function() {
    if (!knapp7.classList.contains("aktiv")) {
      knapp7.classList.add("aktiv");
      knapp7.style.backgroundColor = "#003fa59a";
      
      if (knapp6.classList.contains("aktiv")) {
        knapp6.classList.remove("aktiv");
        knapp6.style.backgroundColor = "#ffffff";
      }
    }
};


  