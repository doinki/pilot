import type { Meta, StoryObj } from '@storybook/react';

import SportsHandballOutlined from '../../lib/social/SportsHandballOutlined';

const meta: Meta<typeof SportsHandballOutlined> = {
  component: SportsHandballOutlined,
  tags: ['autodocs'],
  title: 'social/SportsHandballOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsHandballOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
