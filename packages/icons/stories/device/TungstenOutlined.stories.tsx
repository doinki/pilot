import type { Meta, StoryObj } from '@storybook/react';

import TungstenOutlined from '../../lib/device/TungstenOutlined';

const meta: Meta<typeof TungstenOutlined> = {
  component: TungstenOutlined,
  tags: ['autodocs'],
  title: 'device/TungstenOutlined',
};

export default meta;
type Story = StoryObj<typeof TungstenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
