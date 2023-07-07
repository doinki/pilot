import type { Meta, StoryObj } from '@storybook/react';

import ManageAccountsOutlined from '../../lib/action/ManageAccountsOutlined';

const meta: Meta<typeof ManageAccountsOutlined> = {
  component: ManageAccountsOutlined,
  tags: ['autodocs'],
  title: 'action/ManageAccountsOutlined',
};

export default meta;
type Story = StoryObj<typeof ManageAccountsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
