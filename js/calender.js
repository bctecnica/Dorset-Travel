const leftbar = document.querySelector(".cal-left-bar");
const allLi = document.querySelectorAll(".calender li");

const rightBar = document.querySelector(".cal-right-bar");
const h1Text = document.querySelector(".month");
const textparagraph = document.querySelector(".cal-text");

allLi.forEach((li, index) => {
    // listens for a li click and then updates month and text with appropriate information as well as adjusting button style
    li.addEventListener("click", function(e){
        e.preventDefault();

        leftbar.querySelector(".active").classList.remove("active");
        li.classList.add("active");
        
        leftbar.querySelector(".whitecolor").classList.remove("whitecolor");
        li.classList.add("whitecolor");

        if(index === 0){
            h1Text.textContent="January";
            textparagraph.innerHTML= `
            1st - some thing<br>
            -<br>
            12st - some thing<br>
            -<br>
            21st - some thing<br>
            -<br>
            31st - some thing<br>
            `;
        }
        
        if(index === 1){
            h1Text.textContent="February";
            textparagraph.innerHTML= `
            2st - some thing<br>
            8th - some other thing<br>
            12st - some thing<br>
            18th - some other thing<br>
            21st - some thing<br>
            28th - some other thing<br>
            31st - some thing<br>
            `;
        }
        
        if(index === 2){
            h1Text.textContent="March";
            textparagraph.innerHTML= `
            3st - some thing<br>
            8th - some other thing<br>
            12st - some thing<br>
            18th - some other thing<br>
            21st - some thing<br>
            28th - some other thing<br>
            31st - some thing<br>
            `;
        }
        
        if(index === 3){
            console.log("3");
            h1Text.textContent="April";
            textparagraph.innerHTML= `
            4st - some thing<br>
            8th - some other thing<br>
            12st - some thing<br>
            18th - some other thing<br>
            21st - some thing<br>
            28th - some other thing<br>
            31st - some thing<br>
            `;
        }

        if(index === 4){
            console.log("4");
            h1Text.textContent="May";
            textparagraph.innerHTML= `
            5st - some thing<br>
            8th - some other thing<br>
            12st - some thing<br>
            18th - some other thing<br>
            21st - some thing<br>
            28th - some other thing<br>
            31st - some thing<br>
            `;
        }

        if(index === 5){
            console.log("5");
            h1Text.textContent="June";
            textparagraph.innerHTML= `
            6st - some thing<br>
            8th - some other thing<br>
            12st - some thing<br>
            18th - some other thing<br>
            21st - some thing<br>
            28th - some other thing<br>
            31st - some thing<br>
            `;
        }

        if(index === 6){
            console.log("6");
            h1Text.textContent="July";
            textparagraph.innerHTML= `
            7st - some thing<br>
            8th - some other thing<br>
            12st - some thing<br>
            18th - some other thing<br>
            21st - some thing<br>
            28th - some other thing<br>
            31st - some thing<br>
            `;
        }

        if(index === 7){
            h1Text.textContent="August";
            textparagraph.innerHTML= `
              8st - some thing<br>
              8th - some other thing<br>
              12st - some thing<br>
              18th - some other thing<br>
              21st - some thing<br>
              28th - some other thing<br>
              31st - some thing<br>
              `;
        }

        if(index === 8){
            h1Text.textContent="September";
            textparagraph.innerHTML= `
              9st - some thing<br>
              8th - some other thing<br>
              12st - some thing<br>
              18th - some other thing<br>
              21st - some thing<br>
              28th - some other thing<br>
              31st - some thing<br>
              `;
        }

        if(index === 9){
            h1Text.textContent="October";
            textparagraph.innerHTML= `
              10st - some thing<br>
              8th - some other thing<br>
              12st - some thing<br>
              18th - some other thing<br>
              21st - some thing<br>
              28th - some other thing<br>
              31st - some thing<br>
              `;
        }

        if(index === 10){
            h1Text.textContent="November";
            textparagraph.innerHTML= `
              11st - some thing<br>
              8th - some other thing<br>
              12st - some thing<br>
              18th - some other thing<br>
              21st - some thing<br>
              28th - some other thing<br>
              31st - some thing<br>
              `;
        }

        if(index === 11){
            h1Text.textContent="December";
            textparagraph.innerHTML= `
              12st - some thing<br>
              8th - some other thing<br>
              12st - some thing<br>
              18th - some other thing<br>
              21st - some thing<br>
              28th - some other thing<br>
              31st - some thing<br>
              `;
        }
  
    });
});

        