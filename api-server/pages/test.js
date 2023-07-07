import Image from "next/image";
import Link from "next/link";
import matter from "gray-matter";


import { getSortedPostsData } from '../lib/posts';
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}






export default function Home({ allPostsData }) {
    return (
        <>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <h2 >Blog</h2>
            <ul>
                {allPostsData.map(({ id, firstName, lastName }) => (
                    <li
                        key={id}>
                        {firstName}
                        {lastName}
                        <br />
                        {id}
                        <br />
                    </li>
                ))}
            </ul>
        </>
    );
}