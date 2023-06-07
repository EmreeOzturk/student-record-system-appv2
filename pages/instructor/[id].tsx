import React from 'react';
import { useRouter } from 'next/router';
import { Tabs } from '@geist-ui/core';
import PersonalInformation from '@/components/common/instructor/PersonalInformation';
import Courses from '@/components/common/instructor/Courses';
import Grades from '@/components/common/instructor/Grades';
import Events from '@/components/common/instructor/Events';

const InstructorPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Tabs activeClassName="activeClass" initialValue="1" align="center">
            <Tabs.Item label="information" value="1">
                <PersonalInformation id={id as string} />
            </Tabs.Item>
            <Tabs.Item label="courses" value="2">
                <Courses id={id as string} />
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

export default InstructorPage;
