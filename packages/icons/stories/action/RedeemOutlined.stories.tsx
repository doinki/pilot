import type { Meta, StoryObj } from '@storybook/react';

import RedeemOutlined from '../../lib/action/RedeemOutlined';

const meta: Meta<typeof RedeemOutlined> = {
  component: RedeemOutlined,
  tags: ['autodocs'],
  title: 'action/RedeemOutlined',
};

export default meta;
type Story = StoryObj<typeof RedeemOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
