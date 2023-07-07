import type { Meta, StoryObj } from '@storybook/react';

import KeyboardArrowDownOutlined from '../../lib/hardware/KeyboardArrowDownOutlined';

const meta: Meta<typeof KeyboardArrowDownOutlined> = {
  component: KeyboardArrowDownOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardArrowDownOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardArrowDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
