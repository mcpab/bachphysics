import type {
    DrawerMenuGroupNode,
    DrawerMenuLinkNode,
    DrawerMenuTree,
    DrawerMenuTreeNode,
} from '@mcpab/web-blocks';

export type MenuTopic = {
    href: string;
    title: string;
};

export type MenuTopicMetadata = {
    description?: string;
    title?: string;
};

function findMenuGroup(
    nodes: readonly DrawerMenuTreeNode[],
    groupId: string,
): DrawerMenuGroupNode | undefined {
    for (const node of nodes) {
        if (node.type !== 'group') {
            continue;
        }

        if (node.id === groupId) {
            return node;
        }

        const nestedGroup = findMenuGroup(node.children, groupId);
        if (nestedGroup) {
            return nestedGroup;
        }
    }

    return undefined;
}

function findGroupOverview(group: DrawerMenuGroupNode): DrawerMenuLinkNode {
    const overviewId = `${group.id}-overview`;
    const overviewLink = group.children.find(
        (child): child is DrawerMenuLinkNode =>
            child.type === 'link' && child.id === overviewId,
    );

    if (!overviewLink) {
        throw new Error(`Menu group "${group.id}" has no "${overviewId}" link.`);
    }

    return overviewLink;
}

export function getImmediateMenuTopics(
    menuTree: DrawerMenuTree,
    rootGroupId: string,
): readonly MenuTopic[] {
    const rootGroup = findMenuGroup(menuTree.children, rootGroupId);
    if (!rootGroup) {
        throw new Error(`Menu group "${rootGroupId}" was not found.`);
    }

    const rootOverviewId = `${rootGroup.id}-overview`;

    return rootGroup.children.flatMap((child): MenuTopic[] => {
        if (child.type === 'link') {
            return child.id === rootOverviewId
                ? []
                : [{ href: child.href, title: child.label }];
        }

        // A group represents a collection, so its overview is the correct landing page.
        const overviewLink = findGroupOverview(child);
        return [{ href: overviewLink.href, title: child.label }];
    });
}

export function withMenuTopicMetadata(
    topics: readonly MenuTopic[],
    metadataByHref: Readonly<Record<string, MenuTopicMetadata>>,
): readonly (MenuTopic & MenuTopicMetadata)[] {
    return topics.map((topic) => ({
        ...topic,
        ...metadataByHref[topic.href],
    }));
}
