import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
export default function landingPage() {
  return(
    <div>
        <h1>Welcome to the landing page!</h1>
        <Link href="/topics/back-end">
            <ul>
                <li>
                    <p>Back-End</p>
                </li>
            </ul>
        </Link>
        <Link href="/topics/faq">
            <ul>
                <li>
                    <p>FAQ</p>
                </li>
            </ul>
        </Link>
        <Link href="/topics/front-end">
            <ul>
                <li>
                    <p>Front-End</p>
                </li>
            </ul>
        </Link>
        <Link href="/topics/fullstack">
            <ul>
                <li>
                    <p>Fullstack</p>
                </li>
            </ul>
        </Link>
        <Link href="/topics/job-offers">
            <ul>
                <li>
                    <p>Job Offers</p>
                </li>
            </ul>
        </Link>
        <Link href="/topics/mobile-dev">
            <ul>
                <li>
                    <p>Mobile Developers</p>
                </li>
            </ul>
        </Link>
        <Link href="/topics/off-topic">
            <ul>
                <li>
                    <p>Off topic</p>
                </li>
            </ul>
        </Link>
    </div>
  )
}