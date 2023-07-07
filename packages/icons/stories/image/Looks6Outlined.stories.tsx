import type { Meta, StoryObj } from '@storybook/react';

import Looks6Outlined from '../../lib/image/Looks6Outlined';

const meta: Meta<typeof Looks6Outlined> = {
  component: Looks6Outlined,
  tags: ['autodocs'],
  title: 'image/Looks6Outlined',
};

export default meta;
type Story = StoryObj<typeof Looks6Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
