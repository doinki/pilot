import type { Meta, StoryObj } from '@storybook/react';

import ArrowForwardIosOutlined from '../../lib/navigation/ArrowForwardIosOutlined';

const meta: Meta<typeof ArrowForwardIosOutlined> = {
  component: ArrowForwardIosOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowForwardIosOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowForwardIosOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
