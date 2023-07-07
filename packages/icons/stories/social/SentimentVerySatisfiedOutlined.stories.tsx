import type { Meta, StoryObj } from '@storybook/react';

import SentimentVerySatisfiedOutlined from '../../lib/social/SentimentVerySatisfiedOutlined';

const meta: Meta<typeof SentimentVerySatisfiedOutlined> = {
  component: SentimentVerySatisfiedOutlined,
  tags: ['autodocs'],
  title: 'social/SentimentVerySatisfiedOutlined',
};

export default meta;
type Story = StoryObj<typeof SentimentVerySatisfiedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
