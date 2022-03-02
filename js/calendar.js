const leftbar = document.querySelector(".cal-left-bar");
const allLi = document.querySelectorAll(".calendar li");

const rightBar = document.querySelector(".cal-right-bar");
// const h1Text = document.querySelector(".month");
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
            // h1Text.textContent="January";
            textparagraph.innerHTML= `
            <em>1st</em> - Naturally Beautiful Dorset exhibition<br><em>Durlston</em><br>
            <br>  
            <em>10th</em> - Guided Bird Watching Cruise<br><em>Exmouth</em><br>
            <br>
            <em>24th</em> - Cuppa and a Chat<br><em>Swanage</em><br>
            <br>
            <em>31st</em> - Time Traveller’s Trail<br><em>Swanage</em><br>
            `;
        }
        
        if(index === 1){
            // h1Text.textContent="February";
            textparagraph.innerHTML= `
            <em>6th</em> - Beautiful Dorset exhibition<br><em>Durlston</em><br>
            <br>  
            <em>10th</em> - Abbotsbury Food Fair<br><em>Abbotsbury</em><br>
            <br>
            <em>20th</em> - Quayside Music Festival<br><em>Weymouth</em><br>
            <br>
            <em>27th</em> - ILLUMINATE Blue Pool<br><em>Wareham</em><br>
            `;
        }
        
        if(index === 2){
            // h1Text.textContent="March";
            textparagraph.innerHTML= `
            <em>1st</em> - Naturally Beautiful Dorset exhibition<br><em>Durlston</em><br>
            <br>  
            <em>10th</em> - Guided Bird Watching Cruise<br><em>Exmouth</em><br>
            <br>
            <em>24th</em> - Cuppa and a Chat<br><em>Swanage</em><br>
            <br>
            <em>31st</em> - Time Traveller’s Trail<br><em>Swanage</em><br>
            `;
        }
        
        if(index === 3){
            // h1Text.textContent="April";
            textparagraph.innerHTML= `
            <em>1st</em> - Naturally Beautiful Dorset exhibition<br><em>Durlston</em><br>
            <br>  
            <em>10th</em> - Guided Bird Watching Cruise<br><em>Exmouth</em><br>
            <br>
            <em>30th</em> - Lyme Regis Fossil Festival<br><em>Lyme Regis</em><br>
            <br>
            <em>31st</em> - Earth Science Festival<br><em>Lyme Regis</em><br>
            `;
        }

        if(index === 4){
            // h1Text.textContent="May";
            textparagraph.innerHTML= `
            <em>6th</em> - Shaftesbury Food and Drink Festival<br><em>Shaftesbury</em><br>
            <br>  
            <em>8th</em> - Sherborne Abbey Festival.<br><em>Sherborne</em><br>
            <br>
            <em>21st</em> - Dorset Knob Throwing Festival<br><em>Dorchester</em><br>
            <br>
            <em>31st</em> - Blandford Georgian Fayre<br><em>Blandford Forum</em><br>
            `;
        }

        if(index === 5){
            // h1Text.textContent="June";
            textparagraph.innerHTML= `
            <em>2nd</em> - Christchurch Food Festival<br><em>Christchurch</em><br>
            <br>  
            <em>12th</em> - Wimborne Minster Folk Festival<br><em>Wimborne</em><br>
            <br>
            <em>25th</em> - Family Fest Dorset<br><em>Wimborne</em><br>
            <br>
            <em>30th</em> - Beaminster Festival<br><em>Beaminster</em><br>
            `;
        }

        if(index === 6){
            // h1Text.textContent="July";
            textparagraph.innerHTML= `
            <em>9th</em> - Bourne Free<br><em>Bournemouth</em><br>
            <br>  
            <em>10th</em> - Cerne Abbas Music Festival<br><em>Cerne Abbas</em><br>
            <br>
            <em>28th</em> - Jurassic Fields<br><em>Bridport</em><br>
            <br>
            <em>31st</em> - Tolpuddle Martyrs Festival<br><em>Tolpuddle</em><br>
            `;
        }

        if(index === 7){
            // h1Text.textContent="August";
            textparagraph.innerHTML= `
            <em>1st</em> - Camp Bestival<br><em>Lulworth</em><br>
            <br>  
            <em>20th</em> - Bournemouth Reggae Weekender<br><em>Bournemouth</em><br>
            <br>
            <em>24th</em> - Melplash Agricultural Show<br><em>Bridport</em><br>
            <br>
            <em>25th</em> - Great Dorset Steam Fair<br><em>Blandford Forum</em><br>
              `;
        }

        if(index === 8){
            // h1Text.textContent="September";
            textparagraph.innerHTML= `
            <em>3rd</em> - Bournemouth Air Show<br><em>Bournemouth</em><br>
            <br>  
            <em>10th</em> - Dorset County Show<br><em>Dorchester</em><br>
            <br>
            <em>24th</em> - Cuppa and a Chat<br><em>Swanage</em><br>
            <br>
            <em>31st</em> - Time Traveller’s Trail<br><em>Swanage</em><br>
              `;
        }

        if(index === 9){
            // h1Text.textContent="October";
            textparagraph.innerHTML= `
            <em>9th</em> - Bourne Free<br><em>Bournemouth</em><br>
            <br>  
            <em>10th</em> - Cerne Abbas Music Festival<br><em>Cerne Abbas</em><br>
            <br>
            <em>28th</em> - Jurassic Fields<br><em>Bridport</em><br>
            <br>
            <em>31st</em> - Tolpuddle Martyrs Festival<br><em>Tolpuddle</em><br>
              `;
        }

        if(index === 10){
            // h1Text.textContent="November";
            textparagraph.innerHTML= `
            <em>1st</em> - Naturally Beautiful Dorset exhibition<br><em>Durlston</em><br>
            <br>  
            <em>10th</em> - Guided Bird Watching Cruise<br><em>Exmouth</em><br>
            <br>
            <em>24th</em> - Cuppa and a Chat<br><em>Swanage</em><br>
            <br>
            <em>31st</em> - Time Traveller’s Trail<br><em>Swanage</em><br>
              `;
        }

        if(index === 11){
            // h1Text.textContent="December";
            textparagraph.innerHTML= `
            <em>1st</em> - Christmas Tree Wonderland<br><em>Bournemouth</em><br>
            <br>  
            <em>10th</em> - Guided Bird Watching Cruise<br><em>Exmouth</em><br>
            <br>
            <em>20th</em> - Purbeck WALX festival<br><em>Purbeck</em><br>
            <br>
            <em>25th</em> - Christmas<br><em>Poole</em><br>
              `;
        }
  
    });
});

        