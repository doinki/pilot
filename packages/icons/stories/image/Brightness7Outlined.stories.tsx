import type { Meta, StoryObj } from '@storybook/react';

import Brightness7Outlined from '../../lib/image/Brightness7Outlined';

const meta: Meta<typeof Brightness7Outlined> = {
  component: Brightness7Outlined,
  tags: ['autodocs'],
  title: 'image/Brightness7Outlined',
};

export default meta;
type Story = StoryObj<typeof Brightness7Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
