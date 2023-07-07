import type { Meta, StoryObj } from '@storybook/react';

import Crop75Outlined from '../../lib/image/Crop75Outlined';

const meta: Meta<typeof Crop75Outlined> = {
  component: Crop75Outlined,
  tags: ['autodocs'],
  title: 'image/Crop75Outlined',
};

export default meta;
type Story = StoryObj<typeof Crop75Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
