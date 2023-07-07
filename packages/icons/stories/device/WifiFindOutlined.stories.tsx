import type { Meta, StoryObj } from '@storybook/react';

import WifiFindOutlined from '../../lib/device/WifiFindOutlined';

const meta: Meta<typeof WifiFindOutlined> = {
  component: WifiFindOutlined,
  tags: ['autodocs'],
  title: 'device/WifiFindOutlined',
};

export default meta;
type Story = StoryObj<typeof WifiFindOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
