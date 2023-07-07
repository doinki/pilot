import type { Meta, StoryObj } from '@storybook/react';

import QuickreplyOutlined from '../../lib/action/QuickreplyOutlined';

const meta: Meta<typeof QuickreplyOutlined> = {
  component: QuickreplyOutlined,
  tags: ['autodocs'],
  title: 'action/QuickreplyOutlined',
};

export default meta;
type Story = StoryObj<typeof QuickreplyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
