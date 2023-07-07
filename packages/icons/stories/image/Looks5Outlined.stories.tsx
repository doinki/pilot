import type { Meta, StoryObj } from '@storybook/react';

import Looks5Outlined from '../../lib/image/Looks5Outlined';

const meta: Meta<typeof Looks5Outlined> = {
  component: Looks5Outlined,
  tags: ['autodocs'],
  title: 'image/Looks5Outlined',
};

export default meta;
type Story = StoryObj<typeof Looks5Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
