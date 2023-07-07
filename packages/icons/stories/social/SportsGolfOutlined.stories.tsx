import type { Meta, StoryObj } from '@storybook/react';

import SportsGolfOutlined from '../../lib/social/SportsGolfOutlined';

const meta: Meta<typeof SportsGolfOutlined> = {
  component: SportsGolfOutlined,
  tags: ['autodocs'],
  title: 'social/SportsGolfOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsGolfOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
