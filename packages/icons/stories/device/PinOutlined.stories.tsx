import type { Meta, StoryObj } from '@storybook/react';

import PinOutlined from '../../lib/device/PinOutlined';

const meta: Meta<typeof PinOutlined> = {
  component: PinOutlined,
  tags: ['autodocs'],
  title: 'device/PinOutlined',
};

export default meta;
type Story = StoryObj<typeof PinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
