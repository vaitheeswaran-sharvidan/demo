const course_1 = "HTML";

function Course () {
    return (
        <div className = "card">
            <img src="https://cdn.shopaccino.com/igmguru/products/react-js-training-igmguru_1474547454_l.jpg?v=547" alt="react course"/>
            <h2>{course_1}</h2>
            <p>Learn React in an interactive course with quizzes!</p>
        </div>
    )
}
export default Course;