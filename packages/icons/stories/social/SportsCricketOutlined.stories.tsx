import type { Meta, StoryObj } from '@storybook/react';

import SportsCricketOutlined from '../../lib/social/SportsCricketOutlined';

const meta: Meta<typeof SportsCricketOutlined> = {
  component: SportsCricketOutlined,
  tags: ['autodocs'],
  title: 'social/SportsCricketOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsCricketOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
