import type { Meta, StoryObj } from '@storybook/react';

import DoDisturbOffOutlined from '../../lib/notification/DoDisturbOffOutlined';

const meta: Meta<typeof DoDisturbOffOutlined> = {
  component: DoDisturbOffOutlined,
  tags: ['autodocs'],
  title: 'notification/DoDisturbOffOutlined',
};

export default meta;
type Story = StoryObj<typeof DoDisturbOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
