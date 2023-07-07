import type { Meta, StoryObj } from '@storybook/react';

import Crop54Outlined from '../../lib/image/Crop54Outlined';

const meta: Meta<typeof Crop54Outlined> = {
  component: Crop54Outlined,
  tags: ['autodocs'],
  title: 'image/Crop54Outlined',
};

export default meta;
type Story = StoryObj<typeof Crop54Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
