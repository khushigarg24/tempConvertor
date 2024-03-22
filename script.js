const celsius=document.querySelector("#celsius"),
fahrenheight=document.querySelector("#fahrenheight");

//set focus on celcius when page loads
window.addEventListener('load',()=>celsius.focus());

//convert celsius to farenheight when value changes
celsius.addEventListener('input',()=>{
    fahrenheight.value=((celsius.value * 9)/5 + 32).toFixed(2);
    // clear fahrenheight input when celsius input is empty
    if(!celsius.value) fahrenheight.value="";
})

// convert fahrenheight to celsius
fahrenheight.addEventListener('input',()=>{
    celsius.value=(((fahrenheight.value - 32)*5)/9).toFixed(2);
    // clear celsius input when fahrenheight input is empty
    if(!fahrenheight.value) celsius.value="";
})