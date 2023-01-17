import Image from 'next/image'
export default function testPage() {
    return (
        <nav>
            <Image src="/images/logo.png" alt="Dev2Dev Logo" width={128} height={77} />
        </nav>
    );
}