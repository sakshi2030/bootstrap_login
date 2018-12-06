
$(document).ready(function() {
    $.get("http://13.233.28.37/get_mnemonic", function(data1)
    {
      console.log(data1);
      var temp= JSON.parse(data1);
      console.log(temp);
      if (data1== master_public_key){
      console.log(temp.data.master_public_key);
      document.getElementById("output").innerHTML = ""+temp.data.master_public_key;

    }
    else if (data1==master_private_key) {

    console.log(temp.data.master_private_key);
    document.getElementById("output").innerHTML = ""+temp.data.master_private_key;

  }
  else if (data1==zeroth_public_key) {

  console.log(temp.data.zeroth_public_key);
  document.getElementById("output").innerHTML = ""+temp.data.zeroth_public_key;

}
else (data1==zeroth_private_key)
{
  console.log(temp.data.zeroth_private_key);
  document.getElementById("output").innerHTML = ""+temp.data.zeroth_private_key;

}
      

    })
})
