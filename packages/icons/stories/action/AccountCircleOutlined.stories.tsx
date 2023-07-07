import type { Meta, StoryObj } from '@storybook/react';

import AccountCircleOutlined from '../../lib/action/AccountCircleOutlined';

const meta: Meta<typeof AccountCircleOutlined> = {
  component: AccountCircleOutlined,
  tags: ['autodocs'],
  title: 'action/AccountCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof AccountCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
