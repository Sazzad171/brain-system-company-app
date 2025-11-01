'use client'

import { Drawer, List, ListItemButton, ListItemText, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import Link from 'next/link'

type SidebarProps = {
  open: boolean
  onClose: () => void
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Services',
    submenu: [
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'IOT Solutions', href: '/services/iot-solutions' },
      { label: 'Big Data Service', href: '/services/big-data-service' },
      { label: 'Cyber Security', href: '/services/cyber-security' },
      { label: 'Web Apps', href: '/services/web-apps' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>("Services");

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{ className: '!bg-[#070707] !text-white min-w-64 max-w-[300px]' }}
    >
      {/* Close Button */}
      <div className="flex justify-end p-2">
        <IconButton onClick={onClose} className="text-white">
          <CloseIcon className='text-white' />
        </IconButton>
      </div>

      {/* Menu List */}
      <List className="flex flex-col">
        {menuItems.map((item) => (
          <div key={item.label}>
            <ListItemButton
              onClick={() =>
                item.submenu ? toggleSubmenu(item.label) : onClose()
              }
              className="hover:!bg-gray-700 !border-b !border-solid !border-b-[#FFFFFF1A]"
            >
              {item.submenu ? 
                <ListItemText primary={item.label} /> :
                <Link href={item.href} className='w-full'>
                  <ListItemText primary={item.label} />
                </Link>}
            </ListItemButton>

            {/* Submenu */}
            {item.submenu && openSubmenu === item.label && (
              <List className="flex flex-col !pl-6">
                {item.submenu.map((sub) => (
                  <ListItemButton
                    key={sub.label}
                    onClick={onClose}
                    className="hover:!bg-gray-700"
                  >
                    <Link href={sub.href} className='w-full'>
                      <ListItemText primary={sub.label} />
                    </Link>
                  </ListItemButton>
                ))}
              </List>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  )
}
