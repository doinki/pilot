import type { Meta, StoryObj } from '@storybook/react';

import ArrowCircleDownOutlined from '../../lib/action/ArrowCircleDownOutlined';

const meta: Meta<typeof ArrowCircleDownOutlined> = {
  component: ArrowCircleDownOutlined,
  tags: ['autodocs'],
  title: 'action/ArrowCircleDownOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowCircleDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
