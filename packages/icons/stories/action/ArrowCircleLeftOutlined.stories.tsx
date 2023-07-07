import type { Meta, StoryObj } from '@storybook/react';

import ArrowCircleLeftOutlined from '../../lib/action/ArrowCircleLeftOutlined';

const meta: Meta<typeof ArrowCircleLeftOutlined> = {
  component: ArrowCircleLeftOutlined,
  tags: ['autodocs'],
  title: 'action/ArrowCircleLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowCircleLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
