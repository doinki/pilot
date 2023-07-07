import type { Meta, StoryObj } from '@storybook/react';

import PinInvokeOutlined from '../../lib/action/PinInvokeOutlined';

const meta: Meta<typeof PinInvokeOutlined> = {
  component: PinInvokeOutlined,
  tags: ['autodocs'],
  title: 'action/PinInvokeOutlined',
};

export default meta;
type Story = StoryObj<typeof PinInvokeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
