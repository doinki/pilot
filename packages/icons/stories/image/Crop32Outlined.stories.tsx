import type { Meta, StoryObj } from '@storybook/react';

import Crop32Outlined from '../../lib/image/Crop32Outlined';

const meta: Meta<typeof Crop32Outlined> = {
  component: Crop32Outlined,
  tags: ['autodocs'],
  title: 'image/Crop32Outlined',
};

export default meta;
type Story = StoryObj<typeof Crop32Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
