import type { Meta, StoryObj } from '@storybook/react';

import FolderOffOutlined from '../../lib/file/FolderOffOutlined';

const meta: Meta<typeof FolderOffOutlined> = {
  component: FolderOffOutlined,
  tags: ['autodocs'],
  title: 'file/FolderOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
