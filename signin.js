const form=document.querySelector('.login-form');

form.addEventListener('submit', e=>{
    e.preventDefault();
  
    //validation
    const username=form.username.value;
    const password=form.password.value;

    console.log(username, password);

    const usernamePattern=/^[a-zA-Z]{6,12}$/;

    if( ! usernamePattern.test(username))
    {
        //feedback bad info
        form.reset();
        window.alert('That Username is NOT valid !!! Username must contains only Alphabets and max of 12 and min of 6 charcater');
        
    }
    else {
        form.reset();
        window.alert('Welcome To New Page');
        
    }
});