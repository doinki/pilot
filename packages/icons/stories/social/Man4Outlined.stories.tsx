import type { Meta, StoryObj } from '@storybook/react';

import Man4Outlined from '../../lib/social/Man4Outlined';

const meta: Meta<typeof Man4Outlined> = {
  component: Man4Outlined,
  tags: ['autodocs'],
  title: 'social/Man4Outlined',
};

export default meta;
type Story = StoryObj<typeof Man4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
