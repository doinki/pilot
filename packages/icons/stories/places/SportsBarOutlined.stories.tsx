import type { Meta, StoryObj } from '@storybook/react';

import SportsBarOutlined from '../../lib/places/SportsBarOutlined';

const meta: Meta<typeof SportsBarOutlined> = {
  component: SportsBarOutlined,
  tags: ['autodocs'],
  title: 'places/SportsBarOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsBarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
