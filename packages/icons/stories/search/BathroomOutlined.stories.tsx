import type { Meta, StoryObj } from '@storybook/react';

import BathroomOutlined from '../../lib/search/BathroomOutlined';

const meta: Meta<typeof BathroomOutlined> = {
  component: BathroomOutlined,
  tags: ['autodocs'],
  title: 'search/BathroomOutlined',
};

export default meta;
type Story = StoryObj<typeof BathroomOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
