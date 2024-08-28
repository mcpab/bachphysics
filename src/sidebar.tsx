import React from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, ListItemIcon, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

interface SubMenu {
    id: string;
    title: string;
}

interface Menu {
    id: string;
    title: string;
    submenus?: SubMenu[];
}

interface SidebarProps {
    menus: Menu[];
    open: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menus, open, onClose }) => {
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

    const handleToggleSubmenu = (id: string) => {
        setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
                {menus.map((menu) => (
                    <React.Fragment key={menu.id}>
                        <ListItem button onClick={() => handleToggleSubmenu(menu.id)}>
                            <ListItemText primary={menu.title} />
                            {menu.submenus ? (openSubmenus[menu.id] ? <ExpandLess /> : <ExpandMore />) : null}
                        </ListItem>
                        {menu.submenus && (
                            <Collapse in={openSubmenus[menu.id]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {menu.submenus.map((submenu) => (
                                        <ListItem button key={submenu.id} sx={{ pl: 4 }}>
                                            <ListItemText primary={submenu.title} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;