
$(document).ready(function() {
    $.get("http://13.233.28.37/get_mnemonic", function(data1)
    {
      console.log(data1);
      var temp= JSON.parse(data1);
      console.log(temp);
      //console.log(temp.data.master_private_key);
    console.log(temp.data.master_public_key);
    //console.log(temp.data.zeroth_public_key);
      //document.getElementById("output").innerHTML = ""+temp.data.master_private_key;
      //document.getElementById("output").innerHTML = ""+temp.data.master_public_key;
      document.getElementById("output").innerHTML = ""+tempdata.zeroth_public_key;


    })

 //{console.log(data)})
})
