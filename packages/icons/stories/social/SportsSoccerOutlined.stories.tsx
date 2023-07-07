import type { Meta, StoryObj } from '@storybook/react';

import SportsSoccerOutlined from '../../lib/social/SportsSoccerOutlined';

const meta: Meta<typeof SportsSoccerOutlined> = {
  component: SportsSoccerOutlined,
  tags: ['autodocs'],
  title: 'social/SportsSoccerOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsSoccerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
