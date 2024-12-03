import Image from 'next/image';
import './gallery.css'

function Page(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td><Image src="/images/tree-1.jpg" alt="" width={50} height={50}></Image></td>
                    <td><Image src="/images/tree-2.jpg" alt="" width={50} height={50}></Image></td>
                    <td><Image src="/images/tree-3.jpg" alt="" width={50} height={50}></Image></td>
                </tr>
                <tr>
                    <td><Image src="/images/tree-4.jpg" alt="" width={50} height={50}></Image></td>
                    <td><Image src="/images/coffee-blue.jpg" alt="" width={50} height={50}></Image></td>
                    <td><Image src="/images/tree-1.jpg" alt="" width={50} height={50}></Image></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Page;