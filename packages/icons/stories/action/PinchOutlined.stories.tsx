import type { Meta, StoryObj } from '@storybook/react';

import PinchOutlined from '../../lib/action/PinchOutlined';

const meta: Meta<typeof PinchOutlined> = {
  component: PinchOutlined,
  tags: ['autodocs'],
  title: 'action/PinchOutlined',
};

export default meta;
type Story = StoryObj<typeof PinchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
