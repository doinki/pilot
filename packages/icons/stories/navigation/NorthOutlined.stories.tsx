import type { Meta, StoryObj } from '@storybook/react';

import NorthOutlined from '../../lib/navigation/NorthOutlined';

const meta: Meta<typeof NorthOutlined> = {
  component: NorthOutlined,
  tags: ['autodocs'],
  title: 'navigation/NorthOutlined',
};

export default meta;
type Story = StoryObj<typeof NorthOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
