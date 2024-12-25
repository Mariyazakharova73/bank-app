import cn from "classnames";
import { FC, ReactNode, useState } from "react";
import "./Tabs.scss";

interface Tab {
  name: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].name);

  const activeContent = tabs.find((tab) => tab.name === activeTab)?.content;

  return (
    <div className="tabs">
      <div className="tabs__btns">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={cn("tabs__btn", {
              "tabs__btn--active": activeTab === tab.name,
            })}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs__content">{activeContent}</div>
    </div>
  );
};

export default Tabs;
