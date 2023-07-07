import type { Meta, StoryObj } from '@storybook/react';

import EscalatorOutlined from '../../lib/places/EscalatorOutlined';

const meta: Meta<typeof EscalatorOutlined> = {
  component: EscalatorOutlined,
  tags: ['autodocs'],
  title: 'places/EscalatorOutlined',
};

export default meta;
type Story = StoryObj<typeof EscalatorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
