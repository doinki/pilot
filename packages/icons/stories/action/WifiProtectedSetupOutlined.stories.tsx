import type { Meta, StoryObj } from '@storybook/react';

import WifiProtectedSetupOutlined from '../../lib/action/WifiProtectedSetupOutlined';

const meta: Meta<typeof WifiProtectedSetupOutlined> = {
  component: WifiProtectedSetupOutlined,
  tags: ['autodocs'],
  title: 'action/WifiProtectedSetupOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiProtectedSetupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
