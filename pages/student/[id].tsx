import React from 'react';
import { useRouter } from 'next/router';
import { Tabs } from '@geist-ui/core';
import PersonalInformation from '@/components/common/student/PersonalInformation';
import StudentCourses from '@/components/common/student/Courses';
import Grades from '@/components/common/student/Grades';
import Events from '@/components/common/student/Events';
const Student = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    return (
        <Tabs activeClassName="activeClass" initialValue="1" align="center">
            <Tabs.Item label="information" value="1">
                <PersonalInformation id={id as string} />
            </Tabs.Item>
            <Tabs.Item label="courses" value="2">
                <StudentCourses id={id as string} />
            </Tabs.Item>
            <Tabs.Item label="grades" value="3">
                <Grades id={id as string} />
            </Tabs.Item>
            <Tabs.Item label="events" value="4">
                <Events />
            </Tabs.Item>
        </Tabs>
    );
};

export default Student;
