import type { Meta, StoryObj } from '@storybook/react';

import DockOutlined from '../../lib/hardware/DockOutlined';

const meta: Meta<typeof DockOutlined> = {
  component: DockOutlined,
  tags: ['autodocs'],
  title: 'hardware/DockOutlined',
};

export default meta;
type Story = StoryObj<typeof DockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
