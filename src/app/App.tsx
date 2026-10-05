import { Route, Router } from "@solidjs/router"
import { Library } from "@/pages/Library"
import { Layout } from "./Layout"

export function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Library} />
    </Router>
  )
}
