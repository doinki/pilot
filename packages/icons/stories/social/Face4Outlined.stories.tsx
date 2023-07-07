import type { Meta, StoryObj } from '@storybook/react';

import Face4Outlined from '../../lib/social/Face4Outlined';

const meta: Meta<typeof Face4Outlined> = {
  component: Face4Outlined,
  tags: ['autodocs'],
  title: 'social/Face4Outlined',
};

export default meta;
type Story = StoryObj<typeof Face4Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
