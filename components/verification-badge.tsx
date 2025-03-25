import { HelpCircle, ShieldCheck } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface VerificationBadgeProps {
  isVerified: boolean
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
}

export function VerificationBadge({ isVerified, size = "md", showTooltip = true }: VerificationBadgeProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const badge = isVerified ? (
    <div className="text-blue-600 dark:text-blue-400">
      <ShieldCheck className={sizeClasses[size]} />
    </div>
  ) : (
    <div className="text-gray-400">
      <HelpCircle className={sizeClasses[size]} />
    </div>
  )

  if (!showTooltip) return badge

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
        <TooltipContent>
          {isVerified
            ? "Verified user - Identity and credentials have been confirmed"
            : "Unverified user - Identity has not been verified yet"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

