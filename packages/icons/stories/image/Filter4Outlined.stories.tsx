import type { Meta, StoryObj } from '@storybook/react';

import Filter4Outlined from '../../lib/image/Filter4Outlined';

const meta: Meta<typeof Filter4Outlined> = {
  component: Filter4Outlined,
  tags: ['autodocs'],
  title: 'image/Filter4Outlined',
};

export default meta;
type Story = StoryObj<typeof Filter4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
