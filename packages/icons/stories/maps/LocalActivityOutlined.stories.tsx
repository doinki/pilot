import type { Meta, StoryObj } from '@storybook/react';

import LocalActivityOutlined from '../../lib/maps/LocalActivityOutlined';

const meta: Meta<typeof LocalActivityOutlined> = {
  component: LocalActivityOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalActivityOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalActivityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
