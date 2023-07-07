import type { Meta, StoryObj } from '@storybook/react';

import SentimentNeutralOutlined from '../../lib/social/SentimentNeutralOutlined';

const meta: Meta<typeof SentimentNeutralOutlined> = {
  component: SentimentNeutralOutlined,
  tags: ['autodocs'],
  title: 'social/SentimentNeutralOutlined',
};

export default meta;
type Story = StoryObj<typeof SentimentNeutralOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
