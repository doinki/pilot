import type { Meta, StoryObj } from '@storybook/react';

import QuizOutlined from '../../lib/device/QuizOutlined';

const meta: Meta<typeof QuizOutlined> = {
  component: QuizOutlined,
  tags: ['autodocs'],
  title: 'device/QuizOutlined',
};

export default meta;
type Story = StoryObj<typeof QuizOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
