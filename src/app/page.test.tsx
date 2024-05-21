import { render, screen } from "@testing-library/react"
import Home from "./page"

it.skip("test text in the document", () => {
  render(<Home />)
  const check = screen.getByText("prat1")
  expect(check).toBeInTheDocument()
})
