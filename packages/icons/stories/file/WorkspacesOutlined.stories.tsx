import type { Meta, StoryObj } from '@storybook/react';

import WorkspacesOutlined from '../../lib/file/WorkspacesOutlined';

const meta: Meta<typeof WorkspacesOutlined> = {
  component: WorkspacesOutlined,
  tags: ['autodocs'],
  title: 'file/WorkspacesOutlined',
};

export default meta;
type Story = StoryObj<typeof WorkspacesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
