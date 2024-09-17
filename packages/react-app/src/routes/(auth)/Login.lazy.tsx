import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(auth)/Login')({
  component: () => <div>Hello /(auth)/Login!</div>,
})
