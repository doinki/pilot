import type { Meta, StoryObj } from '@storybook/react';

import ArrowBackOutlined from '../../lib/navigation/ArrowBackOutlined';

const meta: Meta<typeof ArrowBackOutlined> = {
  component: ArrowBackOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowBackOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowBackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
