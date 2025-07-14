import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@/components/ui/button"; 

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("has default styles", () => {
    render(<Button>Click</Button>);
    const button = screen.getByText("Click");
    expect(button).toHaveClass("bg-primary");
  });
});
