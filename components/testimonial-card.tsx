import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function TestimonialCard({
  name,
  role,
  content,
  avatar
}: {
  name: string
  role: string
  content: string
  avatar?: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <p className="text-muted-foreground mb-4">"{content}"</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
