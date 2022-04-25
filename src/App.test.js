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
    let {container} = render(<App />)
  })
  it("Add task button shows modal", () => {
    const btn = screen.getByRole("button", {name: "+Add Task"})
    userEvent.click(btn)
    expect(screen.getByRole("modal").style.display).toMatch(/flex/i)
  })
  it("Renders tasks", () => {
    const tasks = screen.queryAllByRole("task-container")
    expect(tasks.length).toBeGreaterThan(0)
  })
  it("Tasks can be added and rendered", async() => {
    const tasksBefore = screen.queryAllByRole("task-container")
    const btn = screen.getByRole("button", {name: "+Add Task"})
    userEvent.click(btn)
    let userInput = screen.getByRole("inputText")
    await userEvent.type(userInput, `test`)
    const submitBtn = screen.getByRole("close")
    userEvent.click(submitBtn)
    const tasksAfter = screen.queryAllByRole("task-container")
    expect(tasksBefore.length).toBeLessThan(tasksAfter.length)
  })
})