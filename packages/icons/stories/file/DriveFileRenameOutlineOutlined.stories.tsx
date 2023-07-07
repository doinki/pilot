import type { Meta, StoryObj } from '@storybook/react';

import DriveFileRenameOutlineOutlined from '../../lib/file/DriveFileRenameOutlineOutlined';

const meta: Meta<typeof DriveFileRenameOutlineOutlined> = {
  component: DriveFileRenameOutlineOutlined,
  tags: ['autodocs'],
  title: 'file/DriveFileRenameOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof DriveFileRenameOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
