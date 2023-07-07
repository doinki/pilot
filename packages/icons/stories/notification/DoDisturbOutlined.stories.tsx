import type { Meta, StoryObj } from '@storybook/react';

import DoDisturbOutlined from '../../lib/notification/DoDisturbOutlined';

const meta: Meta<typeof DoDisturbOutlined> = {
  component: DoDisturbOutlined,
  tags: ['autodocs'],
  title: 'notification/DoDisturbOutlined',
};

export default meta;
type Story = StoryObj<typeof DoDisturbOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
