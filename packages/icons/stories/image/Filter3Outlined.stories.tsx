import type { Meta, StoryObj } from '@storybook/react';

import Filter3Outlined from '../../lib/image/Filter3Outlined';

const meta: Meta<typeof Filter3Outlined> = {
  component: Filter3Outlined,
  tags: ['autodocs'],
  title: 'image/Filter3Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
