import type { Meta, StoryObj } from '@storybook/react';

import Brightness6Outlined from '../../lib/image/Brightness6Outlined';

const meta: Meta<typeof Brightness6Outlined> = {
  component: Brightness6Outlined,
  tags: ['autodocs'],
  title: 'image/Brightness6Outlined',
};

export default meta;
type Story = StoryObj<typeof Brightness6Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
