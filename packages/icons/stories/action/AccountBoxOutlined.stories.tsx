import type { Meta, StoryObj } from '@storybook/react';

import AccountBoxOutlined from '../../lib/action/AccountBoxOutlined';

const meta: Meta<typeof AccountBoxOutlined> = {
  component: AccountBoxOutlined,
  tags: ['autodocs'],
  title: 'action/AccountBoxOutlined',
};

export default meta;
type Story = StoryObj<typeof AccountBoxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
