import type { Meta, StoryObj } from '@storybook/react';

import Brightness1Outlined from '../../lib/image/Brightness1Outlined';

const meta: Meta<typeof Brightness1Outlined> = {
  component: Brightness1Outlined,
  tags: ['autodocs'],
  title: 'image/Brightness1Outlined',
};

export default meta;
type Story = StoryObj<typeof Brightness1Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
