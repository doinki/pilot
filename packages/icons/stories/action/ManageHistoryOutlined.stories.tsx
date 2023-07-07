import type { Meta, StoryObj } from '@storybook/react';

import ManageHistoryOutlined from '../../lib/action/ManageHistoryOutlined';

const meta: Meta<typeof ManageHistoryOutlined> = {
  component: ManageHistoryOutlined,
  tags: ['autodocs'],
  title: 'action/ManageHistoryOutlined',
};

export default meta;
type Story = StoryObj<typeof ManageHistoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
