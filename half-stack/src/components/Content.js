const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
    return (
    <div>
        <p>Lesson : {part1} / Exercises : {exercises1}</p>
        <p>Lesson : {part2} / Exercises : {exercises2} </p>
        <p>Lesson : {part3} / Exercises : {exercises3} </p>
    </div>
    )
}

export default Content;