import type { Meta, StoryObj } from '@storybook/react';

import FolderSharedOutlined from '../../lib/file/FolderSharedOutlined';

const meta: Meta<typeof FolderSharedOutlined> = {
  component: FolderSharedOutlined,
  tags: ['autodocs'],
  title: 'file/FolderSharedOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderSharedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
