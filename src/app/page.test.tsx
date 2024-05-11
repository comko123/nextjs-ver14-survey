import { render, screen } from "@testing-library/react"
import Home from "./page"

it("test text in the document", () => {
  render(<Home />)
  const check = screen.getByText("test")
  expect(check).toBeInTheDocument()
})
