import type { Meta, StoryObj } from '@storybook/react';

import PollOutlined from '../../lib/social/PollOutlined';

const meta: Meta<typeof PollOutlined> = {
  component: PollOutlined,
  tags: ['autodocs'],
  title: 'social/PollOutlined',
};

export default meta;
type Story = StoryObj<typeof PollOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
