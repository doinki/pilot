import type { Meta, StoryObj } from '@storybook/react';

import VapeFreeOutlined from '../../lib/places/VapeFreeOutlined';

const meta: Meta<typeof VapeFreeOutlined> = {
  component: VapeFreeOutlined,
  tags: ['autodocs'],
  title: 'places/VapeFreeOutlined',
};

export default meta;
type Story = StoryObj<typeof VapeFreeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
