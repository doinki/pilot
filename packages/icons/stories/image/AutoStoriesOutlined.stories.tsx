import type { Meta, StoryObj } from '@storybook/react';

import AutoStoriesOutlined from '../../lib/image/AutoStoriesOutlined';

const meta: Meta<typeof AutoStoriesOutlined> = {
  component: AutoStoriesOutlined,
  tags: ['autodocs'],
  title: 'image/AutoStoriesOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoStoriesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
