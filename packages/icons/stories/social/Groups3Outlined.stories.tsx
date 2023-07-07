import type { Meta, StoryObj } from '@storybook/react';

import Groups3Outlined from '../../lib/social/Groups3Outlined';

const meta: Meta<typeof Groups3Outlined> = {
  component: Groups3Outlined,
  tags: ['autodocs'],
  title: 'social/Groups3Outlined',
};

export default meta;
type Story = StoryObj<typeof Groups3Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
