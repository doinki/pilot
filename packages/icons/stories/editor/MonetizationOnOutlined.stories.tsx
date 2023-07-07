import type { Meta, StoryObj } from '@storybook/react';

import MonetizationOnOutlined from '../../lib/editor/MonetizationOnOutlined';

const meta: Meta<typeof MonetizationOnOutlined> = {
  component: MonetizationOnOutlined,
  tags: ['autodocs'],
  title: 'editor/MonetizationOnOutlined',
};

export default meta;
type Story = StoryObj<typeof MonetizationOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
