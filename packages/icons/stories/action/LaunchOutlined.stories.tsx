import type { Meta, StoryObj } from '@storybook/react';

import LaunchOutlined from '../../lib/action/LaunchOutlined';

const meta: Meta<typeof LaunchOutlined> = {
  component: LaunchOutlined,
  tags: ['autodocs'],
  title: 'action/LaunchOutlined',
};

export default meta;
type Story = StoryObj<typeof LaunchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
