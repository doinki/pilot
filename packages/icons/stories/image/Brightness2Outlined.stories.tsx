import type { Meta, StoryObj } from '@storybook/react';

import Brightness2Outlined from '../../lib/image/Brightness2Outlined';

const meta: Meta<typeof Brightness2Outlined> = {
  component: Brightness2Outlined,
  tags: ['autodocs'],
  title: 'image/Brightness2Outlined',
};

export default meta;
type Story = StoryObj<typeof Brightness2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
