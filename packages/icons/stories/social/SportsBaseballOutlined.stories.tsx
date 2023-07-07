import type { Meta, StoryObj } from '@storybook/react';

import SportsBaseballOutlined from '../../lib/social/SportsBaseballOutlined';

const meta: Meta<typeof SportsBaseballOutlined> = {
  component: SportsBaseballOutlined,
  tags: ['autodocs'],
  title: 'social/SportsBaseballOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsBaseballOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
