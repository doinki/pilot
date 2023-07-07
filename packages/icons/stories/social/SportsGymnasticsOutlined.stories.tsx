import type { Meta, StoryObj } from '@storybook/react';

import SportsGymnasticsOutlined from '../../lib/social/SportsGymnasticsOutlined';

const meta: Meta<typeof SportsGymnasticsOutlined> = {
  component: SportsGymnasticsOutlined,
  tags: ['autodocs'],
  title: 'social/SportsGymnasticsOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsGymnasticsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
