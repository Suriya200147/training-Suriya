import React from 'react';
import Layout from './../Template/Layout';
import Contact from './Contact';
import Home from './Home';
import CourseCard from './../Conponents/CourseCard';

const Course = () => {
return (
    <Layout>
        <h1 className="text-5xl font-bold">หน้าหลัก</h1>
        <CourseCard
            title="Basic React Native"
            Duration="5 days"
            price="7500"
        />
        <CourseCard
            title="Power BI Dashboard"
            Duration="4 days"
            price="5500"
        />
        <CourseCard
            title="UI Design with Figma"
            Duration="3 days"
            price="5000"
        />
        <CourseCard
            title="Cross Platform with Flutter"
            Duration="5 days"
            price="6500"
        />
        </Layout>
    )
}

export default Course;