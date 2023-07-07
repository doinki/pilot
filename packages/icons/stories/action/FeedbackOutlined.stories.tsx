import type { Meta, StoryObj } from '@storybook/react';

import FeedbackOutlined from '../../lib/action/FeedbackOutlined';

const meta: Meta<typeof FeedbackOutlined> = {
  component: FeedbackOutlined,
  tags: ['autodocs'],
  title: 'action/FeedbackOutlined',
};

export default meta;
type Story = StoryObj<typeof FeedbackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
