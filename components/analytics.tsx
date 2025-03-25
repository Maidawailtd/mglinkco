"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // In a real app, you would send analytics data to your analytics provider
      // For example: Google Analytics, Mixpanel, Segment, etc.
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      console.log(`Page view: ${url}`)

      // Example of how you would track with Google Analytics
      // if (typeof window.gtag === 'function') {
      //   window.gtag('config', 'GA-MEASUREMENT-ID', {
      //     page_path: url,
      //   })
      // }
    }
  }, [pathname, searchParams])

  return null
}

