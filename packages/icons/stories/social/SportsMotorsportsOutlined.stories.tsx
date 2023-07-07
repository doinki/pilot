import type { Meta, StoryObj } from '@storybook/react';

import SportsMotorsportsOutlined from '../../lib/social/SportsMotorsportsOutlined';

const meta: Meta<typeof SportsMotorsportsOutlined> = {
  component: SportsMotorsportsOutlined,
  tags: ['autodocs'],
  title: 'social/SportsMotorsportsOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsMotorsportsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
