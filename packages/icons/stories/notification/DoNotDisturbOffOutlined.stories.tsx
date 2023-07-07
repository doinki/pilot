import type { Meta, StoryObj } from '@storybook/react';

import DoNotDisturbOffOutlined from '../../lib/notification/DoNotDisturbOffOutlined';

const meta: Meta<typeof DoNotDisturbOffOutlined> = {
  component: DoNotDisturbOffOutlined,
  tags: ['autodocs'],
  title: 'notification/DoNotDisturbOffOutlined',
};

export default meta;
type Story = StoryObj<typeof DoNotDisturbOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
