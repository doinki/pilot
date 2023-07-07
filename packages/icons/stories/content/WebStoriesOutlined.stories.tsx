import type { Meta, StoryObj } from '@storybook/react';

import WebStoriesOutlined from '../../lib/content/WebStoriesOutlined';

const meta: Meta<typeof WebStoriesOutlined> = {
  component: WebStoriesOutlined,
  tags: ['autodocs'],
  title: 'content/WebStoriesOutlined',
};

export default meta;
type Story = StoryObj<typeof WebStoriesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
