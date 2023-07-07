import type { Meta, StoryObj } from '@storybook/react';

import DoNotDisturbOnOutlined from '../../lib/notification/DoNotDisturbOnOutlined';

const meta: Meta<typeof DoNotDisturbOnOutlined> = {
  component: DoNotDisturbOnOutlined,
  tags: ['autodocs'],
  title: 'notification/DoNotDisturbOnOutlined',
};

export default meta;
type Story = StoryObj<typeof DoNotDisturbOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
