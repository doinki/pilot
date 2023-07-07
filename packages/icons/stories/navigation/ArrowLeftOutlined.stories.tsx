import type { Meta, StoryObj } from '@storybook/react';

import ArrowLeftOutlined from '../../lib/navigation/ArrowLeftOutlined';

const meta: Meta<typeof ArrowLeftOutlined> = {
  component: ArrowLeftOutlined,
  tags: ['autodocs'],
  title: 'navigation/ArrowLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof ArrowLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
