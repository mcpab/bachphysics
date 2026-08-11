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
                id: 'colophon',
                href: '/colophon',
                type: 'link',
                label: 'colophon'
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
                        children: [
                            {
                                id: 'classical-mechanics-overview',
                                href: '/physics/classical-mechanics',
                                type: 'link',
                                label: 'Overview',
                                iconKey: 'functions',
                            },
                            {
                                id: 'rigid-body-motion',
                                type: 'group',
                                label: 'Rigid Body Motion',
                                children: [
                                    {
                                        id: 'rigid-body-motion-overview',
                                        href: '/physics/classical-mechanics/rigid-body-motion',
                                        type: 'link',
                                        label: 'Overview',
                                    },
                                    {
                                        id: 'kinematics-of-rotations',
                                        href: '/physics/classical-mechanics/rigid-body-motion/kinematics-of-rotations',
                                        type: 'link',
                                        label: 'Kinematics of Rotations',
                                    },
                                    {
                                        id: 'rotating-frame-dynamics',
                                        href: '/physics/classical-mechanics/rigid-body-motion/dynamics-in-rotating-reference-frames',
                                        type: 'link',
                                        label: 'Dynamics in Rotating Frames',
                                    },
                                    {
                                        id: 'rotating-earth',
                                        href: '/physics/classical-mechanics/rigid-body-motion/motion-on-the-rotating-earth',
                                        type: 'link',
                                        label: 'Motion on the Rotating Earth',
                                    },
                                    {
                                        id: 'foucault-pendulum',
                                        href: '/physics/classical-mechanics/rigid-body-motion/foucault-pendulum',
                                        type: 'link',
                                        label: 'The Foucault Pendulum',
                                    },
                                ],
                            },
                            {
                                id: 'lagrangian-mechanics',
                                href: '/physics/classical-mechanics/lagrangian-mechanics',
                                type: 'link',
                                label: 'Lagrangian Mechanics',
                            },
                            {
                                id: 'hamiltonian-mechanics',
                                href: '/physics/classical-mechanics/hamiltonian-mechanics',
                                type: 'link',
                                label: 'Hamiltonian Mechanics',
                            },
                        ]
                    },
                    {
                        id: 'electromagnetism',
                        type: 'group',
                        label: 'Electromagnetism',
                        children: [
                            {
                                id: 'electromagnetism-overview',
                                href: '/physics/electromagnetism',
                                type: 'link',
                                label: 'Overview',
                            },
                            {
                                id: 'moving-charges',
                                type: 'group',
                                label: 'Moving Charges',
                                children: [
                                    {
                                        id: 'moving-charges-overview',
                                        href: '/physics/electromagnetism/moving-charges',
                                        type: 'link',
                                        label: 'Overview',
                                    },
                                    {
                                        id: 'uniformly-moving-charge',
                                        href: '/physics/electromagnetism/moving-charges/uniformly-moving-charge',
                                        type: 'link',
                                        label: 'Uniformly Moving Charge',
                                    },
                                ],
                            },
                            {
                                id: 'relativistic-electromagnetism',
                                type: 'group',
                                label: 'Relativistic Electromagnetism',
                                children: [
                                    {
                                        id: 'relativistic-electromagnetism-overview',
                                        href: '/physics/electromagnetism/relativistic-electromagnetism',
                                        type: 'link',
                                        label: 'Overview',
                                    },
                                    {
                                        id: 'relativistic-maxwell-equations',
                                        href: '/physics/electromagnetism/relativistic-electromagnetism/maxwell-equations',
                                        type: 'link',
                                        label: 'Relativistic Maxwell Equations',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'relativity',
                        type: 'group',
                        label: 'Relativity',
                        children: [
                            {
                                id: 'relativity-overview',
                                href: '/physics/relativity',
                                type: 'link',
                                label: 'Overview',
                            },
                            {
                                id: 'special-relativity',
                                type: 'group',
                                label: 'Special Relativity',
                                children: [
                                    {
                                        id: 'special-relativity-overview',
                                        href: '/physics/relativity/special-relativity',
                                        type: 'link',
                                        label: 'Overview',
                                    },
                                    {
                                        id: 'lorentz-transformations',
                                        href: '/physics/relativity/special-relativity/lorentz-transformations',
                                        type: 'link',
                                        label: 'Lorentz Transformations',
                                    },
                                    {
                                        id: 'composition-of-velocities',
                                        href: '/physics/relativity/special-relativity/composition-of-velocities',
                                        type: 'link',
                                        label: 'Composition of Velocities',
                                    },
                                ],
                            },
                            {
                                id: 'general-relativity',
                                href: '/physics/relativity/general-relativity',
                                type: 'link',
                                label: 'General Relativity',
                            },
                        ],
                    },
                    {
                        id: 'quantum-mechanics',
                        href: '/physics/quantum-mechanics',
                        type: 'link',
                        label: 'Quantum Mechanics',
                    },
                    {
                        id: 'statistical-mechanics',
                        href: '/physics/statistical-mechanics',
                        type: 'link',
                        label: 'Statistical Mechanics',
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
