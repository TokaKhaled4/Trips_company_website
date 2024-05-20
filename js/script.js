document.getElementById("loginButton").addEventListener("click", function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});


var btnTrans1 = document.getElementById('btn_trans1');
var btnTrans2=document.getElementById("btn_trans2");
var btnTrans3=document.getElementById("btn_trans3");
var tooltip1 = document.querySelector('.tooltip1');
var tooltip2 = document.querySelector('.tooltip2');
var tooltip3 = document.querySelector('.tooltip3');
var tooltip4 = document.querySelector('.tooltip4');
var tooltip5 = document.querySelector('.tooltip5');
var tooltip6 = document.querySelector('.tooltip6');

btnTrans1.addEventListener('mouseenter', function() {
    tooltip1.style.display = 'inline';
});

btnTrans1.addEventListener('mouseleave', function() {
    tooltip1.style.display = 'none';
});

btnTrans1.addEventListener('click', function() {
    tooltip1.style.display = 'none';
    tooltip2.style.display = 'inline';

    setTimeout(function() {
        tooltip2.style.display = 'none';

        alert("Copied");
    }, 500); 
});


btnTrans2.addEventListener('mouseenter', function() {
    tooltip3.style.display = 'inline';
});

btnTrans2.addEventListener('mouseleave', function() {
    tooltip3.style.display = 'none';
});

btnTrans2.addEventListener('click', function() {
    tooltip3.style.display = 'none';
    tooltip4.style.display = 'inline';

    setTimeout(function() {
        tooltip4.style.display = 'none';

        alert("Copied");
    }, 500); 
});


btnTrans3.addEventListener('mouseenter', function() {
    tooltip5.style.display = 'inline';
});

btnTrans3.addEventListener('mouseleave', function() {
    tooltip5.style.display = 'none';
});

btnTrans3.addEventListener('click', function() {
    tooltip5.style.display = 'none';
    tooltip6.style.display = 'inline';

    setTimeout(function() {
        tooltip6.style.display = 'none';

        alert("Copied");
    }, 500); 
});