import type { Meta, StoryObj } from '@storybook/react';

import PlayCircleFilledOutlined from '../../lib/av/PlayCircleFilledOutlined';

const meta: Meta<typeof PlayCircleFilledOutlined> = {
  component: PlayCircleFilledOutlined,
  tags: ['autodocs'],
  title: 'av/PlayCircleFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof PlayCircleFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
