import React, { useEffect, useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  ArrowNarrowLeft,
  Menu2,
  Home,
  Link,
  Folder,
  FileText,
  Bell,
  Settings,
  Help,
} from 'tabler-icons-react';

const data = [
  { link: '', label: 'Home', icon: Home },
  { link: '', label: 'Folder', icon: Folder },
  { link: "", label: "Notification", icon: Bell },
];

export const SimpleNavbar = () => {
  const [active, setActive] = useState(data[0].label);
  const [openNav, navHandler] = useDisclosure(true);

  const links = data.map(item => {
    const linkEvent = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setActive(item.label);
    };
    const activeStyle = item.label === active ? "border-l-4 border-blue-300 bg-blue-100" : "ml-1 hover:ml-0 hover:border-l-4 border-slate-600 hover:bg-slate-100";
    return (
      <a className={"flex justify-start flex-nowrap items-center p-2 text-md text-slate-700 " + activeStyle} href={item.link} key={item.label}
        onClick={linkEvent}>
        <item.icon className="m-2" />
        <span className={"m-2 whitespace-nowrap " + (!openNav && "hidden")}>{item.label}</span>
      </a>
    )
  })

  return (
    <Navbar className={"shrink-0 h-screen p-4 transition-all " + (openNav ? "w-[300px]" : "w-24")}>
      <Navbar.Section grow>
        <Group className={"flex justify-between flex-nowrap pb-4 mb-6 border-b font-bold text-xl"}>
          <div className={"whitespace-nowrap " + (!openNav && "hidden")}>Dashboard Sample</div>
          <button type="button" onClick={() => navHandler.toggle()} className="p-2">
            {
              openNav ? <ArrowNarrowLeft className="m-2" /> : <Menu2 className="m-2" />
            }
          </button>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className="border-t">
        <a href="#setting" onClick={(event) => event.preventDefault()} className="flex justify-start items-center p-2 text-md text-slate-700 ml-1 hover:ml-0 hover:border-l-4 border-slate-600 hover:bg-slate-100">
          <Settings className="m-2" />
          <span className={"m-2 " + (!openNav && "hidden")}>設定</span>
        </a>

        <a href="#help" onClick={(event) => event.preventDefault()} className="flex justify-start items-center p-2 text-md text-slate-700 ml-1 hover:ml-0 hover:border-l-4 border-slate-600 hover:bg-slate-100">
          <Help className="m-2" />
          <span className={"m-2 " + (!openNav && "hidden")}>Help</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
