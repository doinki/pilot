import type { Meta, StoryObj } from '@storybook/react';

import RvHookupOutlined from '../../lib/places/RvHookupOutlined';

const meta: Meta<typeof RvHookupOutlined> = {
  component: RvHookupOutlined,
  tags: ['autodocs'],
  title: 'places/RvHookupOutlined',
};

export default meta;
type Story = StoryObj<typeof RvHookupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
