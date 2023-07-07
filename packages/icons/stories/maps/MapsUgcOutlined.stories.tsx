import type { Meta, StoryObj } from '@storybook/react';

import MapsUgcOutlined from '../../lib/maps/MapsUgcOutlined';

const meta: Meta<typeof MapsUgcOutlined> = {
  component: MapsUgcOutlined,
  tags: ['autodocs'],
  title: 'maps/MapsUgcOutlined',
};

export default meta;
type Story = StoryObj<typeof MapsUgcOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
