import Layout from "@/components/Layout";

interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
    website: string,
}

interface UserDetailProps {
    user: User;
}
export default function BlogDetail(props: UserDetailProps) {
    const { user } = props;
    return (
        <>
            <Layout pageTitle="Detail Blog">
                <div className="border border-3 shadow-lg mt-10 ">
                    <div className='p-10 m-3 shadow-lg  rounded-lg w-64 hover:scale-105 transition-all inline-block '>
                        <div className="flex flex-wrap">
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.website}</p>
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await response.json();
    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    }));
    return {
        paths,
        fallback: false,
    }
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();

    return {
        props: {
            user,
        },
    }
}
