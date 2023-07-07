import type { Meta, StoryObj } from '@storybook/react';

import Looks4Outlined from '../../lib/image/Looks4Outlined';

const meta: Meta<typeof Looks4Outlined> = {
  component: Looks4Outlined,
  tags: ['autodocs'],
  title: 'image/Looks4Outlined',
};

export default meta;
type Story = StoryObj<typeof Looks4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
