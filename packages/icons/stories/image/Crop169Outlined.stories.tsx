import type { Meta, StoryObj } from '@storybook/react';

import Crop169Outlined from '../../lib/image/Crop169Outlined';

const meta: Meta<typeof Crop169Outlined> = {
  component: Crop169Outlined,
  tags: ['autodocs'],
  title: 'image/Crop169Outlined',
};

export default meta;
type Story = StoryObj<typeof Crop169Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
