var fields = document.querySelectorAll('.tbox input, .tbox2 input'),
btn = document.querySelector('.btn'),
password = document.querySelector('.show-password');

function check(){
    if(fields[0].value != "" && fields[1].value != "")
    btn.disabled = false;
    else
    btn.disabled = true;
    
}

fields[0].addEventListener('keyup',check);
fields[1].addEventListener('keyup',check);

password.addEventListener('click', function(){
    if(this.classList[2] == "la-eye-slash"){
        this.classList.remove('la-eye-slash');
        this.classList.add('la-eye');
        fields[1].type = 'text';
    }else{
        this.classList.remove('la-eye');
        this.classList.add('la-eye-slash');
        fields[1].type = 'password';
    }
});