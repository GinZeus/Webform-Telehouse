
var check1 = document.getElementById("flexRadioDefault1")
var check2 = document.getElementById("flexRadioDefault2")
var check3 = document.getElementById("flexRadioDefault3")
var check4 = document.getElementById("flexRadioDefault4")
var form = document.getElementById('exampleFormControlTextarea1')

var translate = document.getElementById('trsLangage')

console.log(translate.className == 'language-btn rounded-pill')



check1.onclick = function(){
   
    if(check1.className == 'form-check-input'){
        form.style.display = "none";
    }

}

check2.onclick = function(){
   
    if(check2.className == 'form-check-input'){
        form.style.display = "none";
    }

}

check3.onclick = function(){
   
    if(check3.className == 'form-check-input'){
        form.style.display = "none";
    }

}

check4.onclick = function(){
   
    if(check4.className == 'form-check-input'){
        form.style.display = "block";
        //  form.classList.add('show')
    }

}


translate.onclick = function(){
    var formTrs = document.getElementById('subLan')
    if(formTrs.className == 'sub-lan-hiden'){
        formTrs.className = "sub-lan";
    }else{
        formTrs.className = "sub-lan-hiden";
    }

}