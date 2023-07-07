import type { Meta, StoryObj } from '@storybook/react';

import OnlinePredictionOutlined from '../../lib/action/OnlinePredictionOutlined';

const meta: Meta<typeof OnlinePredictionOutlined> = {
  component: OnlinePredictionOutlined,
  tags: ['autodocs'],
  title: 'action/OnlinePredictionOutlined',
};

export default meta;
type Story = StoryObj<typeof OnlinePredictionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
