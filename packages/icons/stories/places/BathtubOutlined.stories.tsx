import type { Meta, StoryObj } from '@storybook/react';

import BathtubOutlined from '../../lib/places/BathtubOutlined';

const meta: Meta<typeof BathtubOutlined> = {
  component: BathtubOutlined,
  tags: ['autodocs'],
  title: 'places/BathtubOutlined',
};

export default meta;
type Story = StoryObj<typeof BathtubOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
