'use client'

import { Box, IconButton } from "@mui/material";
import ContainerBodyLayout from "./ContainerBodyLayout";
import Image from "next/image";
import Sidebar from "../common/sidebar";
import { useState } from "react";
import Link from "next/link";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <header className="relative z-20 py-2">
      <ContainerBodyLayout>
        <Box className="flex justify-between items-center gap-3">
          <Box>
            <Link href={"/"} className="">
              <Image
                src="/logos/logo.webp"
                alt="Logo"
                width={300}
                height={69}
                priority
                className="object-cover"
              />
            </Link>
          </Box>
          <Box className="w-2/6 text-right">
            <IconButton
              edge="start"
              onClick={toggleSidebar}
              className="!bg-white rounded-md p-1"
            >
            <TiThMenuOutline />
          </IconButton>
          </Box>
        </Box>
      </ContainerBodyLayout>

      {/* Sidebar drawer */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
