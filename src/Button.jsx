
function Button () {

    let count = 0;
    const handleClick = (e, name) => {
        if (count < 3) {
            count++;
            console.log(`${name} click me ${count} time/s`);
        }
        else console.log(`${name} stop clicking me`);
    }

    return (<button onClick={(e) => handleClick(e, "phoebe")}>Click me ;)</button>)
}

export default Button;