import React, { useState } from 'react';
import { Input, Button, Grid, Spinner } from '@geist-ui/core';
import { useRouter } from 'next/router';
const AddTeacher = () => {
    const [data, setData] = useState<AddInstructorData>(
        {} as AddInstructorData
    );
    const router = useRouter();
    const createInsturctor = async () => {
        const res = await fetch('/api/admin/addInstructor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        router.push('/admin/panel');
        const resData = await res.json();
    };

    if (!data) {
        return (
            <Grid.Container h={10} justify="center">
                <Spinner w={3} mt={10} />
            </Grid.Container>
        );
    }

    return (
        <Grid.Container
            justify="center"
            alignItems="center"
            margin="0"
            xs={24}
            md={24}
            gap={2}
            style={{
                border: '2px solid #eaeaea',
                borderRadius: '5px',
                padding: '2rem',
            }}
        >
            <Grid
                xs={24}
                md={8}
                mx="auto"
                justify="flex-end"
                alignItems="center"
                style={{
                    border: '1px solid #2388fcc0',
                    borderRadius: '5px',
                }}
                className="inputWrapper"
            >
                <Input
                    type="default"
                    placeholder="First Name"
                    width="100%"
                    value={data.first_name}
                    onChange={e =>
                        setData({ ...data, first_name: e.target.value })
                    }
                />
            </Grid>
            <Grid
                xs={24}
                md={8}
                mx="auto"
                style={{
                    border: '1px solid #2388fcc0',
                    borderRadius: '5px',
                }}
                className="inputWrapper"
            >
                <Input
                    type="success"
                    placeholder="Last Name"
                    width="100%"
                    value={data.last_name}
                    onChange={e =>
                        setData({ ...data, last_name: e.target.value })
                    }
                />
            </Grid>
            <Grid
                xs={24}
                md={8}
                mx="auto"
                style={{
                    border: '1px solid #2388fcc0',
                    borderRadius: '5px',
                }}
                className="inputWrapper"
            >
                <label htmlFor="birth_date">Birth Date : </label>
                <input
                    style={{
                        border: 'none',
                        outline: 'none',
                        padding: '0.4rem',
                    }}
                    id="birth_date"
                    type="date"
                    onChange={e =>
                        setData({
                            ...data,
                            birth_date: e.target.value as any,
                        })
                    }
                />
            </Grid>
            <Grid
                xs={24}
                md={8}
                mx="auto"
                style={{
                    border: '1px solid #2388fcc0',
                    borderRadius: '5px',
                }}
                className="inputWrapper"
            >
                <label htmlFor="gender">Gender :</label>
                <select
                    id="gender"
                    value={data.gender}
                    onChange={e =>
                        setData({
                            ...data,
                            gender: e.target.value,
                        })
                    }
                    style={{
                        border: 'none',
                        outline: 'none',
                        padding: '0.4rem',
                    }}
                >
                    <option value="">Select...</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
            </Grid>
            <Grid
                xs={24}
                md={8}
                mx="auto"
                style={{
                    border: '1px solid #2388fcc0',
                    borderRadius: '5px',
                }}
                className="inputWrapper"
            >
                <Input
                    onChange={e => setData({ ...data, email: e.target.value })}
                    value={data.email}
                    type="success"
                    placeholder="Email"
                    width="100%"
                />
            </Grid>
            <Grid
                xs={24}
                md={8}
                mx="auto"
                style={{
                    border: '1px solid #2388fcc0',
                    borderRadius: '5px',
                }}
                className="inputWrapper"
            >
                <Input
                    type="success"
                    placeholder="Phone"
                    width="100%"
                    onChange={e => setData({ ...data, phone: e.target.value })}
                    value={data.phone}
                />
            </Grid>
            <Grid
                xs={24}
                md={8}
                mx="auto"
                style={{
                    border: '1px solid #2388fcc0',
                    borderRadius: '5px',
                }}
                className="inputWrapper"
            >
                <label htmlFor="department">Department :</label>
                <select
                    id="department"
                    onChange={e =>
                        setData({ ...data, department_id: e.target.value })
                    }
                    style={{
                        border: 'none',
                        outline: 'none',
                        padding: '0.4rem',
                    }}
                >
                    <option value="">Select...</option>
                    <option value="1">Computer Engineering</option>
                    <option value="2">Machine Engineering</option>
                    <option value="3">Chemical Engineering</option>
                </select>
            </Grid>
            <Grid
                xs={24}
                md={8}
                mx="auto"
                style={{
                    display: 'flex',
                }}
                justify="center"
                alignItems="center"
            >
                <Button
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={createInsturctor}
                    type="success"
                    auto
                >
                    Add Instructor
                </Button>
            </Grid>
        </Grid.Container>
    );
};

export default AddTeacher;
