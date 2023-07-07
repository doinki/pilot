import type { Meta, StoryObj } from '@storybook/react';

import FolderZipOutlined from '../../lib/file/FolderZipOutlined';

const meta: Meta<typeof FolderZipOutlined> = {
  component: FolderZipOutlined,
  tags: ['autodocs'],
  title: 'file/FolderZipOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderZipOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
