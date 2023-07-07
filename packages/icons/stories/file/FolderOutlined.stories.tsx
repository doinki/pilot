import type { Meta, StoryObj } from '@storybook/react';

import FolderOutlined from '../../lib/file/FolderOutlined';

const meta: Meta<typeof FolderOutlined> = {
  component: FolderOutlined,
  tags: ['autodocs'],
  title: 'file/FolderOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
