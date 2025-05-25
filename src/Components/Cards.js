import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (!props.courses) return []; // ✅ Early return if courses not loaded yet

        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[category] || []; // ✅ Fallback if category key doesn't exist
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course, index) => (
                    <Card
                        course={course}
                        key={course.id || index}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                ))
            }
        </div>
    );
};

export default Cards;
