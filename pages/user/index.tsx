import React from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router';

interface UserProps {
    dataUsers: Array<any>;
}
export default function User(props: UserProps) {
    const { dataUsers } = props;
    const router = useRouter();

    console.log(dataUsers);
    return (
        <Layout pageTitle='Page User'>
            <div className="border border-3 shadow-lg mt-10 ">
                {dataUsers.map(user => {
                    return (
                        <>
                            <div key={user.id} onClick={() => router.push(`/user/${user.id}`)} className='p-10 m-3 shadow-lg  rounded-lg w-64 hover:scale-105 transition-all inline-block '>
                                <div className="flex flex-wrap">
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        </>
                    )
                })};
            </div>
        </Layout >
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await response.json();
    return {
        props: {
            dataUsers,
        },
    }
}
