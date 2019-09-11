<?php

$db = "gravity";
$dbuser = "root";
$dbpass = "pwdpwd";
$dbhost = "localhost";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $db);

 ?>

 <html>
     <body>
         <script>

 G = Math.pow(6.67, -11);

document.getElementById('m1').addEventListener("input", function(){
    m1 = $(this).val();
    document.getElementById('mass1').innerHTML = 'Mass 1: ' + m1;
    console.log(m1);
    if(m1 < 3333){
        $('#ball-left').width('50%').height('auto')
    }
    if(m1 < 6666 && m1 > 3333){
        $('#ball-left').width('300px').height('300px')
    }

})

document.getElementById('m2').addEventListener("input", function(){
    m2 = $(this).val();
    document.getElementById('mass2').innerHTML = 'Mass 2: ' + m2;
    console.log(m2);

})




$("#button").click(function (){
    let r = $("#radius").val();
    console.log('mass1: '+ m1);
    console.log('mass2: '+ m2);
    let F = (G * m1 * m2)/(Math.pow(r, 2));
    document.getElementById("force").innerHTML = 'Gravitational Force: ' + F;


})

$('#ball-left').draggable({
    axis: "x",
    containment: ".card-body"
    });

$('#ball-right').draggable({
    axis: "x",
    containment: ".card-body"
    });

$('#ruler').draggable({
    axis: "x",
    containment: ".card-body"
    });


$("#addBtn").click(function(){
    console.log('you pressed the add button');
})






         </script>
     </body>
 </html>