import type { Meta, StoryObj } from '@storybook/react';

import DynamicFeedOutlined from '../../lib/content/DynamicFeedOutlined';

const meta: Meta<typeof DynamicFeedOutlined> = {
  component: DynamicFeedOutlined,
  tags: ['autodocs'],
  title: 'content/DynamicFeedOutlined',
};

export default meta;
type Story = StoryObj<typeof DynamicFeedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
