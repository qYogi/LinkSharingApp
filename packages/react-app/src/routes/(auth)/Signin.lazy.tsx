import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(auth)/Signin')({
  component: () => <div>Hello /(auth)/Signin!</div>,
})
