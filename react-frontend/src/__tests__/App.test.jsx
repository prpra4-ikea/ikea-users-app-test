import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

beforeEach(() => {
    fetch.resetMocks();
  });

test("our first test", async ()  => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 1, name: "john Doe", isAdmin: true }]));
  render(<App />);
  const userName = await screen.findByText("john Doe");
  expect(userName).toBeInTheDocument();
});
