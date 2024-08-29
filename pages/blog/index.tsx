import React from 'react'
import Layout from "@/components/Layout"

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogProps {
    dataBlog: Post[];
}

export default function Blog(props: BlogProps) {
    const { dataBlog } = props;
    return (

        <Layout pageTitle='Page Blog'>
            <div className="border border-3 shadow-lg mt-10 ">
                {dataBlog.map((blog) => (
                    <div key={blog.id} className='p-10 m-3 shadow-lg  rounded-lg w-64 hover:scale-105 transition-all inline-block '>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await response.json();

    return {
        props: {
            dataBlog,
        }
    }
}
