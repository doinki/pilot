import type { Meta, StoryObj } from '@storybook/react';

import NoAccountsOutlined from '../../lib/action/NoAccountsOutlined';

const meta: Meta<typeof NoAccountsOutlined> = {
  component: NoAccountsOutlined,
  tags: ['autodocs'],
  title: 'action/NoAccountsOutlined',
};

export default meta;
type Story = StoryObj<typeof NoAccountsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
