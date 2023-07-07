import type { Meta, StoryObj } from '@storybook/react';

import ArrowCircleUpOutlined from '../../lib/action/ArrowCircleUpOutlined';

const meta: Meta<typeof ArrowCircleUpOutlined> = {
  component: ArrowCircleUpOutlined,
  tags: ['autodocs'],
  title: 'action/ArrowCircleUpOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowCircleUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
