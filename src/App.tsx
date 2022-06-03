import "./styles/global.css";

import React, { useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { SimpleNavbar, DataTypes, LocationType } from "./SimpleNavbar";
import { Home, Folder, Bell, Settings, Help, } from 'tabler-icons-react';
import { HomeView } from "./contents/HomeView";
import { FolderView } from "./contents/FolderView";
import { NotificationView } from "./contents/NotificationView";
import { SettingView } from "./contents/SettingView";
import { HelpView } from "./contents/HelpView";

const data: DataTypes = {
  content: [
    { link: '#home', label: 'Home', icon: Home, Content: HomeView },
    { link: '#footer', label: 'Folder', icon: Folder, Content: FolderView },
    { link: "#notification", label: "Notification", icon: Bell, Content: NotificationView },
  ],
  footer: [
    { link: "#setting", label: "Setting", icon: Settings, Content: SettingView },
    { link: "#help", label: "Help", icon: Help, Content: HelpView },
  ]
};

const App = () => {
  const [active, setActive] = useState<LocationType>(data.content[0]);
  useDocumentTitle(active.label);

  return (
    <div className="flex">
      <SimpleNavbar linkData={data} active={active} setActive={setActive} />
      <div className="grow bg-slate-50">
        {active.Content !== undefined && <active.Content />}
      </div>
    </div>
  )
}

export default App
