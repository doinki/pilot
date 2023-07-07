import type { Meta, StoryObj } from '@storybook/react';

import FolderDeleteOutlined from '../../lib/file/FolderDeleteOutlined';

const meta: Meta<typeof FolderDeleteOutlined> = {
  component: FolderDeleteOutlined,
  tags: ['autodocs'],
  title: 'file/FolderDeleteOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderDeleteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
