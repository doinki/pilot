import type { Meta, StoryObj } from '@storybook/react';

import InsertDriveFileOutlined from '../../lib/editor/InsertDriveFileOutlined';

const meta: Meta<typeof InsertDriveFileOutlined> = {
  component: InsertDriveFileOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertDriveFileOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertDriveFileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
