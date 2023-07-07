import type { Meta, StoryObj } from '@storybook/react';

import PodcastsOutlined from '../../lib/search/PodcastsOutlined';

const meta: Meta<typeof PodcastsOutlined> = {
  component: PodcastsOutlined,
  tags: ['autodocs'],
  title: 'search/PodcastsOutlined',
};

export default meta;
type Story = StoryObj<typeof PodcastsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
