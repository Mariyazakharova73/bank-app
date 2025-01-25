import { render, screen } from "@testing-library/react";
import CardInfo from "./CardInfo";

const MOCK_TABS = [
  { id: 1, label: "About card", content: "Content for Tab 1" },
  { id: 2, label: "Rates and conditions", content: "Content for Tab 2" },
];

vi.mock("../Tabs/Tabs", () => ({
  __esModule: true,
  default: ({ tabs }: { tabs: typeof MOCK_TABS }) => (
    <div data-testid="tabs">
      {tabs.map((tab) => (
        <div key={tab.id}>{tab.label}</div>
      ))}
    </div>
  ),
}));

describe("CardInfo component", () => {
  it("checks tab content is not rendered initially", async () => {
    render(<CardInfo />);
    MOCK_TABS.forEach((tab) => {
      const tabContent = screen.queryByText(tab.content);
      expect(tabContent).not.toBeInTheDocument();
    });
  });

  it("renders the Tabs component", () => {
    render(<CardInfo />);

    const tabsElement = screen.getByTestId("tabs");
    expect(tabsElement).toBeInTheDocument();
  });

  it("renders the correct tab labels", () => {
    render(<CardInfo />);

    MOCK_TABS.forEach((tab) => {
      const tabLabel = screen.getByText(tab.label);
      expect(tabLabel).toBeInTheDocument();
    });
  });
});
