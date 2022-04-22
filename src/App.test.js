import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Top from './components/Top';

describe("App renders", () => {
  it("Renders App", () => {
    const {container} = render(<App />)
    expect(container).toMatchSnapshot()
  })
  it("Renders top section", () => {
    const { getByRole } = render(<Top />)
    expect(getByRole("heading").textContent).toMatch(/to do list/i)
  })
})

describe("Users can add task", () => {
  beforeEach(() => {
    const {container} = render(<App />)
  })
  it("Button show modal", () => {
    const btn = screen.getByRole("button", {name: "+Add Task"})
    userEvent.click(btn)
    expect(screen.getByRole("modal").style.display).toMatch(/flex/i)

  })
})