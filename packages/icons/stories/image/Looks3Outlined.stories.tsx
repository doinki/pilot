import type { Meta, StoryObj } from '@storybook/react';

import Looks3Outlined from '../../lib/image/Looks3Outlined';

const meta: Meta<typeof Looks3Outlined> = {
  component: Looks3Outlined,
  tags: ['autodocs'],
  title: 'image/Looks3Outlined',
};

export default meta;
type Story = StoryObj<typeof Looks3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
