import type { Meta, StoryObj } from '@storybook/react';

import GamepadOutlined from '../../lib/hardware/GamepadOutlined';

const meta: Meta<typeof GamepadOutlined> = {
  component: GamepadOutlined,
  tags: ['autodocs'],
  title: 'hardware/GamepadOutlined',
};

export default meta;
type Story = StoryObj<typeof GamepadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
