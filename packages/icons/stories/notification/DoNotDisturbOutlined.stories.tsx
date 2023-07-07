import type { Meta, StoryObj } from '@storybook/react';

import DoNotDisturbOutlined from '../../lib/notification/DoNotDisturbOutlined';

const meta: Meta<typeof DoNotDisturbOutlined> = {
  component: DoNotDisturbOutlined,
  tags: ['autodocs'],
  title: 'notification/DoNotDisturbOutlined',
};

export default meta;
type Story = StoryObj<typeof DoNotDisturbOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
