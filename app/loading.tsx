import { LoadingSpinner } from "@/components/ui/loading-spinner"
import Image from "next/image"

export default function Loading() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <Image src="/images/mglink-logo.png" alt="MGLink Connect" width={80} height={80} className="mb-6" />
      <LoadingSpinner size={40} text="Loading MGLink Connect..." />
    </div>
  )
}

