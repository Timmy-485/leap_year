let leapYear = () => {
    let year = document.getElementById("input").value;
    let output = document.getElementById("output");
    const imgField = document.getElementById("outputImage")
    output.classList.add("showOutput")
    imgField.classList.add("showOutput")

    let state = false;
    if((year>=1)){
        if(year%4 == 0){
            if(year%100 == 0){
                if(year%400 == 0){
                    state = true;
                }
            } else{
                state = true;
            }
        }
    }


    if(state){
        output.value = `${year} is a leap year`
        imgField.src = "../images/isLeap.png"
    }
    else{
        output.value = `${year} is not a leap year`
        imgField.src = "../images/isNotLeap.jpg"
    }
}