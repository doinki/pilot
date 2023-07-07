import type { Meta, StoryObj } from '@storybook/react';

import Person3Outlined from '../../lib/social/Person3Outlined';

const meta: Meta<typeof Person3Outlined> = {
  component: Person3Outlined,
  tags: ['autodocs'],
  title: 'social/Person3Outlined',
};

export default meta;
type Story = StoryObj<typeof Person3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
