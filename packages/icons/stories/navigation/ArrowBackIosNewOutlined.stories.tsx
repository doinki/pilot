import type { Meta, StoryObj } from '@storybook/react';

import ArrowBackIosNewOutlined from '../../lib/navigation/ArrowBackIosNewOutlined';

const meta: Meta<typeof ArrowBackIosNewOutlined> = {
  component: ArrowBackIosNewOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowBackIosNewOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowBackIosNewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
