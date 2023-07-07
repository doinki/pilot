import type { Meta, StoryObj } from '@storybook/react';

import CasinoOutlined from '../../lib/places/CasinoOutlined';

const meta: Meta<typeof CasinoOutlined> = {
  component: CasinoOutlined,
  tags: ['autodocs'],
  title: 'places/CasinoOutlined',
};

export default meta;
type Story = StoryObj<typeof CasinoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
