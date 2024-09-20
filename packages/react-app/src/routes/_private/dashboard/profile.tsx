import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/dashboard/profile')({
  component: () => <div>Hello /_private/dashboard/profile!</div>,
})
