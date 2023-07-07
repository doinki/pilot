import type { Meta, StoryObj } from '@storybook/react';

import CreateNewFolderOutlined from '../../lib/file/CreateNewFolderOutlined';

const meta: Meta<typeof CreateNewFolderOutlined> = {
  component: CreateNewFolderOutlined,
  tags: ['autodocs'],
  title: 'file/CreateNewFolderOutlined',
};

export default meta;
type Story = StoryObj<typeof CreateNewFolderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
