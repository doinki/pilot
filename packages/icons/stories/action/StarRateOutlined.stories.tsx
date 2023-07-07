import type { Meta, StoryObj } from '@storybook/react';

import StarRateOutlined from '../../lib/action/StarRateOutlined';

const meta: Meta<typeof StarRateOutlined> = {
  component: StarRateOutlined,
  tags: ['autodocs'],
  title: 'action/StarRateOutlined',
};

export default meta;
type Story = StoryObj<typeof StarRateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
