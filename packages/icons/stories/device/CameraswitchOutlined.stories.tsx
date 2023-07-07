import type { Meta, StoryObj } from '@storybook/react';

import CameraswitchOutlined from '../../lib/device/CameraswitchOutlined';

const meta: Meta<typeof CameraswitchOutlined> = {
  component: CameraswitchOutlined,
  tags: ['autodocs'],
  title: 'device/CameraswitchOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraswitchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
