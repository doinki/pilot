import type { Meta, StoryObj } from '@storybook/react';

import ArrowBackIosOutlined from '../../lib/navigation/ArrowBackIosOutlined';

const meta: Meta<typeof ArrowBackIosOutlined> = {
  component: ArrowBackIosOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowBackIosOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowBackIosOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
