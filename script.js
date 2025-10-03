let string = "";

let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);

        if (e.target.innerHTML === "AC") {
            string = "";
            document.querySelector("#input").value = string;
        } else if (e.target.innerHTML === "=") {
            try {
                string = math.evaluate(string).toString(); // /////////////////////  Superest  Important
                document.querySelector("#input").value = string;
                
            } catch (err) {
                document.querySelector("#input").value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == "DEL") {
            string = string.slice(0, -1);
            document.querySelector("#input").value = string;

        } else if (e.target.innerHTML === "%") {
            string = (math.evaluate(string)) / 100;
            string = string.toString();
            document.querySelector("#input").value = string;

        } else {
            string = string + e.target.innerHTML;
            document.querySelector("#input").value = string;
        }
    });
});