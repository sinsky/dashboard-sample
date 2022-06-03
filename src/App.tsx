import "./styles/global.css";

import React, { useEffect, useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SimpleNavbar, DataTypes } from "./SimpleNavbar";
import {
  Home,
  Folder,
  Bell,
  Settings,
  Help,
} from 'tabler-icons-react';

const data: DataTypes = {
  content: [
    { link: '#home', label: 'Home', icon: Home },
    { link: '#footer', label: 'Folder', icon: Folder },
    { link: "#notification", label: "Notification", icon: Bell },
  ],
  footer: [
    { link: "#setting", label: "Setting", icon: Settings },
    { link: "#help", label: "Help", icon: Help },
  ]
};

function App() {
  return (
    <div className="flex">
      <SimpleNavbar linkData={data} />
      <div className="grow bg-slate-50"></div>
    </div>
  )
}

export default App
