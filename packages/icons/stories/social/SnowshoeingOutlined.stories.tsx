import type { Meta, StoryObj } from '@storybook/react';

import SnowshoeingOutlined from '../../lib/social/SnowshoeingOutlined';

const meta: Meta<typeof SnowshoeingOutlined> = {
  component: SnowshoeingOutlined,
  tags: ['autodocs'],
  title: 'social/SnowshoeingOutlined',
};

export default meta;
type Story = StoryObj<typeof SnowshoeingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
