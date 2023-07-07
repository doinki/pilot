import type { Meta, StoryObj } from '@storybook/react';

import FlakyOutlined from '../../lib/action/FlakyOutlined';

const meta: Meta<typeof FlakyOutlined> = {
  component: FlakyOutlined,
  tags: ['autodocs'],
  title: 'action/FlakyOutlined',
};

export default meta;
type Story = StoryObj<typeof FlakyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
