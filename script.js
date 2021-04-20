var users = [
    {
        name:'Esther',
        gender:'female',
        talent: 'singing',
        age: 20
    
    },

    {
        name:'Augustine',
        gender:'male',
        talent: 'singing',
        age: 20,
    
    },

    {
        name:'Catherine',
        gender:'female',
        talent: 'painting',
        age: 25
    
    },
    {
        name:'George',
        gender:'male',
        talent: 'singing',
        age: 30
    
    }
]

window.addEventListener('load' , function () {
    var results = document.getElementById('results');
    function find(){

        var talentinput = document.getElementById('talent');
        var  talent = talentinput.Value; 
        console.log (talent);
        

        var ageinput = document.getElementById('age');
        var  age= ageinput.Value; 
        console.log (age);
       


        var genderinput = document.getElementById('gender');
        var gender = genderfield.selectedindex;
        var Gen = genderinput.options.Value;
        console.log(gender);
        
        
        var resultsHTML = '';
        var userlength = user.lenght;

        for (var i =0; 1< userlenght; i++){
            if(gender == 'female' ||users[i].gender){
                if (talent == '' || talent == users[i].talent){
                    if (age== '' || age == users[i].age)
            
            resultsHTML +=  <div class="person.row">\ 
           <img src="images/' user[i].avatar+ '" />\
            <div class="personal.info"> \
                <div>'+users[i].name +</div>\
                <div>users[i].talent+'</div> </div>\
                <button >add as friend</button> </div>

                }
            }
            
        }

            results.innerHTML = resultsHTML;
        
            
        }

        results.innerHTML 
    }


)