'use client'

import { usePathname } from 'next/navigation'
import { BreadMenuProps, DrawerMenuTree, HeaderLogoProps } from "@mcpab/web-blocks";
import { HeaderDrawer, type DrawerMenuRootProps } from "@mcpab/web-blocks/client";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import { NextLinkLike } from './NextLinkLike';


export function SiteMenu() {

    const menuTree: DrawerMenuTree = {
        id: 'root',
        type: 'root',
        children: [
            {
                id: 'home',
                href: '/',
                label: 'Home',
                type: 'link',
            },
            {
                id: 'about',
                href: '/about',
                type: 'link',
                label: 'about'
            },
            {
                id: 'physics',
                type: 'group',
                label: 'Physics',
                children: [
                    {
                        id: 'physics-overview',
                        href: '/physics',
                        type: 'link',
                        label: 'Overview',
                    },
                    {
                        id: 'classical-mechanics',
                        type: 'group',
                        label: 'Classical Mechanics',
                        children: [{
                            id: 'classical-mechanics-overview',
                            href: '/physics/classical-mechanics',
                            type: 'link',
                            label: 'Overview',
                            iconKey: 'functions',
                        },]
                    },


                ],
            }
        ]
    }

    const currentPath = usePathname();

    const breadMenu: BreadMenuProps = {
        pathname: currentPath,
        linkComponent: NextLinkLike,
    };

    const drawerProps: DrawerMenuRootProps = {
        currentPath,
        menuTree,
        anchor: 'right',
        LinkComponent: NextLinkLike,
        closeIndicator: <ChevronRightIcon color='primary' />,
        openIndicator: <ExpandMoreIcon />,
        menuButtonProps: {
            sx: { color: 'primary.main' },
        },
        treeOverrides: {
            link: {
                home: {
                    iconProps: {
                        sx: {
                            color: 'primary.main',
                            minWidth: 36,
                        },
                    },
                },
                about: {
                    iconProps: {
                        sx: {
                            color: 'primary.main',
                            minWidth: 36,
                        },
                    },
                },
            },
        },
    }

    const logoProps: HeaderLogoProps = {
        src: '/img/BachPhysicsLogo.png',
        ImageComponent: NextImageAdapter,
        width: 60,
        height: 60
    }

    return (
        <HeaderDrawer breadMenuProps={breadMenu} drawerProps={drawerProps} logoProps={logoProps} appBarProps={{
            elevation: 0,
            sx: {
                bgcolor: 'background.default',
                color: 'text.primary',
            },
        }} />
    );

}

export default SiteMenu;
