import type { Meta, StoryObj } from '@storybook/react';

import Brightness5Outlined from '../../lib/image/Brightness5Outlined';

const meta: Meta<typeof Brightness5Outlined> = {
  component: Brightness5Outlined,
  tags: ['autodocs'],
  title: 'image/Brightness5Outlined',
};

export default meta;
type Story = StoryObj<typeof Brightness5Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
