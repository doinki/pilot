import type { Meta, StoryObj } from '@storybook/react';

import SportsOutlined from '../../lib/social/SportsOutlined';

const meta: Meta<typeof SportsOutlined> = {
  component: SportsOutlined,
  tags: ['autodocs'],
  title: 'social/SportsOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
