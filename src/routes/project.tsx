import { createFileRoute } from '@tanstack/react-router'
import { ProjectShowcase } from '../components/jack/ProjectShowcase'

export const Route = createFileRoute('/project')({
  component: ProjectRoute,
})

function ProjectRoute() {
  return <ProjectShowcase />
}
