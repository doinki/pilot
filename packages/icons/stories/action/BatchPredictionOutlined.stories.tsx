import type { Meta, StoryObj } from '@storybook/react';

import BatchPredictionOutlined from '../../lib/action/BatchPredictionOutlined';

const meta: Meta<typeof BatchPredictionOutlined> = {
  component: BatchPredictionOutlined,
  tags: ['autodocs'],
  title: 'action/BatchPredictionOutlined',
};

export default meta;
type Story = StoryObj<typeof BatchPredictionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
