function add()
{

    let a = Number(document.getElementById("fn").value);
    let b = Number(document.getElementById("sn").value);

    let sum = a + b;

    document.getElementById("result").innerHTML = "The sum is: " + sum;

}