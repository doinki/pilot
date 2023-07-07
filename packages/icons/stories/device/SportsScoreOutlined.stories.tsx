import type { Meta, StoryObj } from '@storybook/react';

import SportsScoreOutlined from '../../lib/device/SportsScoreOutlined';

const meta: Meta<typeof SportsScoreOutlined> = {
  component: SportsScoreOutlined,
  tags: ['autodocs'],
  title: 'device/SportsScoreOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsScoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
