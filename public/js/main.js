// alert();

// console.log(BASE_URL);

// alert(BASE_URL);

// cargo los countrys con ajax
$.ajax({
  url: BASE_URL+'/countrys',   
  dataType: 'json'    
})
.done(function(result) {

 // console.log(result); 

 $.each(result, function(index, val) {

    // console.log(val);
    $("#country").append('<option value="'+ val.id + '">' + val.country + '</option>')  

 });
});


// cargo los states con ajax
$.ajax({
  url: BASE_URL+'/states',   
  dataType: 'json'    
})
.done(function(result) {

 // console.log(result); 

 $.each(result, function(index, val) {

   $("#state").append('<option value="'+ val.id + '">' + val.state + '</option>') 

 });
});


