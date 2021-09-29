const Counter = () => {

    let counter = 1;

    const increaseCount = () => counter += 1;

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

export default Counter;