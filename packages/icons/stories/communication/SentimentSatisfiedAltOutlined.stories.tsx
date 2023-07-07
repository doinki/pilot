import type { Meta, StoryObj } from '@storybook/react';

import SentimentSatisfiedAltOutlined from '../../lib/communication/SentimentSatisfiedAltOutlined';

const meta: Meta<typeof SentimentSatisfiedAltOutlined> = {
  component: SentimentSatisfiedAltOutlined,
  tags: ['autodocs'],
  title: 'communication/SentimentSatisfiedAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SentimentSatisfiedAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
