import type { Meta, StoryObj } from '@storybook/react';

import ForkLeftOutlined from '../../lib/maps/ForkLeftOutlined';

const meta: Meta<typeof ForkLeftOutlined> = {
  component: ForkLeftOutlined,
  tags: ['autodocs'],
  title: 'maps/ForkLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof ForkLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
