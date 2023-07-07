import type { Meta, StoryObj } from '@storybook/react';

import Person2Outlined from '../../lib/social/Person2Outlined';

const meta: Meta<typeof Person2Outlined> = {
  component: Person2Outlined,
  tags: ['autodocs'],
  title: 'social/Person2Outlined',
};

export default meta;
type Story = StoryObj<typeof Person2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
