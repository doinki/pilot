import type { Meta, StoryObj } from '@storybook/react';

import ChevronLeftOutlined from '../../lib/navigation/ChevronLeftOutlined';

const meta: Meta<typeof ChevronLeftOutlined> = {
  component: ChevronLeftOutlined,
  tags: ['autodocs'],
  title: 'navigation/ChevronLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof ChevronLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
