// app/(archive)/naming-the-harm/page.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SupplementalRedirect() {
    const router = useRouter()

    useEffect(() => {
        router.replace("/")
    }, [router])

    return null
}