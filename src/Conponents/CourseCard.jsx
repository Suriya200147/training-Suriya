import React from 'react'

const CourseCard = (props) => {
return (
    <div style={divStyle}>
    <p style={textStyle}>
        <strong>{props.title}</strong>
    </p>
    <p style={textStyle}>{props.Duration}</p>
    <p style={textStyle}>{props.price}</p>
    </div>
)
}

const divStyle = {
    border: "1px solid black",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
};
const textStyle = {
    fontSize: 20,
    marginBottom: 20,
};

export default CourseCard
