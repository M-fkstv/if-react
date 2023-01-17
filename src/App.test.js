import { render, screen } from "@testing-library/react";
import App from "./Components/App/App";

test("h2 test", () => {
  render(<App />);
  const sectionName = screen.getByText(/Homes Guest Loves/);
  expect(sectionName).toBeInTheDocument();
});
