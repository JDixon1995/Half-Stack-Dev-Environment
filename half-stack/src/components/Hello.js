const Hello = ({object}) => {

    const name = object.name;
    const age = object.age;

    const bornYear = () => {
        const yearNow = new Date().getFullYear();
        return yearNow - age;
    }
    
    return (
        <div>
            <p>Hello, {name} , you are {age} years old. </p>
            <p>You were probably born in {bornYear()} . </p>
        </div>
    )
}

export default Hello;