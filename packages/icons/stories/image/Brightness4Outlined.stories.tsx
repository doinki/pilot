import type { Meta, StoryObj } from '@storybook/react';

import Brightness4Outlined from '../../lib/image/Brightness4Outlined';

const meta: Meta<typeof Brightness4Outlined> = {
  component: Brightness4Outlined,
  tags: ['autodocs'],
  title: 'image/Brightness4Outlined',
};

export default meta;
type Story = StoryObj<typeof Brightness4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
