import type { Meta, StoryObj } from '@storybook/react';

import FolderOpenOutlined from '../../lib/file/FolderOpenOutlined';

const meta: Meta<typeof FolderOpenOutlined> = {
  component: FolderOpenOutlined,
  tags: ['autodocs'],
  title: 'file/FolderOpenOutlined',
};

export default meta;
type Story = StoryObj<typeof FolderOpenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
