let string = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === "AC") {
            string = "";
            document.querySelector("#input").value = string;
        } else if (value === "=") {
            try {
                string = math.evaluate(string).toString();
                document.querySelector("#input").value = string;
            } catch (err) {
                document.querySelector("#input").value = "Error";
                string = "";
                setTimeout(() => {
                    document.querySelector("#input").value = "0";
                }, 1500);
            }
        } else if (value === "DEL") {
            string = string.slice(0, -1);
            document.querySelector("#input").value = string || "0";
        } else if (value === "%") {
            try {
                string = (math.evaluate(string) / 100).toString();
                document.querySelector("#input").value = string;
            } catch (err) {
                document.querySelector("#input").value = "Error";
                string = "";
            }
        } else {
            string = string + value;
            document.querySelector("#input").value = string;
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key >= '0' && key <= '9' || key === '.') {
        string += key;
        document.querySelector("#input").value = string;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        string += key;
        document.querySelector("#input").value = string;
    } else if (key === 'Enter' || key === '=') {
        try {
            string = math.evaluate(string).toString();
            document.querySelector("#input").value = string;
        } catch (err) {
            document.querySelector("#input").value = "Error";
            string = "";
        }
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        document.querySelector("#input").value = string || "0";
    } else if (key === 'Escape') {
        string = "";
        document.querySelector("#input").value = "0";
    }
});