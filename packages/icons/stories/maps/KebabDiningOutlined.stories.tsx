import type { Meta, StoryObj } from '@storybook/react';

import KebabDiningOutlined from '../../lib/maps/KebabDiningOutlined';

const meta: Meta<typeof KebabDiningOutlined> = {
  component: KebabDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/KebabDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof KebabDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
