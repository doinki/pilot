import type { Meta, StoryObj } from '@storybook/react';

import SentimentSatisfiedOutlined from '../../lib/social/SentimentSatisfiedOutlined';

const meta: Meta<typeof SentimentSatisfiedOutlined> = {
  component: SentimentSatisfiedOutlined,
  tags: ['autodocs'],
  title: 'social/SentimentSatisfiedOutlined',
};

export default meta;
type Story = StoryObj<typeof SentimentSatisfiedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
