import type { Meta, StoryObj } from '@storybook/react';

import SmokeFreeOutlined from '../../lib/places/SmokeFreeOutlined';

const meta: Meta<typeof SmokeFreeOutlined> = {
  component: SmokeFreeOutlined,
  tags: ['autodocs'],
  title: 'places/SmokeFreeOutlined',
};

export default meta;
type Story = StoryObj<typeof SmokeFreeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
