import type { Meta, StoryObj } from '@storybook/react';

import ArrowCircleRightOutlined from '../../lib/action/ArrowCircleRightOutlined';

const meta: Meta<typeof ArrowCircleRightOutlined> = {
  component: ArrowCircleRightOutlined,
  tags: ['autodocs'],
  title: 'action/ArrowCircleRightOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowCircleRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
