import "./styles/global.css";

import React, { useEffect, useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SimpleNavbar } from "./SimpleNavbar";

function App() {
  return (
    <div className="flex">
      <SimpleNavbar />
      <div className="grow bg-slate-50"></div>
    </div>
  )
}

export default App
