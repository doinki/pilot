import type { Meta, StoryObj } from '@storybook/react';

import WifiPasswordOutlined from '../../lib/device/WifiPasswordOutlined';

const meta: Meta<typeof WifiPasswordOutlined> = {
  component: WifiPasswordOutlined,
  tags: ['autodocs'],
  title: 'device/WifiPasswordOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiPasswordOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
