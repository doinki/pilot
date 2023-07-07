import type { Meta, StoryObj } from '@storybook/react';

import SentimentDissatisfiedOutlined from '../../lib/social/SentimentDissatisfiedOutlined';

const meta: Meta<typeof SentimentDissatisfiedOutlined> = {
  component: SentimentDissatisfiedOutlined,
  tags: ['autodocs'],
  title: 'social/SentimentDissatisfiedOutlined',
};

export default meta;
type Story = StoryObj<typeof SentimentDissatisfiedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
