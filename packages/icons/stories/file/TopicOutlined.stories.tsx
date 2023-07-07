import type { Meta, StoryObj } from '@storybook/react';

import TopicOutlined from '../../lib/file/TopicOutlined';

const meta: Meta<typeof TopicOutlined> = {
  component: TopicOutlined,
  tags: ['autodocs'],
  title: 'file/TopicOutlined',
};

export default meta;
type Story = StoryObj<typeof TopicOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
