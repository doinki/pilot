import type { Meta, StoryObj } from '@storybook/react';

import DoNotTouchOutlined from '../../lib/places/DoNotTouchOutlined';

const meta: Meta<typeof DoNotTouchOutlined> = {
  component: DoNotTouchOutlined,
  tags: ['autodocs'],
  title: 'places/DoNotTouchOutlined',
};

export default meta;
type Story = StoryObj<typeof DoNotTouchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
