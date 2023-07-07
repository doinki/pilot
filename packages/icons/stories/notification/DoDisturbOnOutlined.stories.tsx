import type { Meta, StoryObj } from '@storybook/react';

import DoDisturbOnOutlined from '../../lib/notification/DoDisturbOnOutlined';

const meta: Meta<typeof DoDisturbOnOutlined> = {
  component: DoDisturbOnOutlined,
  tags: ['autodocs'],
  title: 'notification/DoDisturbOnOutlined',
};

export default meta;
type Story = StoryObj<typeof DoDisturbOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
