import type { Meta, StoryObj } from '@storybook/react';

import FolderCopyOutlined from '../../lib/file/FolderCopyOutlined';

const meta: Meta<typeof FolderCopyOutlined> = {
  component: FolderCopyOutlined,
  tags: ['autodocs'],
  title: 'file/FolderCopyOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderCopyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
