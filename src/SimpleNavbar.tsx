import React, { useState, FC } from 'react';
import { Navbar, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  ArrowNarrowLeft,
  Menu2,
  IconProps,
} from 'tabler-icons-react';

export type LocationType = {
  link: string;
  label: string;
  icon: FC<IconProps>;
  Content?: any;
}

export type DataTypes = {
  content: LocationType[];
  footer: LocationType[];
}

type NavbarTypes = {
  linkData: DataTypes;
  active: LocationType;
  setActive: React.Dispatch<React.SetStateAction<LocationType>>;
}

export const SimpleNavbar = ({ linkData, active, setActive }: NavbarTypes) => {
  const [openNav, navHandler] = useDisclosure(true);

  const linkOnClick = (event: React.MouseEvent<HTMLAnchorElement>, item: LocationType) => {
    event.preventDefault();
    location.replace(item.link);
    setActive(item);
  }

  const linksContent = linkData.content.map(item => {
    const activeStyle = item.label === active.label ? "border-l-4 border-blue-300 bg-blue-100" : "ml-1 hover:ml-0 hover:border-l-4 border-slate-600 hover:bg-slate-100";
    return (
      <a className={"flex justify-start flex-nowrap items-center p-2 text-md text-slate-700 " + activeStyle} href={item.link} key={item.label}
        onClick={(e) => linkOnClick(e, item)}>
        <item.icon className="m-2" />
        <span className={"m-2 whitespace-nowrap " + (!openNav && "hidden")}>{item.label}</span>
      </a>
    )
  });
  const linksFooter = linkData.footer.map(item => {
    const activeStyle = item.label === active.label ? "border-l-4 border-blue-300 bg-blue-100" : "ml-1 hover:ml-0 hover:border-l-4 border-slate-600 hover:bg-slate-100";
    return (
      <a className={"flex justify-start flex-nowrap items-center p-2 text-md text-slate-700 " + activeStyle} href={item.link} key={item.label}
        onClick={(e) => linkOnClick(e, item)}>
        <item.icon className="m-2" />
        <span className={"m-2 whitespace-nowrap " + (!openNav && "hidden")}>{item.label}</span>
      </a>
    )
  });

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
        {linksContent}
      </Navbar.Section>

      <Navbar.Section className="border-t">
        {linksFooter}
      </Navbar.Section>
    </Navbar>
  );
}
