import React from 'react';
import { useRouter } from 'next/router';
import { Tabs } from '@geist-ui/core';
import PersonalInformation from '@/components/common/instructor/PersonalInformation';
import Courses from '@/components/common/instructor/Courses';
import Grades from '@/components/common/instructor/Grades';
import Events from '@/components/common/instructor/Events';
import { GrCircleInformation } from 'react-icons/gr';
import { SiCoursera } from 'react-icons/si';
import { FiList } from 'react-icons/fi';
import { MdEventNote } from 'react-icons/md';
const InstructorPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Tabs activeClassName="activeClass" initialValue="1" align="center">
            <Tabs.Item
                label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <GrCircleInformation style={{ marginRight: '5px' }} />
                        <span>personal information</span>
                    </div>
                }
                value="1"
            >
                <PersonalInformation id={id as string} />
            </Tabs.Item>
            <Tabs.Item
                label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <SiCoursera style={{ marginRight: '5px' }} />
                        <span>courses</span>
                    </div>
                }
                value="2"
            >
                <Courses id={id as string} />
            </Tabs.Item>
            <Tabs.Item
                label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FiList style={{ marginRight: '5px' }} />
                        <span>grades</span>
                    </div>
                }
                value="3"
            >
                <Grades id={id as string} />
            </Tabs.Item>
            <Tabs.Item
                label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MdEventNote style={{ marginRight: '5px' }} />
                        <span>events</span>
                    </div>
                }
                value="4"
            >
                <Events />
            </Tabs.Item>
        </Tabs>
    );
};

export default InstructorPage;
