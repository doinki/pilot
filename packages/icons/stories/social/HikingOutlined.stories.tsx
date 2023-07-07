import type { Meta, StoryObj } from '@storybook/react';

import HikingOutlined from '../../lib/social/HikingOutlined';

const meta: Meta<typeof HikingOutlined> = {
  component: HikingOutlined,
  tags: ['autodocs'],
  title: 'social/HikingOutlined',
};

export default meta;
type Story = StoryObj<typeof HikingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
