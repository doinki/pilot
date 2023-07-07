import type { Meta, StoryObj } from '@storybook/react';

import SentimentVeryDissatisfiedOutlined from '../../lib/social/SentimentVeryDissatisfiedOutlined';

const meta: Meta<typeof SentimentVeryDissatisfiedOutlined> = {
  component: SentimentVeryDissatisfiedOutlined,
  tags: ['autodocs'],
  title: 'social/SentimentVeryDissatisfiedOutlined',
};

export default meta;
type Story = StoryObj<typeof SentimentVeryDissatisfiedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
