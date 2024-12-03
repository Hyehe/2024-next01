import Image from "next/image";


function Page(props) {
    return (
        <>
            <h2>자식 페이지 ~~ Creat!! </h2>
            <p><Image src="/images/tree-2.jpg" width={100} height={100} /></p>
        </>
    );
}

export default Page;