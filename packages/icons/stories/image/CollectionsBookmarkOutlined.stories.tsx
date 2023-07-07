import type { Meta, StoryObj } from '@storybook/react';

import CollectionsBookmarkOutlined from '../../lib/image/CollectionsBookmarkOutlined';

const meta: Meta<typeof CollectionsBookmarkOutlined> = {
  component: CollectionsBookmarkOutlined,
  tags: ['autodocs'],
  title: 'image/CollectionsBookmarkOutlined',
};

export default meta;
type Story = StoryObj<typeof CollectionsBookmarkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
