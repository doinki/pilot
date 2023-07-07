import type { Meta, StoryObj } from '@storybook/react';

import PrivateConnectivityOutlined from '../../lib/action/PrivateConnectivityOutlined';

const meta: Meta<typeof PrivateConnectivityOutlined> = {
  component: PrivateConnectivityOutlined,
  tags: ['autodocs'],
  title: 'action/PrivateConnectivityOutlined',
};

export default meta;
type Story = StoryObj<typeof PrivateConnectivityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
