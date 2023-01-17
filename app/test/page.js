import Image from 'next/image'

export default function testPage() {
    return (
        <nav className="">
            <Image src="/images/logo.svg" alt="Dev2Dev Logo" width={128} height={77} />
        </nav>
    );
}