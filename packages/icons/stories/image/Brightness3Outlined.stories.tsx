import type { Meta, StoryObj } from '@storybook/react';

import Brightness3Outlined from '../../lib/image/Brightness3Outlined';

const meta: Meta<typeof Brightness3Outlined> = {
  component: Brightness3Outlined,
  tags: ['autodocs'],
  title: 'image/Brightness3Outlined',
};

export default meta;
type Story = StoryObj<typeof Brightness3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
