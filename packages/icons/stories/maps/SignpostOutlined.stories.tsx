import type { Meta, StoryObj } from '@storybook/react';

import SignpostOutlined from '../../lib/maps/SignpostOutlined';

const meta: Meta<typeof SignpostOutlined> = {
  component: SignpostOutlined,
  tags: ['autodocs'],
  title: 'maps/SignpostOutlined',
};

export default meta;
type Story = StoryObj<typeof SignpostOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
