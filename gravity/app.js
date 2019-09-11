radius = [];
avg_force = [];
ten = Math.pow(10, -11);
G = 6.67 * ten;



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
    r = $("#radius").val();
    console.log('mass1: '+ m1);
    console.log('mass2: '+ m2);
    F = (G * m1 * m2)/(Math.pow(r, 2));
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
    containment: ".card-body"
    });

    new ClipboardJS('#addBtn');




$("#addBtn").click(function(){
    /*var check = false;
    console.log(r);
    if(radius.length == 0){
        radius.push(r);
        console.log(radius);
    }
    else{
        for(i=0; i <= radius.length; i++){
            if(radius[i] == r){
                console.log('already exist');
                console.log(radius);
                check = true
                trial2[i] = F;
                console.log(F);
            }
        }
        if(check == false){
            radius.push(r);
            console.log(radius);
        }
    } */
    addBtn = document.getElementById('addBtn');
    addBtn.setAttribute("data-clipboard-text", F);


})


///this needs to be planned 

/* 
A copy to clipboard button instead of add to graph.
I will have to make a seperate element first.

*/  

    


$("#avgBtn").click(function(){
    r1 = parseFloat($('#r1').val());
    radius.push(r1);
    r1t1 = parseFloat($('#r1t1').val());
    r1t2 = parseFloat($('#r1t2').val());
    r1t3 = parseFloat($('#r1t3').val());
    r1a = (r1t1+r1t2+r1t3)/3;
    avg_force.push(r1a);
    console.log(r1a);
    document.getElementById('r1a').innerHTML = r1a;

    r2 = parseFloat($('#r2').val());
    radius.push(r2);
    r2t1 = parseFloat($('#r2t1').val());
    r2t2 = parseFloat($('#r2t2').val());
    r2t3 = parseFloat($('#r2t3').val());
    r2a = (r2t1+r2t2+r2t3)/3;
    avg_force.push(r2a);
    //console.log(r2a);
    document.getElementById('r2a').innerHTML = r2a;

    r3 = parseFloat($('#r3').val());
    radius.push(r3);
    r3t1 = parseFloat($('#r3t1').val());
    r3t2 = parseFloat($('#r3t2').val());
    r3t3 = parseFloat($('#r3t3').val());
    r3a = (r3t1+r3t2+r3t3)/3;
    avg_force.slice(2, r3a);
    avg_force.push(r3a);
    document.getElementById('r3a').innerHTML = r3a;

    r4 = parseFloat($('#r4').val());
    radius.push(r4);
    r4t1 = parseFloat($('#r4t1').val());
    r4t2 = parseFloat($('#r4t2').val());
    r4t3 = parseFloat($('#r4t3').val());
    r4a = (r4t1+r4t2+r4t3)/3;
    avg_force.push(r4a);
    console.log(r4a);
    document.getElementById('r4a').innerHTML = r4a;

    r5 = parseFloat($('#r5').val());
    radius.push(r5);
    r5t1 = parseFloat($('#r5t1').val());
    r5t2 = parseFloat($('#r5t2').val());
    r5t3 = parseFloat($('#r5t3').val());
    r5a = (r5t1+r5t2+r5t3)/3;
    avg_force.push(r5a);
    console.log(r5a);
    document.getElementById('r5a').innerHTML = r5a;
    drawChart(radius, avg_force);

    
    
});

function drawChart(x, y){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: x,
        datasets: [{
            label: 'Radius vs Gravitational Force',
            data: y,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

function deleteChart(chart){
    chart.destroy();
}


$('#clrBtn').click(function(){
    $('#r1').innerHTML= '';
    deleteChart(myChart);

    

})






