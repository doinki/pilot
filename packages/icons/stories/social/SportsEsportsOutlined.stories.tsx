import type { Meta, StoryObj } from '@storybook/react';

import SportsEsportsOutlined from '../../lib/social/SportsEsportsOutlined';

const meta: Meta<typeof SportsEsportsOutlined> = {
  component: SportsEsportsOutlined,
  tags: ['autodocs'],
  title: 'social/SportsEsportsOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsEsportsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
