import { useState, useEffect } from 'react'

export function Apitest() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://63be81f6e348cb0762106e84.mockapi.io/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <h1>Profile</h1>
            <h2></h2>
        </div>
    )
}
