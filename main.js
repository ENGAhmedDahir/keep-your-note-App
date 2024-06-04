
let noteArea = document.querySelector('.note-area');
let noteText = document.querySelector('.note-text');
let title = document.querySelector('.title');
let notes = document.querySelector('.notes');
let note = document.querySelector('.note');
let img = document.querySelector('.input-file');

///event listeners
noteArea.addEventListener("click", display);
document.addEventListener('click', (e) => {
    let isClicked = noteArea.contains(e.target);
    if (!isClicked) {
        hideNoteArea();

        
        if (title.value === '' && noteText.value === '') {
            return;
        }
        let fileInput = document.getElementById('fileInput');
        addNote(title.value, noteText.value, fileInput.files[0]);
        title.value ='';
    noteText.value ="";
    img.value='';
    }
    
    
});
 document.addEventListener ('mouseover',showTrash);
 document.addEventListener('mouseout', hideTrash);
document.addEventListener('click', removeNote);


function display(){
    noteText.style = 'display:block';
}
//hide note area
function hideNoteArea (){
    noteText.style = ' display:none';
}
 ///add note


function addNote(title, noteText, img) {
    let reader = new FileReader();
    reader.onload = function(event) { 
        let imageData = event.target.result; 
        notes.innerHTML += `
            <div class="note">
                <img src="${imageData}" alt="User Image">
                <h2 class="title-text">${title}</h2>
                <p class="note-blog">${noteText}</p>
                <i class="fa-sharp fa-solid fa fa-trash " style="position: relative; left: 85%;
                top: 50%; color:darkcyan ;
                display:none;
            font-size: 45px;"></i>
            </div>`;
            
           
           
    };
    if (img) {
        reader.readAsDataURL(img); 
    } else {
        
        notes.innerHTML +=  `<div class="note">
        <h2 class="title-text">${title}</h2>
        <p class="note-blog">${noteText}</p>
        <i class="fa-sharp fa-solid fa-trash " style="position: relative; left: 85%;
        top: 50%; color:darkcyan ;
    display:none;
    font-size: 45px;"></i>
    </div>`;
           
    }
}

///show trash
function showTrash( e ){
    if (e.target.classList.contains('note')){
        e.target.querySelector('i').style.display= 'block'; ;
         
 
}

}

// hide trash
function hideTrash(e){
    if (e.target.classList.contains('note')){
        e.target.querySelector('.fa-trash').style.display= 'none'; ;
}
}

/// remove note
function removeNote(e) {
    if (e.target.classList.contains('fa-trash')) {
       e.target.parentElement.remove();
    }
}