import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from "./Tabs";

const MOCK_TABS = [
  {
    name: "tab1",
    label: "Tab 1",
    content: <div>Content 1</div>,
  },
  {
    name: "tab2",
    label: "Tab 2",
    content: <div>Content 2</div>,
  },
  {
    name: "tab3",
    label: "Tab 3",
    content: <div>Content 3</div>,
  },
];

describe("Tabs component", () => {
  it("renders the correct number of tabs", () => {
    render(<Tabs tabs={MOCK_TABS} />);
    const tabButtons = screen.getAllByRole("button");
    expect(tabButtons).toHaveLength(MOCK_TABS.length);
  });

  it("sets the first tab as active by default", () => {
    render(<Tabs tabs={MOCK_TABS} />);
    const firstTabButton = screen.getByText("Tab 1");
    expect(firstTabButton).toHaveClass("tabs__btn--active");

    const content = screen.getByText("Content 1");
    expect(content).toBeInTheDocument();
  });

  it("switches the active tab when a tab button is clicked", () => {
    render(<Tabs tabs={MOCK_TABS} />);

    const secondTabButton = screen.getByText("Tab 2");
    fireEvent.click(secondTabButton);

    expect(secondTabButton).toHaveClass("tabs__btn--active");

    const content = screen.getByText("Content 2");
    expect(content).toBeInTheDocument();

    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
  });

  it("does not show content from inactive tabs", () => {
    render(<Tabs tabs={MOCK_TABS} />);

    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Content 3")).not.toBeInTheDocument();
  });
});
