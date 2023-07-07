import type { Meta, StoryObj } from '@storybook/react';

import AmpStoriesOutlined from '../../lib/content/AmpStoriesOutlined';

const meta: Meta<typeof AmpStoriesOutlined> = {
  component: AmpStoriesOutlined,
  tags: ['autodocs'],
  title: 'content/AmpStoriesOutlined',
};

export default meta;
type Story = StoryObj<typeof AmpStoriesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
